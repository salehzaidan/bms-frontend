import { useCallback } from 'react';
import { classNames } from '../lib/utils';

function BatteryGauge({ value }) {
  const getFill = useCallback(() => {
    if (value >= 0 && value < 45) {
      return ['bg-battery-low', 'bg-red-900'];
    }
    if (value >= 45 && value < 75) {
      return ['bg-battery-medium', 'bg-yellow-900'];
    }
    if (value >= 75 && value <= 100) {
      return ['bg-battery-high', 'bg-green-900'];
    }
  }, [value]);

  const [fgFill, bgFill] = getFill();

  return (
    <div aria-hidden className="mx-4">
      {/* Background fill */}
      <div className={classNames(bgFill, 'relative h-20 w-72')}>
        {/* Foreground fill */}
        <div
          style={{ width: `${value}%` }}
          className={classNames(fgFill, 'h-full')}
        />

        {/* Battery cap */}
        <div
          className={classNames(
            bgFill,
            'absolute inset-y-1/2 left-72 h-8 w-2.5 -translate-y-1/2 rounded-tr-md rounded-br-md'
          )}
        />
      </div>

      {/* Axis */}
      <div className="mt-1 grid w-72 cursor-default grid-cols-4 border-t-[1.5px] border-gray-400 text-sm">
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
