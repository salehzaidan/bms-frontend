import { format } from 'date-fns';

function Tab() {
  return (
    <div className="mx-auto flex items-center gap-4">
      <button className="rounded-md bg-teal-100 px-4 py-2 font-medium shadow transition-colors duration-100 hover:bg-teal-200">
        Realtime
      </button>
      <button className="rounded-md bg-teal-100 px-4 py-2 font-medium shadow transition-colors duration-100 hover:bg-teal-200">
        Historical
      </button>
      <div className="ml-auto rounded-md bg-teal-100 px-4 py-2 font-medium shadow">
        {format(new Date(), 'yyyy-MM-dd HH:mm')}
      </div>
    </div>
  );
}

export default Tab;
