import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Trends = () => {
  const [activeTab, setActiveTab] = useState("Month");
  const navigate = useNavigate();

  const tabs = ["Week", "Month", "All Time"];


  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4">
    <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 space-y-4">

     <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
      <p className="font-medium">⚠️ This page is still under development...</p>
    </div>
     <button
      onClick={() => navigate('/dashboard')}
      className="flex items-center text-gray-800 hover:text-gray-800 mb-4"
    >
      ← Back
    </button>
  
      <div className="text-xl font-semibold">Trends</div>

     
     <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     
<div className="border rounded-lg p-4 sm:p-6 text-center space-y-4 text-gray-600">
        <div className="flex items-center justify-center space-x-2 text-blue-600 font-medium">
          <span className="text-sm">📈 Blood Pressure Trends</span>
        </div>
        <div className="flex flex-col items-center text-gray-400">
          <span className="h-10 w-10">📅</span> 
          <p>No data available for this time range</p>
          <p className="text-sm">Log more readings to see trends!</p>
        </div>
      </div>

    
      <div className="border rounded-lg p-4">
        <h3 className="font-medium text-gray-700 mb-2">Chart Legend</h3>
        <ul className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-blue-600 rounded-full"></div>
            <span>Systolic Pressure</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-cyan-500 rounded-full"></div>
            <span>Diastolic Pressure</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-4 h-1 bg-red-500 rounded-full"></div>
            <span>Pulse Rate</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-4 border-t-2 border-dashed border-green-600"></div>
            <span>Normal Range (120/80)</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-4 border-t-2 border-dashed border-pink-600"></div>
            <span>High Range (140/90)</span>
          </li>
        </ul>
      </div>
      </div>
      </div>
    
  );
 };


export default Trends;
