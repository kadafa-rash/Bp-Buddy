import React from 'react';

const History = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-3xl shadow-lg w-full h-full p-6 sm:p-8 space-y-6">

      
        <header className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">History</h2>
        </header>

      
        <section className="bg-gray-50 p-4 sm:p-6 rounded-xl border shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center justify-center space-x-2 p-4 bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-md animate-pulse">
          <span> This feature is under development.</span>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600 mb-2"> Filter Readings</h3>

          
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

          
            <div>
              <label className="block text-sm text-gray-600 mb-1">Status</label>
              <select className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>All statuses</option>
                <option>Normal</option>
                <option>Elevated</option>
                <option>High</option>
                <option>Low</option>
              </select>
            </div>
          </div>

        
          <div className="flex flex-col justify-between">
            <div className="text-sm text-gray-500">
              <p className="mb-2">0 of 0 readings</p>
              <button className="border px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition">
                📁 Export PDF
              </button>
            </div>
          </div>
        </section>

      
        <section className="bg-gray-50 p-6 rounded-xl border text-center text-gray-400">
          <div className="text-4xl mb-2">🕒</div>
          <p className="text-sm font-medium">No readings found</p>
          <p className="text-xs">Start logging readings to see your history!</p>
        </section>
        
      </div>
    </div>
  );
};

export default History;
