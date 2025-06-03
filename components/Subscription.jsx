import React from 'react';

const Subscription = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 bg-[url('/nature/ocean.jpg')] bg-cover bg-center inset-0">
          <div className="logo flex items-center gap-2 mb-8">
        <img src="/logo.jpeg" alt="logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Localite</h1>
      </div>
        <div className='grid grid-cols-2 '>
          <div className=' flex flex-col items-start justify-center mx-auto mt-10'>
            <h1 className='text-5xl font-bold'>Subscribe to get more views</h1>
            <h1 className='text-4xl font-bold'>Subscription</h1>

            <p className='text-xl font-semibold '>“Discover Hidden Gems. Empower Local Communities.”</p>
            <p className='text-xl font-semibold '>“Find More Than Places — Uplift the People Behind Them.”</p>
          </div>
          <div className='w-1/2 h-[50vh] bg-white flex flex-col items-center mt-35 mx-auto rounded-lg'>
          <p className='text-2xl font-semibold mt-2'>Monthly</p>
           <h1 className='text-5xl font-bold'>$10/month</h1>
           <div className='flex flex-col '>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>This website can make your tour easy</p>
           </div>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>This will give you better exploring</p>
           </div>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>It will help you to find the best place</p>
           </div>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>Grow your popularity in your locality</p>
           </div>
           </div>
           <button className='bg-black text-white px-4 py-2 rounded-md w-1/2 mx-auto mt-4 cursor-pointer'>Subscribe</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Subscription;