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
        variant === 'vertical' ? 'flex-col' : 'flex-row',
        'flex items-center gap-4 text-center',
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
        className={classNames(variant === 'vertical' ? 'text-sm' : 'text-2xl')}
      >
        {value.toFixed(2) + (insertSpace ? ' ' : '') + unit}
      </p>
    </div>
  );
}

export default DataItem;
