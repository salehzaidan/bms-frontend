import { Icon } from '@iconify/react';
import { AppCtx } from 'App';
import { Value, Variable } from 'lib/battery';
import { useCallback, useContext } from 'react';

interface ValueBarProps {
  variable: Variable;
  value: Value;
}

function ValueBar({ variable, value }: ValueBarProps) {
  const data = useContext(AppCtx);
  const getValuePercent = useCallback(() => {
    switch (variable) {
      case Variable.VOLTAGE:
        return (value.voltage / data.general[0].max_voltage) * 100;

      case Variable.TEMPERATURE:
        return (value.temperature / data.general[0].max_temperature) * 100;

      default:
        throw Error('Variable not recognized');
    }
  }, [variable, value, data]);

  return (
    <div className="flex items-center gap-1 text-teal-500">
      <Icon icon={variable.icon} className="h-4 w-4 shrink-0" />
      <div className="h-1 w-full bg-teal-200">
        <div
          style={{ width: `${getValuePercent()}%` }}
          className="h-full bg-current"
        />
      </div>
    </div>
  );
}

export default ValueBar;
