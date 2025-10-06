import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 md:px-10 py-6">
      <div className="bg-white rounded-3xl shadow-md w-full h-full p-6 sm:p-8 space-y-6">

      
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">BP Buddy</h1>
          <p className="text-sm sm:text-base text-gray-500">Your Blood Pressure Companion</p>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          
          <section className="bg-gray-50 border rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-sm sm:text-base font-semibold text-blue-600 mb-2">Latest Reading</h2>
            <div className="flex flex-col items-center text-gray-400 h-24 justify-center">
              <div className="text-2xl sm:text-3xl">~</div>
              <p className="text-sm sm:text-base text-center mt-2">
                No readings yet<br />
                Log your first reading to get started!
              </p>
            </div>
          </section>

          
          <section className="bg-gray-50 border rounded-xl shadow-sm p-4 sm:p-6 flex justify-between items-center">
            <div>
              <h3 className="text-sm sm:text-base text-gray-600">Next reminder</h3>
              <p className="text-lg sm:text-xl font-semibold">9:00</p>
            </div>
          </section>

    
          <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-6 md:col-span-2">
            <h3 className="text-sm sm:text-base font-semibold text-yellow-600 mb-1">💡 Tip of the Day</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Walk for at least 30 minutes daily to support heart health.
            </p>
          </section>
        </div>

      
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            onClick={() => navigate("/log")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition"
          >
            + Log Reading
          </button>
          <button
            onClick={() => navigate("/trends")}
            className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition"
          >
            📊 View Trends
          </button>
        </div>

    
        <footer className="flex justify-around text-sm sm:text-base text-gray-500 border-t pt-4 mt-4">
          <button className="hover:text-blue-600 transition">History</button>
          <button className="hover:text-blue-600 transition">Tips</button>
          <button className="hover:text-blue-600 transition">Settings</button>
        </footer>

      </div>
    </div>
  );
};

export default Dashboard;
