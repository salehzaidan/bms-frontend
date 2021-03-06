import '@fontsource/inter/variable.css';
import BatteryCell from 'components/BatteryCell';
import BatteryGauge from 'components/BatteryGauge';
import Card from 'components/Card';
import DataInfo from 'components/DataInfo';
import DataItem from 'components/DataItem';
import useInterval from 'hooks/useInterval';
import { Data, Variable } from 'lib/battery';
// import { randomizeData } from 'lib/utils';
import { createContext, useState } from 'react';
import sampleData from 'sample-data.json';

export const AppCtx = createContext<Data>(sampleData);

function App() {
  const [data, setData] = useState<Data>(sampleData);
  const delay = 1000;

  useInterval(async () => {
    const response = await fetch(process.env.REACT_APP_DATA_PROVIDER!, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newData: Data = await response.json();
    setData(newData);
  }, delay);

  return (
    <AppCtx.Provider value={data}>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-teal-100 p-4">
          <h1 className="text-center text-2xl">Battery Management System</h1>
        </header>
        <main className="py-8 px-4 lg:p-16">
          <div className="mx-auto grid max-w-screen-sm grid-cols-1 gap-6 lg:max-w-screen-lg lg:grid-cols-2">
            <Card title="Battery Status">
              <BatteryGauge value={data.general[0].avg_soc} />
              <DataItem
                className="row-start-2"
                label="Total Voltage"
                variable={Variable.VOLTAGE}
                value={data.general[0].total_voltage}
                variant="horizontal"
              />
            </Card>
            <div className="grid grid-rows-3 gap-6 sm:grid-cols-3 sm:grid-rows-none">
              <DataInfo
                variable={Variable.VOLTAGE}
                min={data.general[0].min_voltage}
                average={data.general[0].avg_voltage}
                max={data.general[0].max_voltage}
              />
              <DataInfo
                variable={Variable.TEMPERATURE}
                min={data.general[0].min_temperature}
                average={data.general[0].avg_temperature}
                max={data.general[0].max_temperature}
              />
              <DataInfo
                variable={Variable.SOC}
                min={data.general[0].min_soc}
                average={data.general[0].avg_soc}
                max={data.general[0].max_soc}
              />
            </div>
            <Card title="Cell Status" className="lg:col-span-2">
              <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4 lg:grid-cols-5">
                {data.value.map(item => (
                  <BatteryCell key={item.cell_id} value={item} />
                ))}
              </div>
            </Card>
          </div>
        </main>
      </div>
    </AppCtx.Provider>
  );
}

export default App;
