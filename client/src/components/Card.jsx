import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const token = localStorage.getItem("Token");
        const response = await axios.get("http://localhost:5000/api/mongo/getPlaces", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPlaces(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching places:", err);
        setError("Failed to load places. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (id) => {
    setShowDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-xl text-gray-600">No places found.</div>
      </div>
    );
  }

  // Get unique categories
  const categories = ['all', ...new Set(places.map(place => place.category || 'Uncategorized'))];

  // Filter places based on selected category
  const filteredPlaces = selectedCategory === 'all' 
    ? places 
    : places.filter(place => (place.category || 'Uncategorized') === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      {/* Category filters */}
      <div className="flex flex-wrap gap-4 justify-center pb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${selectedCategory === category
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-blue-50'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Places listing */}
      <div className="space-y-8">
        {filteredPlaces.map((place) => (
          <div
            key={place._id}
            className="bg-white shadow-lg border border-gray-200 w-full flex flex-col md:flex-row rounded-lg"
          >
            {/* Image */}
            <div className="w-full md:w-[400px] flex-shrink-0">
              <img
                src={place.imageUrl}
                alt={place.name}
                className="w-full h-[250px] md:h-[300px] object-cover rounded-lg m-2"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-start">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {place.name}
                </h2>

                <p className="text-gray-600 text-base md:text-lg mb-4">
                  {place.description}
                </p>

                <div className="flex items-center -ml-4">
                  <img
                    src="/location.jpeg"
                    alt=""
                    className="w-8 h-8 rounded-full mb-2 lg:h-12 lg:w-12 ml-2"
                  />
                  <p className="text-gray-600 text-base md:text-lg mb-2">
                    Location: {place.landmark}, {place.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => toggleDetails(place._id)}
                  className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium transition-colors lg:mt-15"
                >
                  {showDetails[place._id] ? "Hide Details" : "View Details"}
                </button>

                {showDetails[place._id] && (
                  <div className="p-4 md:p-6 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                      <p className="text-gray-700 flex items-center text-base md:text-lg col-span-full">
                        <span className="font-medium">Category:</span>
                        <span className="ml-2">{place.category || 'Uncategorized'}</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
