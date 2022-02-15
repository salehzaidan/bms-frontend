import '@fontsource/inter/variable.css';
import { useState } from 'react';
import BatteryGauge from './components/BatteryGauge';
import Card from './components/Card';
import DataInfo from './components/DataInfo';
import DataItem from './components/DataItem';
import useInterval from './hooks/useInterval';
import { randomizeData } from './lib/utils';
import sampleData from './sample-data.json';

function App() {
  const [data, setData] = useState(sampleData);
  const delay = 1000;

  useInterval(() => setData(randomizeData(sampleData)), delay);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-teal-100 p-4">
        <h1 className="text-center text-2xl">Battery Management System</h1>
      </header>
      <main className="mx-auto mt-8 grid max-w-screen-sm grid-cols-1 gap-6 px-4 lg:max-w-screen-lg lg:grid-cols-2">
        <Card title="Battery Status">
          <BatteryGauge value={data.general[0].avg_soc} />
          <DataItem
            className="row-start-2"
            label="Total Voltage"
            value={data.general[0].total_voltage}
            unit="V"
            insertSpace
            variant="horizontal"
          />
        </Card>

        <div className="grid grid-cols-3 gap-6">
          <DataInfo
            label="Voltage"
            min={data.general[0].min_voltage}
            average={data.general[0].avg_voltage}
            max={data.general[0].max_voltage}
            unit="V"
            insertSpace
          />
          <DataInfo
            label="Temperature"
            min={data.general[0].min_temperature}
            average={data.general[0].avg_temperature}
            max={data.general[0].max_temperature}
            unit="&deg;C"
          />
          <DataInfo
            label="SoC"
            min={data.general[0].min_soc}
            average={data.general[0].avg_soc}
            max={data.general[0].max_soc}
            unit="%"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
