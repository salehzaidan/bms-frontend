import FusionCharts from 'fusioncharts';
import BatteryGauge from './components/BatteryGauge';

// Register FusionCharts with license key from environment variable
FusionCharts.options.license({
  key: process.env.REACT_APP_FC_KEY,
  creditLabel: false,
});

function App() {
  return (
    <div>
      <h1>Battery Management System</h1>
      <BatteryGauge />
    </div>
  );
}

export default App;
