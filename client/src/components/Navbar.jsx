import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ onSignupClick, onLoginClick, isAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = () => {
    window.scrollTo(0, 0);
    localStorage.removeItem("Token");
    localStorage.removeItem("LoggedInUser");
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 rounded-md p-2 w-full lg:w-[500px]' 
              onKeyPress={(e) => e.key === 'Enter' && searchQuery.trim() && navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}  
            />
            <button 
              onClick={() => searchQuery.trim() && navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)} 
              className='cursor-pointer bg-emerald-700 text-white rounded-md p-2 whitespace-nowrap'
            >
              Search
            </button>
          </div>
        </div>

        {/* Hamburger / Cross Icon */}
        <div className='md:hidden z-50'>
          {!isMenuOpen ? (
            <button onClick={() => setIsMenuOpen(true)} className='p-2'>
              <div className='w-6 h-0.5 bg-black mb-1'></div>
              <div className='w-6 h-0.5 bg-black mb-1'></div>
              <div className='w-6 h-0.5 bg-black'></div>
            </button>
          ) : (
            <button onClick={() => setIsMenuOpen(false)} className='text-3xl font-bold px-4'>×</button>
          )}
        </div>

        {/* Desktop Menu */}
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

      {/* Fullscreen Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col gap-4 p-8 pt-20 items-center justify-center h-full">
          {isAuthenticated ? (
            <>
              <Link to="/home" onClick={() => setIsMenuOpen(false)} className='cursor-pointer bg-emerald-100 text-black rounded-full p-3 w-3/4 text-center text-lg'>Home</Link>
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className='cursor-pointer bg-emerald-100 text-black rounded-full p-3 w-3/4 text-center text-lg'>Dashboard</Link>
              <Link to="/listings" onClick={() => setIsMenuOpen(false)} className='cursor-pointer bg-emerald-100 text-black rounded-full p-3 w-3/4 text-center text-lg'>Listings</Link>
              <button onClick={() => { setIsMenuOpen(false); handleLogout(); }} className='cursor-pointer bg-red-500 text-white rounded-full p-3 w-3/4 text-lg'>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => { setIsMenuOpen(false); onLoginClick(); }} className='cursor-pointer bg-emerald-100 text-black rounded-full p-3 w-3/4 text-lg'>Login</button>
              <button onClick={() => { setIsMenuOpen(false); onSignupClick(); }} className='cursor-pointer bg-emerald-100 text-black rounded-full p-3 w-3/4 text-lg'>Signup</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
