import React from 'react'


const dashboard = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center bg-emerald-50 relative'>
      
      <img src="/favicon.png" alt="" className='w-20 h-20 lg:w-30 lg:h-30 absolute top-10 left-10' /> 
      <div className='w-20 h-20 absolute top-15 lg:top-30 left-40 lg:left-39  '><h1 className='text-5xl lg:text-4xl font-bold   top-10 right-10' >Localite</h1></div>
      
      <div className='flex flex-col gap-6 w-full lg:w-1/2 bg-white px-14 py-10 border border-emerald-400 rounded-lg shadow-md '> 
      <input className='border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg' border-2 btype="text" name="name" placeholder='Enter your name' />
      <input className='border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg' type="text" name="description" placeholder='Enter your description' />
      <input className='border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg' type="text" name="location" placeholder='Enter your location' />
      <select className='border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg' name="category" id="category">
        <option value="1">Visiting spot</option>
        <option value="2">Lodging</option>
        <option value="3">restaurant</option>
      </select>
      <form action="http://localhost:5000/api/upload" method="post" encType="multipart/form-data">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <input className="w-full border-2 border-emerald-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-emerald-50 text-gray-700 lg:h-15 p-4 text-lg" type="file" name="file" />
          <button className="bg-blue-500 text-white p-4 rounded-lg lg:h-15 text-lg w-full lg:w-auto" type="submit">Upload</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default dashboard
