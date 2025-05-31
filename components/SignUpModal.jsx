import React from "react";

const SignUpModal = ({ onClose, onSwitchToSignIn }) => {
  return (
    <>
      <div className="fixed inset-0 z-40 backdrop-blur-[2px] bg-white/10"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className=" w-full max-w-md bg-white rounded-md shadow-lg p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
          >
            <img src="./cross.jpeg" alt="" className="w-4 h-4" />
          </button>

          <div className="flex flex-col items-center gap-2 mb-6">
            <img src="./logo.png" alt="Logo" className="w-12 h-12" />
            <p className="text-xl">Create a new account</p>
          </div>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border-2 border-gray-300 rounded-md"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 border-2 border-gray-300 rounded-md"
            />

            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToSignIn}
              className="text-blue-500 hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
