import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Optional: use react-icons instead
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ onClose, onSwitchToSignUp }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    
    const copyLoginData = {...LoginData};
    copyLoginData[name] = value;
    setLoginData(copyLoginData);
  }

  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log(LoginData);
    const {email,password} = LoginData;
    if(!email || !password){
      toast.error('please enter email and password', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return;
    }
    try {
      const url = "http://localhost:5000/api/auth/login";
      // const response = await axios.post(url, {email,password});
      const response = await fetch(url,{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(LoginData)
      });
      const data = await response.json();
      console.log(data);
      const {success, message, token, user } = data;
      // toast.success('Login successful', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Bounce,
      //   });
      if(success){
        localStorage.setItem("Token", token);
        localStorage.setItem("LoggedInUser", user.name);

 
  
        toast.success(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,

          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
 

        
        if(data.redirectUrl){
          setTimeout(() => {
            navigate(data.redirectUrl);
            onClose(); // Close the login modal after successful redirect
          }, 3000);
        }
      } else {
        toast.error(message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,

          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,

        });

      }
      console.log(data);
      
    } catch (err) {
      toast.error("Error logging in", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }

  // toast.success('Login successful', {
  //   position: "top-center",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: false,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  //   transition: Bounce,
  //   });

  return (
    <>
    <ToastContainer />
 
      {/* Backdrop */}
 
      <div className="fixed inset-0 z-40 backdrop-blur-[2px] bg-white/10"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <img src="./cross.jpeg" alt="Close" className="w-4 h-4" />
          </button>

          {/* Logo & Title */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <img src="./logo.png" alt="Logo" className="w-12 h-12" />
            <h2 className="text-2xl font-semibold text-gray-800">Sign in to your account</h2>
          </div>

          <form onSubmit={handleLogIn}>
            {/* Email Input */}
            <div className="mb-4">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                onChange={handleChange}
                value={LoginData.email}
              />
            </div>

          {/* Password Input with Eye Toggle */}
          <div className="mb-2 relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 pr-10"
              onChange={handleChange}
              value={LoginData.password}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          </form>

          {/* Forgot Password */}
          <div className="flex justify-end mb-4">
            <a href="#" className="text-sm text-indigo-500 hover:underline">Forgot password?</a>
          </div>

          {/* Sign In Button */}
          <div className="mb-6">
            <button 
            type="submit"
            onClick={handleLogIn}
            className="w-full py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-200 cursor-pointer">
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
              className="text-indigo-600 hover:underline font-medium cursor-pointer"
            >
              Create a new account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
