import { NavLink } from 'react-router-dom';

interface TabProps {
  timestamp: string;
}

function Tab({ timestamp }: TabProps) {
  return (
    <div className="mx-auto flex items-center gap-4">
      <NavLink
        to="realtime"
        className={({ isActive }) =>
          `${
            isActive ? 'bg-teal-200' : ''
          } rounded-md bg-teal-100 px-4 py-2 font-medium shadow transition-colors duration-100 hover:bg-teal-200`
        }
      >
        Realtime
      </NavLink>
      <NavLink
        to="historical"
        className={({ isActive }) =>
          `${
            isActive ? 'bg-teal-200' : ''
          } rounded-md bg-teal-100 px-4 py-2 font-medium shadow transition-colors duration-100 hover:bg-teal-200`
        }
      >
        Historical
      </NavLink>
      <div className="ml-auto rounded-md bg-teal-100 px-4 py-2 font-medium shadow">
        {timestamp}
      </div>
    </div>
  );
}

export default Tab;
