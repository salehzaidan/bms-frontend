import FusionCharts from 'fusioncharts';
import Powercharts from 'fusioncharts/fusioncharts.powercharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { useCallback, useContext, useState } from 'react';
import ReactFC from 'react-fusioncharts';
import useInterval from '../hooks/useInterval';
import sampleData from '../cell-heatmap-data.json';
import { getRandomNumber } from '../lib/utils';
import ReactDOMServer from 'react-dom/server';
import { AppContext } from '../App';

ReactFC.fcRoot(FusionCharts, Powercharts, FusionTheme);

const dataSource = {
  chart: {
    theme: 'fusion',
    showValues: true,
    showYaxisLabels: false,
    showXaxisLabels: false,
    decimal: 2,
    plottooltext: ReactDOMServer.renderToStaticMarkup(
      <div>
        <b>$tlLabel</b>
        <br />
        Voltage: $displayValue
        <br />
        Temperature: $trLabel
        <br />
        SoC: $brLabel
      </div>
    ),
  },
  rows: {
    row: [
      { id: 'row1', label: 'Row 1' },
      { id: 'row2', label: 'Row 2' },
      { id: 'row3', label: 'Row 3' },
      { id: 'row4', label: 'Row 4' },
    ],
  },
  columns: {
    column: [
      { id: 'col1', label: 'Column 1' },
      { id: 'col2', label: 'Column 2' },
      { id: 'col3', label: 'Column 3' },
      { id: 'col4', label: 'Column 4' },
      { id: 'col5', label: 'Column 5' },
    ],
  },
  colorRange: {
    gradient: 0,
    color: [
      { code: '#000000', minValue: 0, maxValue: 1, label: 'Error' },
      { code: '#e24b1a', minValue: 1, maxValue: 3, label: 'Bad' },
      { code: '#f6bc33', minValue: 3, maxValue: 3.9, label: 'Average' },
      { code: '#6da81e', minValue: 3.9, maxValue: 4.5, label: 'Good' },
    ],
  },
};

const NUM_COLUMNS = 5;

function getRowColId(cellId) {
  return {
    rowId: `row${Math.floor((cellId - 1) / NUM_COLUMNS) + 1}`,
    columnId: `col${((cellId - 1) % NUM_COLUMNS) + 1}`,
  };
}

function parseDataset(data) {
  return [
    {
      data: data.map(item => {
        const { rowId, columnId } = getRowColId(item.cellId);
        return {
          rowId,
          columnId,
          value: item.voltage,
          displayValue: `${item.voltage} V`,
          tlLabel: `Cell ID ${item.cellId}`,
          trLabel: `${item.temperature}°C`,
          brLabel: `${item.soc}%`,
        };
      }),
    },
  ];
}

function CellHeatmap({ className }) {
  const [dataset, setDataset] = useState(parseDataset(sampleData));
  const { dispatch } = useContext(AppContext);
  const delay = 1000;

  const updateData = useCallback(
    data => {
      setDataset(parseDataset(data));
      dispatch({ type: 'update', payload: data });
    },
    [dispatch]
  );

  useInterval(
    () =>
      updateData(
        sampleData.map(data => ({
          ...data,
          voltage: getRandomNumber(0, 4.5),
          temperature: getRandomNumber(0, 27.0),
          soc: getRandomNumber(0, 100.0),
        }))
      ),
    delay
  );

  return (
    <ReactFC
      type="heatmap"
      width={768}
      height="100%"
      dataFormat="json"
      dataSource={{ ...dataSource, dataset }}
      className={className}
    />
  );
}

export default CellHeatmap;
