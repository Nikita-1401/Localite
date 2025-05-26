import React from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import SearchSection from '../components/Search'
import Map from '../components/Map';
import Footer from '../components/Footer';
 

  function App() {
    // Example locations (you can make this dynamic)
    const locations = [
      { lat: 28.6139, lng: 77.2090 }, // New Delhi
      { lat: 19.0760, lng: 72.8777 }, // Mumbai
      { lat: 12.9716, lng: 77.5946 }  // Bangalore
    ];
  
  return (
     <>
      <Navbar />
      <Carousel />
      <SearchSection />
      <div style={{ width: '70vw', margin: '50px 0', height: 'auto' }}>
        <Map locations={locations} />
      </div>
      <Footer />
     </>
   
  )
}

export default App
