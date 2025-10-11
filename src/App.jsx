import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import History from './components/History';
import LogReading from './components/LogReading';
import HealthTips  from './components/HealthTips';


function App() {
  return (
    <div className="min-h-screen bg-white">
    
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around py-2 text-sm text-gray-600 z-10">
        <Link to="/" className="hover:text-blue-600">Dashboard</Link>
        <Link to="/history" className="hover:text-blue-600">History</Link>
        <Link to="/healthtips" className="hover:text-blue-600">HealthTips</Link>
        <Link to="/settings" className="hover:text-blue-600">Settings</Link>
      </nav>

      
     <div className="pb-16">
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/history" element={<History />} />
    <Route path="/log" element={<LogReading />} />
    <Route path="/healthtips" element={<HealthTips />} />
  </Routes>
</div>

    </div>
  );
}

export default App;
