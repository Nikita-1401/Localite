import React, { useState } from "react";

const Card = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg border border-gray-200 w-full flex flex-col md:flex-row rounded-lg">
        {/* Image */}
        <div className="w-full md:w-[400px] flex-shrink-0 ">
          <img
            src="./picture.png"
            alt="Modern house"
            className="w-full h-[250px] md:h-[300px] object-cover rounded-lg m-2"
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-start">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
              Modern house in the heart of the city
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-4">
              A beautiful space perfect for a weekend getaway with modern furniture
              and natural light.
            </p>
            <div className="flex items-center -ml-4 "> 
            <img src="./location.jpeg" alt="" className="w-8 h-8 rounded-full mb-2 lg:h-12 lg:w-12 ml-2 "/>
            <p className="text-gray-600 text-base md:text-lg mb-2 ">
              Location: 123 Main St, Anytown, USA
            </p>
            </div>
            

          </div>

          <div className="space-y-4">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors lg:mt-15"
            >
              {showDetails ? "Hide Details" : "View Details"}
            </button>

            {showDetails && (
              <div className="p-4 md:p-6 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                  <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <span className="font-medium">Guests:</span>
                    <span className="ml-2">2</span>
                  </p>
                  <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <span className="font-medium">Bedroom:</span>
                    <span className="ml-2">1</span>
                  </p>
                  <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <span className="font-medium">Bath:</span>
                    <span className="ml-2">1</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
