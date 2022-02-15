import { useState } from 'react';
import BatteryGauge from './components/BatteryGauge';
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
    <>
      <header className="p-4">
        <h1 className="text-center text-2xl font-semibold text-cyan-600">
          Battery Management System
        </h1>
      </header>
      <main className="mx-auto grid max-w-screen-md grid-cols-2 items-center justify-items-center px-4">
        <BatteryGauge value={data.general[0].min_soc} />

        <DataItem
          className="row-start-2"
          label="Total Voltage"
          value={data.general[0].total_voltage}
          unit="V"
          insertSpace
        />

        <div className="row-span-2 grid grid-rows-3 gap-4">
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
    </>
  );
}

export default App;
