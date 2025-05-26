import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
     
        <nav className='relative bg-emerald-200  '>
            {/* Main navbar content - always visible */}
            <div className="flex items-center p-4 gap-4">
                <div className="logo flex gap-2 items-center flex-1">
                    <img src="/logo.jpeg" alt="logo" className='w-10 h-10 rounded-full' />
                    <div className='flex gap-2 flex-1'>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className='border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 rounded-md p-2 w-full lg:w-[500px]' 
                        />
                        <button className='bg-emerald-700 text-white rounded-md p-2 whitespace-nowrap'>Search</button>
                    </div>
                </div>

                {/* Hamburger menu for mobile */}
                <button 
                    className='md:hidden p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className='w-6 h-0.5 bg-black mb-1'></div>
                    <div className='w-6 h-0.5 bg-black mb-1'></div>
                    <div className='w-6 h-0.5 bg-black'></div>
                </button>

                {/* Desktop buttons */}
                <div className='hidden md:flex gap-4'>
                    <button className='bg-white text-black rounded-full p-2 px-6'>Login</button>
                    <button className='bg-white text-black rounded-full p-2 px-6'>Signup</button>
                </div>
            </div>

            {/* Mobile menu - only login/signup */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col gap-2 p-4 border-t border-emerald-300`}>
                <button className='bg-white text-black rounded-full p-2 w-full'>Login</button>
                <button className='bg-white text-black rounded-full p-2 w-full'>Signup</button>
            </div>
        </nav>
    
    </>
  )
}

export default Navbar
