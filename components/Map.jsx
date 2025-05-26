// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 28.6139,
  lng: 77.2090,
};

const Map = ({ locations = [] }) => {
  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="AIzaSyAUAkJwsQcZAWbFRHBP73SupKpmgcyt9e4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
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
