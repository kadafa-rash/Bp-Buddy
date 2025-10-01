import React from 'react';

const History = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 space-y-6">

        {/* Header */}
        <header>
          <h2 className="text-xl font-semibold text-gray-800">History</h2>
        </header>

        {/* Filter Section */}
        <section className="bg-gray-50 p-4 rounded-xl border shadow-sm space-y-4">
          <h3 className="text-sm font-medium text-gray-600">🔍 Filter Readings</h3>

          {/* Date Filter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Status Filter */}
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

          {/* Export Info */}
          <div className="flex justify-between items-center text-sm text-gray-500 pt-1">
            <p>0 of 0 readings</p>
            <button className="border px-4 py-1 rounded-md text-gray-600 hover:bg-gray-100 transition">
              ⬇ Export CSV
            </button>
          </div>
        </section>

        {/* Empty State */}
        <section className="bg-gray-50 p-6 rounded-xl border text-center text-gray-400">
          <div className="text-3xl mb-2">🕒</div>
          <p className="text-sm font-medium">No readings found</p>
          <p className="text-xs">Start logging readings to see your history!</p>
        </section>
        
      </div>
    </div>
  );
};

export default History;
