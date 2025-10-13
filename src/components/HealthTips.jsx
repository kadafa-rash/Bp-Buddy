import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const tips = [
  {
    title: "Eat Potassium-Rich Foods",
    category: "Diet",
    description:
      "Include bananas, oranges, spinach, and sweet potatoes in your diet. Potassium helps balance the effects of sodium on blood pressure.",
  },
  {
    title: "Reduce Sodium Intake",
    category: "Diet",
    description:
      "Limit sodium to less than 2,300mg per day. Read food labels and choose low-sodium options.",
  },
  {
    title: "Exercise Regularly",
    category: "Exercise",
    description:
      "Aim for at least 30 minutes of moderate activity daily to strengthen your heart and manage blood pressure.",
  },
  {
    title: "Sleep Well",
    category: "Lifestyle",
    description:
      "Ensure you get 7–8 hours of quality sleep each night to maintain overall cardiovascular health.",
  },
];


const HealthTips = () => {
  const navigate = useNavigate(); 
  const [tip, setTip] = useState(tips[0]);

  const shuffleTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  };

  useEffect(() => {
    const interval = setInterval(shuffleTip, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="p-4 pb-16">
    
      <button
       onClick={() => navigate(-1)}
        className="flex items-center text-gray-800 hover:text-gray-800 mb-4"
      >
        ← Back
      </button>
    
      <h2 className="text-lg font-semibold mb-3">Health Tips</h2>

    
      <div className="border border-yellow-400 bg-yellow-50 p-4 rounded-xl shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-yellow-600 font-medium">💡 Tip of the Day</span>
          <button
            onClick={shuffleTip}
            className="text-sm text-black-800 hover:underline"
          >
            🔄 Shuffle Tip
          </button>
        </div>
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
           {tip.title}
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
            {tip.category}
          </span>
        </h3>
        <p className="text-sm text-gray-600 mt-2">{tip.description}</p>
      </div>

    
      <h3 className="mt-6 font-semibold text-gray-800">All Health Tips</h3>
      <div className="space-y-3 mt-3">
        {tips.map((t, i) => (
          <div key={i} className="border rounded-lg p-3 bg-white shadow-sm">
            <h4 className="font-medium flex items-center gap-2">
               {t.title}
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {t.category}
              </span>
            </h4>
            <p className="text-sm text-gray-600 mt-1">{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
