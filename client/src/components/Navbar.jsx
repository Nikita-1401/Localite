import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onSignupClick, onLoginClick, isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll to top on route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    // First scroll to top
    window.scrollTo(0, 0);
    
    // Then clear localStorage
    localStorage.removeItem("Token");
    localStorage.removeItem("LoggedInUser");
    
    // Navigate and reload immediately
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className='relative bg-emerald-200'>
      <div className="flex items-center p-4 gap-4">
        <div className="logo flex gap-2 items-center flex-1">
          <Link to={isAuthenticated ? "/home" : "/"}>
            <img src="/logo.jpeg" alt="logo" className='w-10 h-10 rounded-full' />
          </Link>
          <div className='flex gap-2 flex-1'>
            <input 
              type="text" 
              placeholder="Search" 
              className='border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 rounded-md p-2 w-full lg:w-[500px]' 
            />
            <button className='cursor-pointer bg-emerald-700 text-white rounded-md p-2 whitespace-nowrap'>search</button>
          </div>
        </div>

        <button 
          className='md:hidden p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className='w-6 h-0.5 bg-black mb-1'></div>
          <div className='w-6 h-0.5 bg-black mb-1'></div>
          <div className='w-6 h-0.5 bg-black'></div>
        </button>

        <div className='hidden md:flex gap-4'>
          {isAuthenticated ? (
            <>
              <Link to="/home" className='cursor-pointer bg-white text-black rounded-full p-2 px-6'>Home</Link>
              <Link to="/dashboard" className='cursor-pointer bg-white text-black rounded-full p-2 px-6'>Dashboard</Link>
              <Link to="/listings" className='cursor-pointer bg-white text-black rounded-full p-2 px-6'>Listings</Link>
              <button onClick={handleLogout} className='cursor-pointer bg-red-500 text-white rounded-full p-2 px-6'>Logout</button>
            </>
          ) : (
            <>
              <button onClick={onLoginClick} className='cursor-pointer bg-white text-black rounded-full p-2 px-6'>Login</button>
              <button onClick={onSignupClick} className='cursor-pointer bg-white text-black rounded-full p-2 px-6'>Signup</button>
            </>
          )}
        </div>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-2 p-4 border-t border-emerald-300`}>
        {isAuthenticated ? (
          <>
            <Link to="/home" className='cursor-pointer bg-white text-black rounded-full p-2 w-full text-center'>Home</Link>
            <Link to="/dashboard" className='cursor-pointer bg-white text-black rounded-full p-2 w-full text-center'>Dashboard</Link>
            <Link to="/listings" className='cursor-pointer bg-white text-black rounded-full p-2 w-full text-center'>Listings</Link>
            <button onClick={handleLogout} className='cursor-pointer bg-red-500 text-white rounded-full p-2 w-full'>Logout</button>
          </>
        ) : (
          <>
            <button onClick={onLoginClick} className='cursor-pointer bg-white text-black rounded-full p-2 w-full'>Login</button>
            <button onClick={onSignupClick} className='cursor-pointer bg-white text-black rounded-full p-2 w-full'>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
