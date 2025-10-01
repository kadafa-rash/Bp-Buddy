import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-6">
      <div className="bg-white rounded-3xl shadow-md w-full max-w-md p-6 space-y-6">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-blue-600">BP Buddy</h1>
          <p className="text-sm text-gray-500">Your Blood Pressure Companion</p>
        </div>

        {/* Latest Reading */}
        <section className="bg-gray-50 border rounded-xl shadow-sm p-4">
          <h2 className="text-sm font-semibold text-blue-600 mb-2">Latest Reading</h2>
          <div className="flex flex-col items-center text-gray-400 h-24 justify-center">
            <div className="text-2xl">~</div>
            <p className="text-sm text-center mt-2">
              No readings yet<br />
              Log your first reading to get started!
            </p>
          </div>
        </section>

        {/* Reminder */}
        <section className="bg-gray-50 border rounded-xl shadow-sm p-4 flex justify-between items-center">
          <div>
            <h3 className="text-sm text-gray-600">Next reminder</h3>
            <p className="text-lg font-semibold">9:00</p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => navigate("/log")}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            + Log Reading
          </button>
          <button
            className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg text-sm font-medium transition"
          >
            📊 View Trends
          </button>
        </div>

        {/* Tip of the Day */}
        <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-yellow-600 mb-1">💡 Tip of the Day</h3>
          <p className="text-sm text-gray-700">
            Walk for at least 30 minutes daily to support heart health.
          </p>
        </section>

        {/* Bottom Navigation */}
        <footer className="flex justify-around text-sm text-gray-500 border-t pt-3">
          <button className="hover:text-blue-600">History</button>
          <button className="hover:text-blue-600">Tips</button>
          <button className="hover:text-blue-600">Settings</button>
        </footer>

      </div>
    </div>
  );
};

export default Dashboard;
