import React from 'react'

const Payment = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 bg-[url('/nature/ocean.jpg')] bg-cover bg-center inset-0">
      {/* Logo */}
      <div className="logo flex items-center gap-2 mb-8">
        <img src="/logo.jpeg" alt="logo" className="w-16 h-16 md:w-20 md:h-20 rounded-full" />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Localite</h1>
      </div>
     
      <div className='relative mx-auto w-full max-w-[500px] h-auto min-h-[550px] bg-white rounded-2xl shadow-xl pt-4 px-4 md:px-8 pb-8'>
        <div className="flex gap-4 w-full">
          <button className="flex-1 py-3.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-base font-medium min-w-[120px] md:min-w-[140px] flex items-center justify-center">
            Chat
          </button>
          <button className="flex-1 py-3.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-base font-medium min-w-[120px] md:min-w-[140px] flex items-center justify-center">
            G pay
          </button>
        </div>

        <div className="mt-8 w-full max-w-[440px] h-auto min-h-[400px] mx-auto bg-gray-50 rounded-xl shadow-md p-4 md:p-5">
          <h1 className='text-xl font-bold text-gray-800 mb-4'>Bank Card</h1>
          
          {/* Payment Inputs */}
          <div className="space-y-4">
            <input 
              type="text"
              placeholder="Card Number"
              className="w-full h-12 md:h-15 bg-gray-200 rounded-lg shadow-sm px-4 hover:bg-gray-300 transition-colors cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input 
              type="text"
              placeholder="Cardholder"
              className="w-full h-12 md:h-15 bg-gray-200 rounded-lg shadow-sm px-4 hover:bg-gray-300 transition-colors cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <div className="flex gap-4 -mt-2">
              <input 
                type="text"
                placeholder="MM/YY"
                className="h-12 md:h-16 bg-gray-300 rounded-lg shadow-sm px-4 hover:bg-gray-300 transition-colors cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium w-1/2"
              />
              <input 
                type="text"
                placeholder="CVV"
                className="h-12 md:h-16 bg-gray-300 rounded-lg shadow-sm px-4 hover:bg-gray-300 transition-colors cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 font-medium w-1/2"
              />
            </div>
          </div>
          <h2 className='text-gray-800 text-sm font-bold pt-4 flex justify-center'>Hey boys can you transfer me money</h2>
          <p className='text-gray-800 text-sm flex justify-center'>you can click here to transfer money </p>
          <div className="flex justify-center mt-3">
            <button className="py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors text-base font-medium w-full max-w-[300px] flex items-center justify-center">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
