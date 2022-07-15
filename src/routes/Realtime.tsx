import { TimestampContext } from 'App';
import BatteryCell from 'components/BatteryCell';
import BatteryGauge from 'components/BatteryGauge';
import Card from 'components/Card';
import DataInfo from 'components/DataInfo';
import DataItem from 'components/DataItem';
import { Data, Variable } from 'lib/battery';
import { fetchRealtime } from 'lib/utils';
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';

function Realtime() {
  const { data } = useQuery<Data, Error>('realtime', fetchRealtime, {
    refetchInterval:
      Number(process.env.REACT_APP_REALTIME_FETCH_INTERVAL) * 1000,
  });
  const { setTimestamp } = useContext(TimestampContext);

  useEffect(() => {
    if (data) {
      setTimestamp(data.timestamp);
    }
  }, [data, setTimestamp]);

  return !data ? (
    <p>Loading...</p>
  ) : (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card title="Battery Status">
        <BatteryGauge value={data.general[0].avg_soc} />
        <div>
          <DataItem
            className="row-start-2"
            label="Total Voltage"
            variable={Variable.VOLTAGE}
            value={data.general[0].total_voltage}
            variant="horizontal"
          />
          <DataItem
            className="row-start-2"
            label="Total Current"
            variable={Variable.CURRENT}
            value={data.current}
            variant="horizontal"
          />
        </div>
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
          {data.value.map((item, idx) => (
            <BatteryCell key={idx} value={item} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default Realtime;
