import { classNames } from '../lib/utils';

function DataItem({
  className = '',
  label,
  value,
  unit = null,
  insertSpace = false,
  variant = 'vertical',
}) {
  return (
    <div
      className={classNames(
        variant === 'vertical' ? 'flex-col gap-1' : 'flex-row gap-4',
        'flex items-center text-center',
        className
      )}
    >
      <h3
        className={classNames(
          variant === 'vertical' ? 'text-sm' : 'text-base',
          'uppercase text-teal-600'
        )}
      >
        {label}
      </h3>
      <p
        className={classNames(variant === 'vertical' ? 'text-lg' : 'text-2xl')}
      >
        {value.toFixed(2) + (insertSpace ? ' ' : '') + unit}
      </p>
    </div>
  );
}

export default DataItem;
