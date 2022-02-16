import { Icon } from '@iconify/react';
import { Variable } from 'lib/battery';
import { Props } from 'lib/utils';
import { useCallback } from 'react';
import Card from './Card';
import DataItem from './DataItem';

interface DataInfoProps extends Props {
  variable: Variable;
  min: number;
  average: number;
  max: number;
}

function DataInfo({ variable, min, average, max }: DataInfoProps) {
  const getIcon = useCallback<() => string>(() => {
    switch (variable) {
      case Variable.VOLTAGE:
        return 'emojione-monotone:high-voltage';

      case Variable.TEMPERATURE:
        return 'fluent:temperature-20-filled';

      case Variable.SOC:
        return 'ic:baseline-percent';

      default:
        throw Error("Props 'label' not recognized");
    }
  }, [variable]);

  return (
    <Card title={variable.label}>
      <Icon icon={getIcon()!} className="h-16 w-16 text-teal-500" />
      <div className="mt-1 grid grid-cols-3 gap-4 sm:grid-cols-none sm:grid-rows-3">
        <DataItem label="Min" value={min} variable={variable} />
        <DataItem label="Average" value={average} variable={variable} />
        <DataItem label="Max" value={max} variable={variable} />
      </div>
    </Card>
  );
}

export default DataInfo;
