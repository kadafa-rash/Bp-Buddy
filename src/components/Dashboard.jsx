import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-7xl mx-auto p-6 sm:p-8 space-y-8">

       
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-blue-600">BP Buddy</h1>
          <p className="text-base text-gray-500">Your Blood Pressure Companion</p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
        
          <section className="bg-gray-50 border rounded-xl shadow-sm p-6">
            <h2 className="text-base font-semibold text-blue-600 mb-2">Latest Reading</h2>
            <div className="flex flex-col items-center text-gray-400 h-24 justify-center">
              <div className="text-3xl">~</div>
              <p className="text-sm text-center mt-2">
                No readings yet<br />
                Log your first reading to get started!
              </p>
            </div>
          </section>

        
          <section className="bg-gray-50 border rounded-xl shadow-sm p-6 flex flex-col justify-center">
            <h3 className="text-base text-gray-600">Next reminder</h3>
            <p className="text-2xl font-semibold">9:00</p>
          </section>
        </div>

      
        <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-base font-semibold text-yellow-600 mb-1">💡 Tip of the Day</h3>
          <p className="text-sm text-gray-700">
            Walk for at least 30 minutes daily to support heart health.
          </p>
        </section>

        
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
          <button
            onClick={() => navigate("/log")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-sm sm:text-base font-medium transition"
          >
            + Log Reading
          </button>
          <button
            onClick={() => navigate("/trends")}
            className="w-full border border-gray-300 hover:bg-gray-100 text-gray-800 py-3 rounded-lg text-sm sm:text-base font-medium transition"
          >
             View Trends
          </button>
        </div>

        
        
      </div>
    </div>
  );
};

export default Dashboard;
