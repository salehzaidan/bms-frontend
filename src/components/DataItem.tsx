import { decode } from 'html-entities';
import { Variable } from 'lib/battery';
import { classNames, Props } from 'lib/utils';

interface DataItemProps extends Props {
  label: string;
  variable: Variable;
  value: number;
  variant?: 'vertical' | 'horizontal';
}

function DataItem({
  className = '',
  label,
  variable,
  value,
  variant = 'vertical',
}: DataItemProps) {
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
        {value.toFixed(2) + (variable.space ? ' ' : '') + decode(variable.unit)}
      </p>
    </div>
  );
}

export default DataItem;
