import { getBatteryFill, Value, Variable } from 'lib/battery';
import { classNames } from 'lib/utils';
import ValueBar from './ValueBar';

interface BatteryCellProps {
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
          {value.cell_id}
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
        <ValueBar variable={Variable.VOLTAGE} value={value} />
        <ValueBar variable={Variable.TEMPERATURE} value={value} />
      </div>
    </div>
  );
}

export default BatteryCell;
