import React from 'react';

const SignIn = ({ onClose, onSwitchToSignUp }) => {
  return (
    <>
    <div className="fixed inset-0 z-40 backdrop-blur-[2px] bg-white/10"></div>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
        >
          <img src="./cross.jpeg" alt="" className="w-4 h-4" />
        </button>

        {/* Logo & Title */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <img src="./logo.png" alt="Logo" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold text-gray-800">Sign in to your account</h2>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end mb-4">
          <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot password?</a>
        </div>

        {/* Sign In Button */}
        <div className="mb-6">
          <button className="w-full py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200">
            Sign In
          </button>
        </div>

        {/* Separator */}
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">or</span>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
        <button
          onClick={onSwitchToSignUp}
          className="text-indigo-600 hover:underline font-medium"
        >
          Create a new account
        </button>
      </div>
      </div>
    </div>
    </>
  );
};

export default SignIn;
