import '@fontsource/inter/variable.css';
import Tab from 'components/Tab';
import { Data } from 'lib/battery';
import { fetchRealtime } from 'lib/utils';
import { useQuery } from 'react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import Historical from 'routes/Historical';
import Realtime from 'routes/Realtime';

function App() {
  const { data } = useQuery<Data, Error>('realtime', fetchRealtime, {
    refetchInterval:
      Number(process.env.REACT_APP_REALTIME_FETCH_INTERVAL) * 1000,
  });

  return (
    <>
      {!data ? (
        <p>Loading...</p>
      ) : (
        <div className="min-h-screen bg-gray-50 text-gray-900">
          <header>
            <h1 className="mb-4 bg-teal-100 p-4 text-center text-2xl">
              Battery Management System
            </h1>
          </header>
          <main className="mx-auto max-w-screen-sm space-y-4 px-4 lg:max-w-screen-lg">
            <Tab timestamp={data.timestamp} />
            <Routes>
              <Route path="realtime" element={<Realtime data={data} />} />
              <Route path="historical" element={<Historical />} />
              {/* Redirect everything else to /realtime */}
              <Route path="/*" element={<Navigate to="/realtime" replace />} />
            </Routes>
          </main>
        </div>
      )}
    </>
  );
}

export default App;
