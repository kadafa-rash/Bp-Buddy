import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-blue-600">BP Buddy</h1>
          <p className="text-sm text-gray-500">Your Blood Pressure Companion</p>
        </div>

        {/* Latest Reading */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm border">
          <h2 className="text-sm font-semibold text-blue-600 mb-2">📈 Latest Reading</h2>
          <div className="flex flex-col items-center justify-center text-gray-400 h-24">
            <div className="text-3xl">~</div>
            <p className="text-sm mt-2 text-center">No readings yet<br />Log your first reading to get started!</p>
          </div>
        </div>

        {/* Reminder */}
        <div className="bg-gray-50 rounded-xl p-4 mb-4 shadow-sm border flex items-center justify-between">
          <div>
            <h3 className="text-sm text-gray-600">⏰ Next reminder</h3>
            <p className="text-lg font-semibold">20:00</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 mb-4">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium">
            + Log Reading
          </button>
          <button className="flex-1 border border-gray-300 hover:bg-gray-100 text-gray-800 py-2 rounded-lg text-sm font-medium">
            📊 View Trends
          </button>
        </div>

        {/* Tip of the Day */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
          <h3 className="text-sm font-semibold text-yellow-600 mb-1">💡 Tip of the Day</h3>
          <p className="text-sm text-gray-700">
            Walk for at least 30 minutes daily to support heart health.
          </p>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around text-sm text-gray-500 border-t pt-3">
          <button className="hover:text-blue-600">History</button>
          <button className="hover:text-blue-600">Tips</button>
          <button className="hover:text-blue-600">Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
