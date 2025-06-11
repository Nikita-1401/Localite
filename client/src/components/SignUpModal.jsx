import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // You can use any icon library or image
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpModal = ({ onClose, onSwitchToSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [Loading,setIsLoading] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    // setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    console.log(name, value);
    const copySignUpData = { ...signUpData };
    copySignUpData[name] = value;
    setSignUpData(copySignUpData);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(signUpData);
    const { name, email, password, confirmPassword } = signUpData;
    const nameTrim = name.trim();
    const emailTrim = email.trim();

    if (password !== confirmPassword) {
 
      toast.error("Passwords do not match", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
 
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    if (password === "" || emailTrim === "" || nameTrim === "" || confirmPassword === "") {
 
      toast.error("Please fill all the fields", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
 
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name: nameTrim, email: emailTrim, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      const { success, message } = data;
      if (success) {
        toast.success(message, {
          position: "top-center",
 
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
 
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        toast.error(message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
 
          closeOnClick: true,
 
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
 
      toast.error("Error signing up", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
 
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 z-40 backdrop-blur-[2px] bg-white/10"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-md shadow-lg p-6 relative">
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

          <form className="flex flex-col gap-4 " onSubmit={handleSignUp}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="p-2 border-2 border-gray-300 rounded-md"
              onChange={handleChange}
              value={signUpData.name}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="p-2 border-2 border-gray-300 rounded-md"
              onChange={handleChange}
              value={signUpData.email}
            />

            {/* Password field with eye icon */}
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-2 border-2 border-gray-300 rounded-md w-full pr-10"
                onChange={handleChange}
                value={signUpData.password}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="p-2 border-2 border-gray-300 rounded-md w-full pr-10"
                onChange={handleChange}
                value={signUpData.confirmPassword}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button
              type="submit"
              className="cursor-pointer p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToSignIn}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUpModal;
