import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import History from './components/History';
import LogReading from './components/LogReading';
import HealthTips  from './components/HealthTips';
import LandingPage from './components/LandingPage';
import Trends from './components/Trends';
import Settings from './components/Settings';

function App() {
  return (
    <div className="min-h-screen bg-white">
      
    
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="*"
          element={
            <>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 text-sm text-gray-600 z-10">

        <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/history" className="hover:text-blue-600">History</Link>
        <Link to="/healthtips" className="hover:text-blue-600">HealthTips</Link>
        <Link to="/settings" className="hover:text-blue-600">Settings</Link>
      </nav>

      
     <div className="pb-16">
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/history" element={<History />} />
    <Route path="/log" element={<LogReading />} />
    <Route path="/healthtips" element={<HealthTips />} />
    <Route path="/trends" element={<Trends />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</div>

     </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
