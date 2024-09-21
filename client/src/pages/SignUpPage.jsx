import React, { useState } from 'react';
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai';
import { MdApps } from 'react-icons/md';

const SignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/background.svg')` }}
    >
      {/* Header with Search bar, Logo, and Icons */}
      <div className="flex justify-between items-center py-8 px-6 md:px-14">
        {/* Search Bar */}
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent text-black w-32 md:w-40 focus:w-40 md:focus:w-64 transition-all duration-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Logo */}
        <img
          src="/logo.png"
          className="h-12 md:h-16 w-auto cursor-pointer hover:scale-110 transition-transform duration-300"
          alt="Logo"
        />

        {/* Icons */}
        <div className="flex space-x-4 md:space-x-6">
          <AiFillSetting className="w-6 h-6 text-white hover:text-gray-300 hover:rotate-45 transition-all duration-300" />
          <MdApps className="w-6 h-6 text-white hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
          <AiOutlineUser className="w-6 h-6 text-white hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Images Section - Hidden on small screens */}
      <div className="hidden lg:flex absolute left-40 top-60 space-x-4">
        <div className="relative">
          <div className="absolute z-10">
            <img
              src="/path-to-image1.jpg"
              alt="Decorative image 1"
              className="rounded-lg bg-red-500 shadow-md w-64 h-64 object-cover hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          </div>
          <div className="absolute z-20" style={{ left: '200px', top: '25px' }}>
            <img
              src="/path-to-image2.jpg"
              alt="Decorative image 2"
              className="rounded-lg bg-green-500 shadow-md w-64 h-64 object-cover hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          </div>
          <div className="absolute z-30" style={{ top: '200px', left: '50px' }}>
            <img
              src="/path-to-image3.jpg"
              alt="Decorative image 3"
              className="rounded-lg bg-yellow-500 shadow-md w-80 h-56 object-cover hover:scale-105 hover:shadow-xl transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Sign Up Card */}
      <div className="absolute right-10 md:right-60 top-40 md:top-60 bg-white bg-opacity-90 p-6 md:p-8 rounded-xl shadow-lg max-w-sm w-full hover:shadow-xl transition-shadow duration-300">
        <div className="flex mb-6">
          <button
            className={`text-lg md:text-xl font-bold transition ${
              isSignUp ? 'text-black underline' : 'text-gray-400'
            } hover:text-blue-600`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
          <button
            className={`text-lg md:text-xl font-bold transition ml-4 ${
              !isSignUp ? 'text-black underline' : 'text-gray-400'
            } hover:text-blue-600`}
            onClick={() => setIsSignUp(false)}
          >
            Log In
          </button>
        </div>
        {isSignUp ? (
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 mb-4 border-b border-gray-300 focus:outline-none focus:border-gray-500 hover:border-gray-700 transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border-b border-gray-300 focus:outline-none focus:border-gray-500 hover:border-gray-700 transition-colors duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border-b border-gray-300 focus:outline-none focus:border-gray-500 hover:border-gray-700 transition-colors duration-300"
            />
            <button className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
              Sign Up
            </button>
            <p className="mt-4 text-center text-gray-500">
              Already a member?{' '}
              <span
                onClick={toggleForm}
                className="text-blue-600 hover:underline cursor-pointer transition-colors duration-300"
              >
                Log in
              </span>
            </p>
          </div>
        ) : (
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 mb-4 border-b border-gray-300 focus:outline-none focus:border-gray-500 hover:border-gray-700 transition-colors duration-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mb-4 border-b border-gray-300 focus:outline-none focus:border-gray-500 hover:border-gray-700 transition-colors duration-300"
            />
            <button className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300">
              Log In
            </button>
            <p className="mt-4 text-center text-gray-500">
              Not a member yet?{' '}
              <span
                onClick={toggleForm}
                className="text-blue-600 hover:underline cursor-pointer transition-colors duration-300"
              >
                Sign Up
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUpPage;
