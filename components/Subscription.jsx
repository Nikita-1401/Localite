import React from 'react';

const Subscription = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-4 bg-[url('/nature/ocean.jpg')] bg-cover bg-center inset-0">
        <div className="logo flex items-center gap-2 mb-4 md:mb-8">
          <img src="/logo.jpeg" alt="logo" className="w-12 h-12 md:w-20 md:h-20 rounded-full" />
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800">Localite</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col items-start justify-center mx-auto mt-4 md:mt-10 px-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left'>One Subscription. Endless Discoveries. Stronger Local Tourism.</h1>
            <p className='text-lg md:text-xl font-semibold mt-2 text-center md:text-left'>Discover Hidden Gems. Empower Local Communities.</p>
            <p className='text-lg md:text-xl font-semibold text-center md:text-left'>Find More Than Places — Uplift the People Behind Them.</p>
          </div>
          <div className='w-full md:w-1/2 h-auto bg-white flex flex-col items-center mt-4 md:mt-35 mx-auto rounded-lg p-4 md:p-6'>
            <p className='text-xl md:text-2xl font-semibold mt-2'>Monthly</p>
            <h1 className='text-3xl md:text-5xl font-bold'>$10/month</h1>
            <div className='flex flex-col w-full mt-4'>
              <div className='flex items-center gap-2 mb-2'>
                <img src="./check.jpg" alt="" className='w-8 h-8 md:w-10 md:h-10' />
                <p className='text-sm md:text-base w-[90%]'>This website can make your tour easy</p>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="./check.jpg" alt="" className='w-8 h-8 md:w-10 md:h-10' />
                <p className='text-sm md:text-base w-[90%]'>This will increase your profile views</p>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="./check.jpg" alt="" className='w-8 h-8 md:w-10 md:h-10' />
                <p className='text-sm md:text-base w-[90%]'>This will increase your profile views</p>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <img src="./check.jpg" alt="" className='w-8 h-8 md:w-10 md:h-10' />
                <p className='text-sm md:text-base w-[90%]'>This will increase your profile view</p>
              </div>
            </div>
            <button className='bg-black text-white px-6 py-3 rounded-md w-full md:w-1/2 mx-auto mt-4 cursor-pointer text-sm md:text-base hover:bg-gray-800 transition-colors'>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;