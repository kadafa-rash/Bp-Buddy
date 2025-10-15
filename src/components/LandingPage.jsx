import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate(); 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [mode, setMode] = useState('signin');


  const handleSubmit = (e) => {
    e.preventDefault();
     if (!firstName || !lastName || !age) {
    alert('Please fill in all fields ');
    return;
  }
    navigate('/dashboard'); 
  };


  const features = [
    {
      title: "Easy Tracking",
      description: "Log your blood pressure readings with smart validation and instant feedback.",
      icon: "💙",
    },
    {
      title: "Visual Trends",
      description: "Interactive charts help you understand your health patterns over time.",
      icon: "📊",
    },
    {
      title: "Health Insights",
      description: "Get personalized tips and insights to improve your cardiovascular health.",
      icon: "🔍",
    },
    {
      title: "Privacy First",
      description: "Your health data is encrypted and secure. You maintain full control.",
      icon: "🛡️",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
    
      <header className="text-center py-12">
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="text-blue-600 text-3xl">📈</div>
          <h1 className="text-4xl font-bold text-blue-700">BP Buddy</h1>
        </div>
        <p className="text-lg max-w-xl mx-auto">
          Your comprehensive blood pressure companion. Track, monitor, and maintain better cardiovascular health.
        </p>
      </header>

    
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose BP Buddy?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4"
            >
              <div className="text-3xl">{feat.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{feat.title}</h3>
                <p className="text-gray-600">{feat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <section className="bg-white max-w-md mx-auto my-12 p-8 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 font-semibold ${mode === 'signin' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setMode('signin')}
          >
            Sign In
          </button>
          <button
            className={`px-4 py-2 font-semibold ${mode === 'signup' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

  <div>
    <label className="block mb-1 text-sm font-medium">First Name</label>
    <input
      type="text"
      placeholder="John"
      onChange={(e) => setFirstName(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div>
    <label className="block mb-1 text-sm font-medium">Last Name</label>
    <input
      type="text"
      placeholder="Doe"
      onChange={(e) => setLastName(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

  <div>
    <label className="block mb-1 text-sm font-medium">Age</label>
    <input
      type="number"
      placeholder="30"
      onChange={(e) => setAge(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>

<div>
      <label className="block mb-1 text-sm font-medium">Password</label>
      <input
      type="password"
      placeholder="Enter your password"
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
     />
 </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            {mode === 'signin' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingPage;
