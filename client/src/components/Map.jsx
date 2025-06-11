// src/components/Map.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 28.6139,
  lng: 77.2090,
};

const Map = ({ locations = [] }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [currentLocation, setCurrentLocation] = useState(defaultCenter);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          console.error('Error getting current location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentLocation}
          zoom={10}
        >
          <Marker position={currentLocation} />
          {locations.map((location, index) => (
            <Marker key={index} position={location} />
          ))}
        </GoogleMap>
      </LoadScript>

      <style jsx>{`
        .map-container {
          width: 100%;
          height: 600px;
        }

        @media (max-width: 1024px) {
          .map-container {
            height: 500px;
          }
        }

        @media (max-width: 768px) {
          .map-container {
            height: 400px;
          }
        }

        @media (max-width: 480px) {
          .map-container {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default Map;
