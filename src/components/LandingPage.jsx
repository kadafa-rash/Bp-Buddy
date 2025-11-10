import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { supabase } from '../supabaseClient'; 

export const userFormSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be realistic'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LandingPage = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState('signin');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: userFormSchema,
    onSubmit: async (values) => {
      const { firstName, lastName, age, email, password } = values;

      try {
        if (mode === 'signup') {
          
          const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: { firstName, lastName, age }, 
            },
          });

          if (error) throw error;

          alert(' Signup successful! Please check your email to confirm and then sign in.');
          setMode('signin');

        } else {
          
          const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
          });

          if (error) throw error;

          alert('✅ Signed in successfully!');
          navigate('/dashboard');
        }
      } catch (err) {
        alert(`❌ ${err.message}`);
        console.error('Auth error:', err.message);
      }
    },
  });

  const features = [
    { title: 'Easy Tracking', description: 'Log your blood pressure readings easily.', icon: '💙' },
    { title: 'Visual Trends', description: 'Charts help you understand your health patterns.', icon: '📊' },
    { title: 'Health Insights', description: 'Get personalized tips to improve your health.', icon: '🔍' },
    { title: 'Privacy First', description: 'Your data is secure and encrypted.', icon: '🛡️' },
  ];

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <header className="text-center py-12">
        <div className="flex justify-center items-center gap-2 mb-2">
          <div className="text-blue-600 text-3xl">📈</div>
          <h1 className="text-4xl font-bold text-blue-700">BP Buddy</h1>
        </div>
        <p className="text-lg max-w-xl mx-auto">
          Track, monitor, and maintain your cardiovascular health.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose BP Buddy?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
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

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.age && formik.errors.age && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.age}</div>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full mt-1 p-2 border rounded-md text-sm"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-xs">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            )}
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
