import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { useState } from 'react';
import ReactFC from 'react-fusioncharts';
import useInterval from '../hooks/useInterval';
import { getRandomNumber } from '../lib/utils';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const dataSource = {
  chart: {
    theme: 'fusion',
    lowerLimit: 0,
    upperLimit: 100,
    lowerLimitDisplay: 'Empty',
    upperLimitDisplay: 'Full',
    numberSuffix: '%',
    useSameFillColor: true,
    useSameFillBgColor: true,
    showValue: false,
    chartBottomMargin: 0,
  },
  annotations: {
    showbelow: 1,
    groups: [
      {
        id: 'indicator',
        items: [
          {
            id: 'bgRectangle',
            type: 'rectangle',
            radius: 5,
            fillColor: '#333333',
            x: '$gaugeEndX - 10',
            toX: '$gaugeEndX + 12',
            y: '$gaugeCenterY - 20',
            toY: '$gaugeCenterY + 20',
          },
        ],
      },
    ],
  },
  colorRange: {
    color: [
      {
        minValue: 0,
        maxValue: 45,
        code: '#e44a00',
      },
      {
        minValue: 45,
        maxValue: 75,
        code: '#f8bd19',
      },
      {
        minValue: 75,
        maxValue: 100,
        code: '#6baa01',
      },
    ],
  },
};

function BatteryGauge() {
  const [value, setValue] = useState(0);
  const delay = 1000;

  useInterval(() => setValue(getRandomNumber(0, 100)), delay);

  return (
    <ReactFC
      type="hled"
      width={336}
      height={112}
      dataFormat="json"
      dataSource={{ ...dataSource, value }}
    />
  );
}

export default BatteryGauge;
