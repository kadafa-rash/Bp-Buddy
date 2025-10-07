import React, { useState, useEffect } from 'react';

const LogReading = () => {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [pulse, setPulse] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('');


  useEffect(() => {
    const now = new Date();
    setDate(now.toISOString().split('T')[0]);
    setTime(now.toTimeString().slice(0, 5));
  }, []);

  
  useEffect(() => {
    if (!systolic || !diastolic) {
      setStatus('');
      return;
    }

    const sys = parseInt(systolic);
    const dia = parseInt(diastolic);

    if (sys < 90 || dia < 60) setStatus('Low');
    else if (sys < 120 && dia < 80) setStatus('Normal');
    else if (sys < 130 && dia < 80) setStatus('Elevated');
    else if ((sys < 140) || (dia < 90)) setStatus('High BP - Stage 1');
    else if (sys >= 140 || dia >= 90) setStatus('High BP - Stage 2');
    else if (sys > 180 || dia > 120) setStatus('Hypertensive Crisis');
    else setStatus('Uncategorized');
  }, [systolic, diastolic]);

  
  const handleSubmit = () => {
    if (!systolic || !diastolic || !pulse || !date || !time) {
      alert('Please fill in all required fields.');
      return;
    }

    const newReading = { systolic, diastolic, pulse, date, time, notes, status };
    const existing = JSON.parse(localStorage.getItem('readings')) || [];

    localStorage.setItem('readings', JSON.stringify([...existing, newReading]));
    alert('Reading logged successfully!');
    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 space-y-6">

    
        <h2 className="text-xl font-semibold text-gray-800">Log New Reading</h2>

        
        <section className="bg-gray-50 p-4 rounded-xl border space-y-4">
          <h3 className="text-sm font-medium text-blue-600">Blood Pressure Reading</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-600">Systolic</label>
              <input
                type="number"
                value={systolic}
                onChange={(e) => setSystolic(e.target.value)}
                placeholder="e.g. 120"
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Diastolic</label>
              <input
                type="number"
                value={diastolic}
                onChange={(e) => setDiastolic(e.target.value)}
                placeholder="e.g. 80"
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-600">Pulse Rate</label>
            <input
              type="number"
              value={pulse}
              onChange={(e) => setPulse(e.target.value)}
              placeholder="e.g. 72"
              className="w-full mt-1 p-2 border rounded-md text-sm"
            />
          </div>

          {status && (
            <div className="text-sm font-medium mt-2 text-blue-600">
              Status: {status}
            </div>
          )}
        </section>

      
        <section className="bg-gray-50 p-4 rounded-xl border space-y-2">
          <h3 className="text-sm font-medium text-blue-600"> Date & Time</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-600">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-600">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
          </div>
        </section>

      
        <section className="bg-gray-50 p-4 rounded-xl border">
          <h3 className="text-sm font-medium text-blue-600 mb-2"> Notes (Optional)</h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Felt dizzy this morning..."
            className="w-full mt-1 p-2 border rounded-md text-sm"
            rows="3"
          />
        </section>

        
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition"
        >
          Log Reading
        </button>
      </div>
    </div>
  );
};

export default LogReading;
