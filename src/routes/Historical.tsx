import Chart from 'components/Chart';
import { ModuleData } from 'lib/module';
import { fetchHistorical } from 'lib/utils';
import { useState } from 'react';
import { useQuery } from 'react-query';

const moduleList = Array.from({ length: 20 }, (_, k) => k + 1);

function Historical() {
  const [module, setModule] = useState(1);
  const { data } = useQuery<ModuleData, Error>(
    ['historical', module],
    () => fetchHistorical(module),
    {
      refetchInterval:
        Number(process.env.REACT_APP_HISTORICAL_FETCH_INTERVAL) * 1000,
    }
  );

  return (
    <div>
      <select
        className="py-1"
        value={module}
        onChange={e => {
          setModule(Number(e.target.value));
        }}
      >
        {moduleList.map(m => (
          <option value={m} key={m}>
            Modul {m}
          </option>
        ))}
      </select>
      {data && (
        <div className="grid grid-cols-2 gap-4 py-8">
          <Chart
            data={data.chart_voltage}
            label="Voltage"
            unit="V"
            domain={[0, 5]}
            tickCount={6}
          />
          <Chart
            data={data.chart_temperature}
            label="Temperature"
            unit="&deg;C"
            domain={[0, 100]}
          />
          <Chart data={data.chart_soc} label="SoC" unit="%" domain={[0, 100]} />
          <Chart
            data={data.chart_current}
            label="Current"
            unit="A"
            domain={[0, 100]}
          />
        </div>
      )}
    </div>
  );
}

export default Historical;
