import { getBatteryFill } from 'lib/battery';
import { classNames, Props } from 'lib/utils';

interface BatteryGaugeProps extends Props {
  value: number;
}

function BatteryGauge({ value }: BatteryGaugeProps) {
  const [fgFill, bgFill] = getBatteryFill(value);
  return (
    <div aria-hidden className="mx-4">
      {/* Background fill */}
      <div className={classNames(bgFill, 'relative h-20 w-52 lg:w-72')}>
        {/* Foreground fill */}
        <div
          style={{ width: `${value}%` }}
          className={classNames(fgFill, 'h-full')}
        />

        {/* Battery cap */}
        <div
          className={classNames(
            bgFill,
            'absolute inset-y-1/2 left-52 h-8 w-2.5 -translate-y-1/2 rounded-tr-md rounded-br-md lg:left-72'
          )}
        />
      </div>

      {/* Axis */}
      <div className="mt-1 grid w-52 cursor-default grid-cols-4 border-t-[1.5px] border-gray-400 text-sm lg:w-72">
        <div className="h-1.5 border-l-[1.5px] border-gray-400"></div>
        <div className="h-1.5 border-l-[1.5px] border-gray-400"></div>
        <div className="h-1.5 border-l-[1.5px] border-gray-400"></div>
        <div className="h-1.5 border-x-[1.5px] border-gray-400"></div>
      </div>

      <div className="relative flex h-4 cursor-default select-none text-sm">
        <div className="absolute left-0 -translate-x-1/2">0%</div>
        <div className="absolute left-1/4 -translate-x-1/2">25%</div>
        <div className="absolute left-1/2 -translate-x-1/2">50%</div>
        <div className="absolute left-3/4 -translate-x-1/2">75%</div>
        <div className="absolute left-full -translate-x-1/2">100%</div>
      </div>
    </div>
  );
}

export default BatteryGauge;
