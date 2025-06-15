import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract search query from URL
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) {
        navigate("/listings");
        return;
      }

      try {
        setLoading(true);
        const token = localStorage.getItem("Token");
        
        // First try with token if available
        if (token) {
          try {
            const response = await axios.get(`http://localhost:5000/api/mongo/searchPlaces?q=${encodeURIComponent(searchQuery)}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            });
            
            setPlaces(response.data);
            setError(null);
            setLoading(false);
            return;
          } catch (tokenError) {
            // If token authentication fails, try without token
            console.log("Token authentication failed, trying without token");
          }
        }
        
        // Try without token as fallback
        const response = await axios.get(`http://localhost:5000/api/mongo/searchPlaces?q=${encodeURIComponent(searchQuery)}`);
        setPlaces(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching search results:", err);
        
        // More detailed error handling
        if (err.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          if (err.response.status === 401 || err.response.status === 403) {
            setError("Authentication error. Please log in again.");
          } else {
            setError(`Error: ${err.response.data.message || "Failed to load search results. Please try again later."}`);
          }
        } else if (err.request) {
          // The request was made but no response was received
          setError("No response from server. Please check your connection and try again.");
        } else {
          // Something happened in setting up the request that triggered an Error
          setError("Failed to load search results. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery, navigate]);

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
      <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center justify-center space-y-4">
        <div className="text-xl text-gray-600">No places found matching '{searchQuery}'.</div>
        <button 
          onClick={() => navigate("/listings")} 
          className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
        >
          View All Listings
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Search Results for '{searchQuery}'</h1>
        <p className="text-gray-600">{places.length} place(s) found</p>
      </div>

      {/* Places listing */}
      <div className="space-y-8">
        {places.map((place) => (
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

export default SearchResults;