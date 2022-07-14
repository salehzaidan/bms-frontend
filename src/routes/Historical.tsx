import Chart from 'components/Chart';
import { ModuleData } from 'lib/module';
import { fetchHistorical } from 'lib/utils';
import { useState } from 'react';
import { useQuery } from 'react-query';

const moduleList = [1, 2, 3, 4];

function Historical() {
  const [module, setModule] = useState(1);
  const { data } = useQuery<ModuleData, Error>(['historical', module], () =>
    fetchHistorical(module)
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
        <div className="mt-4 grid grid-cols-2 gap-4">
          <Chart data={data.chart_voltage} domain={[0, 5]} tickCount={6} />
          <Chart data={data.chart_temperature} domain={[0, 100]} />
          <Chart data={data.chart_soc} domain={[0, 100]} />
          <Chart data={data.chart_current} domain={[0, 100]} />
        </div>
      )}
    </div>
  );
}

export default Historical;
