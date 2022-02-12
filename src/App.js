import FusionCharts from 'fusioncharts';
import BatteryGauge from './components/BatteryGauge';
import CellHeatmap from './components/CellHeatmap';
import DataInfo from './components/DataInfo';
import DataItem from './components/DataItem';

// Register FusionCharts with license key from environment variable
FusionCharts.options.license({
  key: process.env.REACT_APP_FC_KEY,
  creditLabel: false,
});

function App() {
  return (
    <>
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
          value={59.58}
          unit="V"
          insertSpace
        />

        <div className="row-span-2 grid grid-rows-3 gap-4">
          <DataInfo
            label="Voltage"
            min={0.0}
            average={2.98}
            max={4.38}
            unit="V"
            insertSpace
          />
          <DataInfo
            label="Temperature"
            min={0.0}
            average={22.75}
            max={26.46}
            unit="&deg;C"
          />
          <DataInfo
            label="SoC"
            min={1.57}
            average={31.1}
            max={100.0}
            unit="%"
          />
        </div>

        <CellHeatmap className="col-span-2 mt-4" />
      </main>
    </>
  );
}

export default App;
