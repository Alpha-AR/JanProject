import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Submitting form with:', email, password);
  };

  return (
    <div className="mx-auto mt-10 rounded-md shadow-md p-4">
      <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
