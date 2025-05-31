import React from 'react';

const Subscription = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 bg-[url('/nature/ocean.jpg')] bg-cover bg-center inset-0">
  {/* Logo */}
  <div className="logo flex items-center gap-2 mb-8">
    <img src="/logo.jpeg" alt="logo" className="w-20 h-20 rounded-full" />
    <h1 className="text-5xl font-bold text-gray-800">Localite</h1>
  </div>

  {/* Two-column layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
    
    {/* Image Section */}
    <div className="w-full h-64 md:h-full">
      <img
        src="/subscription.jpg" // Replace with your image path
        alt="Subscription"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Subscription Card */}
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the Localite Club</h2>
      <p className="text-gray-600 mb-6">
        Get exclusive updates, travel tips, and hidden gems from local experts. Be the first to know about special events and experiences near you.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Subscription;