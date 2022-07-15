import '@fontsource/inter/variable.css';
import Tab from 'components/Tab';
import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const TimestampContext = createContext<any>(null);

function App() {
  const [timestamp, setTimestamp] = useState<string | null>(null);
  return (
    <TimestampContext.Provider value={{ timestamp, setTimestamp }}>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header>
          <h1 className="mb-4 bg-teal-100 p-4 text-center text-2xl">
            Battery Management System
          </h1>
        </header>
        <main className="mx-auto max-w-screen-sm space-y-4 px-4 lg:max-w-screen-lg">
          <Tab />
          <Outlet />
        </main>
      </div>
    </TimestampContext.Provider>
  );
}

export default App;
