import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-purple-900 text-white py-10 px-4 h-[50vh] '>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        <div>
          <h2 className='text-lg font-bold mb-4'>Get In Touch</h2>
          <p className='mb-3  flex gap-3'> <img src="/location.jpeg" alt="logo" className='rounded-full  h-7 w-7 flex' /> Ranchi, Jharkhand, India</p>
          <p className='mb-4 flex gap-3 '> <img src="/phone.jpeg" alt="logo" className=' rounded-full h-7 w-7' /> +91 6203738398</p>
          <p className='mb-4 flex gap-3'> <img src="/gmail.jpeg" alt="logo" className=' rounded-full h-7 w-7' /> info@gmail.com</p>
          <div className='flex items-center gap-5'>
            <a href="" className=''><img src="/twitter.jpg" alt="logo"className='h-7 w-7 rounded-full' /></a>
             <a href="" className=''><img src="/instagram.jpeg" alt="logo"className='h-7 w-7 rounded-full' /></a>
             <a href="" className=''><img src="/facebook.webp" alt="logo"className='h-7 w-7 rounded-full' /></a>
             <a href="" className=''><img src="/linked.jpeg" alt="logo"className='h-7 w-7 rounded-full' /></a>
          </div>
        </div>
        <div>
          <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
          <ul className='space-y-2'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
          </ul>
          
      </div>
      <div className=''>
        <h2 className='text-lg font-bold mb-4 '>Subscribe to our newsletter</h2>
        <p>
          Get the latest updates and news from our website.
          Subscribe to our newsletter to get the latest updates and news from our website.
          
                  </p>
                  <div className='flex gap-2 mt-4'> 
        <input type="email" placeholder='Enter your email' className='p-2 rounded-md border border-white ' />
        <button className='bg-purple-500 text-white p-2 rounded-md'>Subscribe</button>
        </div>
      </div>
      </div>
      <div className='mt-20 '>
        <p className='text-center'>
          &copy; 2025 Your Company. All rights reserved.
        </p> 
      </div>

    </footer>

  )
}

export default Footer
