import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useUserStore from '../store/userStore';

export const userFormSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  age: Yup.number()
    .required('Age is required')
    .min(1, 'Age must be at least 1')
    .max(120, 'Age must be realistic'),
  password: Yup.string().required('Password is required'),
});

const LandingPage = () => {
  const navigate = useNavigate();
  const firstName = useUserStore((state) => state.firstName);
  const setFirstNameInStore = useUserStore((state) => state.setFirstName);
  const setLastNameInStore = useUserStore((state) => state.setLastName);
  const setAgeInStore = useUserStore((state) => state.setAge);

  const [mode, setMode] = useState('signin');


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      password: '',
    },
    validationSchema: userFormSchema,
    onSubmit: (values) => {
      const { firstName, lastName, age, password } = values;
      const userKey = `${firstName.toLowerCase()}_${lastName.toLowerCase()}`;
      const userData = { firstName, lastName, age, password };

      if (mode === 'signup') {
        localStorage.setItem(userKey, JSON.stringify(userData));
        setFirstNameInStore(firstName);
        setLastNameInStore(lastName);
        setAgeInStore(age)
        alert('Signup successful! You can now sign in.');
        setMode('signin');
      } else {
        const storedUser = localStorage.getItem(userKey);
        if (!storedUser) {
          alert('User not found. Please sign up first.');
          return;
        }

        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.password !== password) {
          alert('Incorrect password.');
          return;
        }

    
        setFirstNameInStore(parsedUser.firstName);
        setLastNameInStore(parsedUser.lastName);

        navigate('/dashboard');
      }
    },
  });

  const features = [
    {
      title: 'Easy Tracking',
      description:
        'Log your blood pressure readings with smart validation and instant feedback.',
      icon: '💙',
    },
    {
      title: 'Visual Trends',
      description: 'Interactive charts help you understand your health patterns over time.',
      icon: '📊',
    },
    {
      title: 'Health Insights',
      description: 'Get personalized tips and insights to improve your cardiovascular health.',
      icon: '🔍',
    },
    {
      title: 'Privacy First',
      description: 'Your health data is encrypted and secure. You maintain full control.',
      icon: '🛡️',
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
          {/* First Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block mb-1 text-sm font-medium">Age</label>
            <input
              type="number"
              name="age"
              placeholder="30"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {formik.touched.age && formik.errors.age && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.age}</div>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
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
