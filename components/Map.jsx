// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 28.6139,  // Default location (New Delhi)
  lng: 77.2090
};

const Map = ({ locations = [] }) => {
  return (
    
    <LoadScript
      googleMapsApiKey="AIzaSyAUAkJwsQcZAWbFRHBP73SupKpmgcyt9e4"
    >
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
  );
};

export default Map;