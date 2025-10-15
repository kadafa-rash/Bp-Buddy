import React from 'react';

const Settings = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>

      
      <div className="border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <span className="inline-block text-xl">👤</span> Account
        </h3>
        <div className="mb-2">
          <p className="text-sm text-gray-500">Name</p>
          <p className="text-base font-medium">john Doe</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-500">Age</p>
          <p className="text-base font-medium">30</p>
        </div>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded-md text-sm font-medium">
          <span className="inline-block mr-2">↩</span> Sign Out
        </button>
      </div>
    </div>
  );
};

export default Settings;

