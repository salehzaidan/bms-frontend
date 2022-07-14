import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';
import { AxisDomain } from 'recharts/types/util/types';

interface ChartProps {
  data: { timestamp: string; value: number }[];
  domain?: AxisDomain;
  tickCount?: number;
}

function Chart({ data, domain, tickCount }: ChartProps) {
  return (
    <ResponsiveContainer aspect={2}>
      <LineChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="timestamp" />
        <YAxis
          domain={domain}
          tickCount={tickCount}
          interval="preserveStartEnd"
        />
        <Tooltip />
        <Line type="monotone" dataKey="value" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default Chart;
