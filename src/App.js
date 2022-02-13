import FusionCharts from 'fusioncharts';
import { createContext, useReducer } from 'react';
import BatteryGauge from './components/BatteryGauge';
import CellHeatmap from './components/CellHeatmap';
import DataInfo from './components/DataInfo';
import DataItem from './components/DataItem';
import { average, sum } from './lib/utils';

// Register FusionCharts with license key from environment variable
FusionCharts.options.license({
  key: process.env.REACT_APP_FC_KEY,
  creditLabel: false,
});

const initialStats = {
  voltage: { min: 0.0, average: 0.0, max: 0.0, total: 0.0 },
  temperature: { min: 0.0, average: 0.0, max: 0.0 },
  soc: { min: 0.0, average: 0.0, max: 0.0 },
};

function reducer(stats, action) {
  switch (action.type) {
    case 'update':
      const voltages = action.payload.map(item => item.voltage);
      const temperatures = action.payload.map(item => item.temperature);
      const socs = action.payload.map(item => item.soc);

      return {
        voltage: {
          min: Math.min(...voltages),
          average: average(voltages),
          max: Math.max(...voltages),
          total: sum(voltages),
        },
        temperature: {
          min: Math.min(...temperatures),
          average: average(temperatures),
          max: Math.max(...temperatures),
        },
        soc: {
          min: Math.min(...socs),
          average: average(socs),
          max: Math.max(...socs),
        },
      };
    default:
      throw new Error();
  }
}

export const AppContext = createContext(null);

function App() {
  const [stats, dispatch] = useReducer(reducer, initialStats);
  return (
    <AppContext.Provider value={{ stats, dispatch }}>
      <header className="p-4">
        <h1 className="text-center text-2xl font-semibold text-cyan-600">
          Battery Management System
        </h1>
      </header>
      <main className="mx-auto grid max-w-screen-md grid-cols-2 items-center justify-items-center px-4">
        <BatteryGauge />

        <DataItem
          className="row-start-2"
          label="Total Voltage"
          value={stats.voltage.total}
          unit="V"
          insertSpace
        />

        <div className="row-span-2 grid grid-rows-3 gap-4">
          <DataInfo
            label="Voltage"
            min={stats.voltage.min}
            average={stats.voltage.average}
            max={stats.voltage.max}
            unit="V"
            insertSpace
          />
          <DataInfo
            label="Temperature"
            min={stats.temperature.min}
            average={stats.temperature.average}
            max={stats.temperature.max}
            unit="&deg;C"
          />
          <DataInfo
            label="SoC"
            min={stats.soc.min}
            average={stats.soc.average}
            max={stats.soc.max}
            unit="%"
          />
        </div>

        <CellHeatmap className="col-span-2 mt-4" />
      </main>
    </AppContext.Provider>
  );
}

export default App;
