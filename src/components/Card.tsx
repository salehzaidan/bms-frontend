import { classNames, Props } from 'lib/utils';

interface CardProps extends Props {
  title: string;
}

function Card({ title, children, className = '' }: CardProps) {
  return (
    <div
      className={classNames(
        className,
        'flex flex-col overflow-hidden rounded-md border border-gray-200 shadow'
      )}
    >
      <h2 className="bg-teal-100 px-4 py-2 font-medium">{title}</h2>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-white p-4">
        {children}
      </div>
    </div>
  );
}

export default Card;
