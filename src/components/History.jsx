import React from 'react';

const History = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6">
        {/* Header */}
        <div className="text-left mb-4">
          <h2 className="text-xl font-semibold">History</h2>
        </div>

        {/* Filter Box */}
        <div className="bg-gray-50 p-4 rounded-xl border shadow-sm mb-4">
          <h3 className="text-sm font-medium text-gray-600 mb-3">🔍 Filter Readings</h3>
          <div className="flex flex-col gap-3">
            {/* Date Picker */}
            <div>
              <label className="text-sm text-gray-600">Date</label>
              <input
                type="date"
                className="mt-1 w-full px-3 py-2 border rounded-md text-sm"
              />
            </div>

            {/* Status Filter */}
            <div>
              <label className="text-sm text-gray-600">Status</label>
              <select className="mt-1 w-full px-3 py-2 border rounded-md text-sm">
                <option>All statuses</option>
                <option>Normal</option>
                <option>Elevated</option>
                <option>High</option>
                <option>Low</option>
              </select>
            </div>

            {/* Export */}
            <div className="flex justify-between items-center text-sm text-gray-500 mt-2">
              <p>0 of 0 readings</p>
              <button className="border px-4 py-1 rounded-md text-gray-600 text-sm hover:bg-gray-100">
                ⬇ Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* No Data Box */}
        <div className="bg-gray-50 p-6 rounded-xl border text-center text-gray-400">
          <div className="text-3xl mb-2">🕒</div>
          <p className="text-sm font-medium">No readings found</p>
          <p className="text-xs">Start logging readings to see your history!</p>
        </div>
      </div>
    </div>
  );
};

export default History;
