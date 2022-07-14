import { Icon } from '@iconify/react';
import { decode } from 'html-entities';
import { getBatteryFill, Value, Variable } from 'lib/battery';
import { classNames, Props } from 'lib/utils';
import { useCallback } from 'react';

interface BatteryCellValueProps extends Props {
  variable: Variable;
  value: Value;
}

function BatteryCellValue({ variable, value }: BatteryCellValueProps) {
  const getValue = useCallback(() => {
    switch (variable) {
      case Variable.VOLTAGE:
        return value.voltage;

      case Variable.TEMPERATURE:
        return value.temperature;

      case Variable.SOC:
        return value.soc;

      default:
        throw Error('Variable not recognized');
    }
  }, [variable, value]);

  return (
    <div className="flex items-center justify-between">
      <Icon icon={variable.icon} className="h-5 w-5 shrink-0 text-teal-600" />
      <div className="text-sm">
        {getValue().toFixed(2) +
          (variable.space ? ' ' : '') +
          decode(variable.unit)}
      </div>
    </div>
  );
}

interface BatteryCellProps extends Props {
  value: Value;
}

function BatteryCell({ value }: BatteryCellProps) {
  const [fgFill, bgFill] = getBatteryFill(value.soc);
  return (
    <div aria-hidden className="mx-2 mt-2">
      {/* Background fill */}
      <div className={classNames(bgFill, 'relative h-10 w-20')}>
        {/* Foreground fill */}
        <div
          style={{ width: `${value.soc}%` }}
          className={classNames(fgFill, 'h-full')}
        />

        {/* Cell ID */}
        <div className="absolute -left-2 -top-2 grid h-5 w-5 cursor-default select-none place-items-center rounded-md bg-teal-600 text-xs leading-none text-white">
          {value.modul}
        </div>

        {/* Battery cap */}
        <div
          className={classNames(
            bgFill,
            'absolute inset-y-1/2 left-20 h-4 w-1 -translate-y-1/2 rounded-tr-md rounded-br-md'
          )}
        />
      </div>

      {/* Stats */}
      <div className="mt-2 space-y-1">
        <BatteryCellValue variable={Variable.VOLTAGE} {...{ value }} />
        <BatteryCellValue variable={Variable.TEMPERATURE} {...{ value }} />
        <BatteryCellValue variable={Variable.SOC} {...{ value }} />
      </div>
    </div>
  );
}

export default BatteryCell;
