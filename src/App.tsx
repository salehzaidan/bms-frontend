import '@fontsource/inter/variable.css';
import useInterval from 'hooks/useInterval';
import { Data } from 'lib/battery';
// import { randomizeData } from 'lib/utils';
import { createContext, useState } from 'react';
import Realtime from 'routes/Realtime';
import sampleData from 'sample-data.json';

export const AppCtx = createContext<Data>(sampleData);

function App() {
  const [data, setData] = useState<Data>(sampleData);
  const delay = 1000;

  useInterval(async () => {
    const response = await fetch(process.env.REACT_APP_DATA_PROVIDER!, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newData: Data = await response.json();
    setData(newData);
  }, delay);

  return (
    <AppCtx.Provider value={data}>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="bg-teal-100 p-4">
          <h1 className="text-center text-2xl">Battery Management System</h1>
        </header>
        <main className="py-8 px-4 lg:p-16">
          <Realtime data={data} />
        </main>
      </div>
    </AppCtx.Provider>
  );
}

export default App;
