import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-purple-900 text-white py-10 px-6'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        {/* Get in Touch Section */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Get In Touch</h2>
          <p className='mb-3 flex items-center gap-3'>
            <img src="/location.jpeg" alt="location" className='rounded-full h-7 w-7' />
            Ranchi, Jharkhand, India
          </p>
          <p className='mb-3 flex items-center gap-3'>
            <img src="/phone.jpeg" alt="phone" className='rounded-full h-7 w-7' />
            +91 620325****
          </p>
          <p className='mb-4 flex items-center gap-3'>
            <img src="/gmail.jpeg" alt="email" className='rounded-full h-7 w-7' />
            info@gmail.com
          </p>
          <div className='flex gap-4 mt-4 flex-wrap'>
            <a href="#"><img src="/twitter.jpg" alt="Twitter" className='h-7 w-7 rounded-full' /></a>
            <a href="#"><img src="/instagram.jpeg" alt="Instagram" className='h-7 w-7 rounded-full' /></a>
            <a href="#"><img src="/facebook.webp" alt="Facebook" className='h-7 w-7 rounded-full' /></a>
            <a href="#"><img src="/linked.jpeg" alt="LinkedIn" className='h-7 w-7 rounded-full' /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>Home</a></li>
            <li><a href='#' className='hover:underline'>About</a></li>
            <li><a href='#' className='hover:underline'>Services</a></li>
            <li><a href='#' className='hover:underline'>Contact</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className='text-xl font-bold mb-4'>Subscribe to our Newsletter</h2>
          <p className='text-sm mb-4'>
            Get the latest updates and news from our website.
          </p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input
              type="email"
              placeholder='Enter your email'
              className='p-2 rounded-md border border-white text-black w-full sm:w-auto'
            />
            <button className='bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md w-full sm:w-auto'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-12 border-t border-white/20 pt-6 text-center text-sm'>
        &copy; 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
