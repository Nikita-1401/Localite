import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getUsers")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      {users.map((user) => (
        <div
          key={user._id}
          className="bg-white shadow-lg border border-gray-200 w-full flex flex-col md:flex-row rounded-lg"
        >
          {/* Image */}
          <div className="w-full md:w-[400px] flex-shrink-0">
            <img
              src={user.imageUrl}
              alt={user.name}
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg m-2"
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-start">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {user.name}
              </h2>

              <p className="text-gray-600 text-base md:text-lg mb-4">
                {user.description}
              </p>

              <div className="flex items-center -ml-4">
                <img
                  src="./location.jpeg"
                  alt=""
                  className="w-8 h-8 rounded-full mb-2 lg:h-12 lg:w-12 ml-2"
                />
                <p className="text-gray-600 text-base md:text-lg mb-2">
                  Location: {user.landmark}, {user.location}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => toggleDetails(user._id)}
                className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors lg:mt-15"
              >
                {showDetails[user._id] ? "Hide Details" : "View Details"}
              </button>

              {showDetails[user._id] && (
                <div className="p-4 md:p-6 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                    <p className="text-gray-700 flex items-center text-base md:text-lg col-span-full">
                      <span className="font-medium">Category:</span>
                      <span className="ml-2">{user.category}</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;