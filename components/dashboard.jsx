import React from 'react'


const dashboard = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <form action="http://localhost:5000/api/upload" method="post" encType="multipart/form-data">
        <input className="border-2 border-gray-300 rounded-md p-2" type="file" name="file" />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Upload</button>
      </form>
    </div>
  )
}

export default dashboard
