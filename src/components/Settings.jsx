import React from 'react';
import useUserStore from "../store/userStore";


const Settings = () => {
  const firstName = useUserStore((state) => state.firstName);
  const lastName = useUserStore((state) => state.lastName);
   const age = useUserStore((state) => state.age);
   console.log(age);
  return (
    <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto mt-6 sm:mt-10 p-4 sm:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Settings</h2>
      
      <div className="border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
          <span className="inline-block text-xl">👤</span> Account
        </h3>
       <div className="mb-2">
  <p className="text-sm text-gray-500">Name</p>
  <p>
    {firstName ? ` ${firstName}` : ''} {lastName ? ` ${lastName}` : ''} 
  </p>
</div>

       <div className="mb-4">
  <p className="text-sm text-gray-500">Age</p>
  <p className="text-base font-medium">{age ? `${age}` : ''}</p>
</div>

        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded-md text-sm font-medium">
          <span className="inline-block mr-2"></span> Sign Out
        </button>
      </div>
      <div className="border rounded-lg p-6 mb-6">
  <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
    <span className="text-xl"></span> About BP Buddy
  </h3>
  <p className="text-sm text-gray-700 mb-2">
    <strong>Version:</strong> 1.0.0
  </p>
  <p className="text-sm text-gray-700 mb-4">
    <strong>Purpose:</strong> Blood Pressure Tracking & Health Monitoring
  </p>
  <p className="text-sm text-gray-600 mb-4">
    BP Buddy helps you track your blood pressure readings, monitor trends, and maintain better cardiovascular health through consistent monitoring and helpful tips.
  </p>

  <div className="bg-gray-50 border-l-4 border-blue-400 p-4 rounded-md">
    <h4 className="text-sm font-semibold text-blue-800 mb-1">🔒 Privacy & Data Security</h4>
    <p className="text-sm text-gray-700">
      All your health data is stored <strong>locally</strong> on your device. BP Buddy does not collect, transmit, or store your personal health information on external servers. Your privacy and data security are our top priorities.
    </p>
  </div>
</div>

    </div>
    
  );
};

export default Settings;

