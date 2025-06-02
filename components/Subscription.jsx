import React from 'react';

const Subscription = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 bg-[url('/nature/ocean.jpg')] bg-cover bg-center inset-0">
        <div className='grid grid-cols-2 '>
          <div className=' flex flex-col items-start justify-center mx-auto mt-10'>
            <h1 className='text-5xl font-bold'>Subscribe to get more views</h1>
            <h1 className='text-4xl font-bold'>Subscription</h1>

            <p className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p className='text-xl font-semibold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          </div>
          <div className='w-1/2 h-[50vh] bg-white flex flex-col items-center mt-40 mx-auto rounded-lg'>
          <p className='text-2xl font-semibold mt-2'>Monthly</p>
           <h1 className='text-5xl font-bold'>$10/month</h1>
           <div className='flex flex-col '>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>This will increase your profile views</p>
           </div>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>This will increase your profile views</p>
           </div>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>This will increase your profile views</p>
           </div>
           <div className='flex items-center gap-2'>
           <img src="./check.jpg" alt="" className='w-10 h-10' /><p className='w-[90%]'>This will increase your profile view</p>
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