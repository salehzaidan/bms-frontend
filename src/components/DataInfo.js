import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import Card from './Card';
import DataItem from './DataItem';

function DataInfo({ label, min, average, max, unit, insertSpace }) {
  const getIcon = useCallback(() => {
    if (label === 'Voltage') {
      return 'emojione-monotone:high-voltage';
    }
    if (label === 'Temperature') {
      return 'fluent:temperature-20-filled';
    }
    if (label === 'SoC') {
      return 'ic:baseline-percent';
    }
  }, [label]);

  return (
    <Card title={label}>
      <Icon icon={getIcon()} className="h-16 w-16 text-teal-500" />
      <div className="mt-1 grid grid-rows-3 gap-4">
        <DataItem
          label="Min"
          value={min}
          unit={unit}
          insertSpace={insertSpace}
        />
        <DataItem
          label="Average"
          value={average}
          unit={unit}
          insertSpace={insertSpace}
        />
        <DataItem
          label="Max"
          value={max}
          unit={unit}
          insertSpace={insertSpace}
        />
      </div>
    </Card>
  );
}

export default DataInfo;
