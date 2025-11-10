import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; 

const History = () => {
  const [readings, setReadings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [statuses, setStatuses] = useState([]);

  
  const fetchReadings = async () => {
    setLoading(true);

    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.error('Error fetching user:', userError);
      setLoading(false);
      return;
    }

    if (!user) {
      console.warn('⚠️ No logged-in user found.');
      setReadings([]);
      setLoading(false);
      return;
    }

    
    let query = supabase
      .from('health_metrics')
      .select('id, created_at, bp_systolic, bp_diastolic, pulse_rate, weight_kg, position, status')
      .eq('patient_id', user.id) 
      .order('created_at', { ascending: false });

    if (selectedStatus !== 'All') {
      query = query.eq('status', selectedStatus);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching readings:', error);
    } else {
      setReadings(data);
    }

    setLoading(false);
  };

  
  const fetchStatuses = async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    if (userError || !user) return;

    const { data, error } = await supabase
      .from('health_metrics')
      .select('status')
      .eq('patient_id', user.id);

    if (error) {
      console.error('Error fetching statuses:', error);
    } else {
      const unique = [...new Set(data.map(item => item.status).filter(Boolean))];
      setStatuses(['All', ...unique]);
    }
  };

  
  useEffect(() => {
    fetchStatuses();
  }, []);

  
  useEffect(() => {
    fetchReadings();
  }, [selectedStatus]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-10">
      <div className="bg-white rounded-3xl shadow-lg w-full h-full p-6 sm:p-8 space-y-6">
        <header className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">History</h2>
        </header>

        <section className="bg-gray-50 p-4 sm:p-6 rounded-xl border shadow-sm space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Filter by Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl border">
          {loading ? (
            <div className="text-center text-gray-400">Loading...</div>
          ) : readings.length === 0 ? (
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🕒</div>
              <p className="text-sm font-medium">No readings found</p>
              <p className="text-xs">Start logging readings to see your history!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                  <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Systolic</th>
                    <th className="px-4 py-2">Diastolic</th>
                    <th className="px-4 py-2">Pulse</th>
                    <th className="px-4 py-2">Weight (kg)</th>
                    <th className="px-4 py-2">Position</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {readings.map((reading) => (
                    <tr key={reading.id} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2">
                        {new Date(reading.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">{reading.bp_systolic}</td>
                      <td className="px-4 py-2">{reading.bp_diastolic}</td>
                      <td className="px-4 py-2">{reading.pulse_rate}</td>
                      <td className="px-4 py-2">{reading.weight_kg || '-'}</td>
                      <td className="px-4 py-2">{reading.position || '-'}</td>
                      <td className="px-4 py-2">{reading.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default History;
