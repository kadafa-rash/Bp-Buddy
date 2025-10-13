import React, { useState } from "react";

const LoginModal = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ name, email }));
    onLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-80 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-center text-blue-600">Welcome Back 👋</h2>
        <p className="text-sm text-gray-500 text-center">Log in or sign up to continue</p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded-md text-sm"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded-md text-sm"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm"
        >
          Continue
        </button>

        <button
          onClick={onClose}
          className="w-full text-gray-500 text-sm underline mt-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
