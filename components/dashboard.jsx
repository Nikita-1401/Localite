import React from 'react'


const dashboard = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <form action="http://localhost:5000/api/upload" method="post" encType="multipart/form-data">
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default dashboard
