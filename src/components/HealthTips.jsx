import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

   const htips = await supabase.from('healthtips').select();
const tips = htips.data;


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
       onClick={() => navigate('/dashboard')}
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
            className="text-sm text-black-800 "
          >
            🔄
          </button>
        </div>
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
           {tip.tip_title}
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
            {tip.tip_type}
          </span>
        </h3>
        <p className="text-sm text-gray-600 mt-2">{tip.tip_description}</p>
      </div>

    
      <h3 className="mt-6 font-semibold text-gray-800">All Health Tips</h3>
      <div className="space-y-3 mt-3">
        {tips.map((t, i) => (
          <div key={i} className="border rounded-lg p-3 bg-white shadow-sm">
            <h4 className="font-medium flex items-center gap-2">
               {t.tip_title}
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                {t.tip_type}
              </span>
            </h4>
            <p className="text-sm text-gray-600 mt-1">{t.tip_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthTips;
