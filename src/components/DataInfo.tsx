import { Icon } from '@iconify/react';
import { Variable } from 'lib/battery';
import { Props } from 'lib/utils';
import Card from './Card';
import DataItem from './DataItem';

interface DataInfoProps extends Props {
  variable: Variable;
  min: number;
  average: number;
  max: number;
}

function DataInfo({ variable, min, average, max }: DataInfoProps) {
  return (
    <Card title={variable.label}>
      <Icon icon={variable.icon} className="h-16 w-16 text-teal-500" />
      <div className="mt-1 grid grid-cols-3 gap-4 sm:grid-cols-none sm:grid-rows-3">
        <DataItem label="Min" value={min} variable={variable} />
        <DataItem label="Average" value={average} variable={variable} />
        <DataItem label="Max" value={max} variable={variable} />
      </div>
    </Card>
  );
}

export default DataInfo;
