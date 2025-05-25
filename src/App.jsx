import React from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import SearchSection from '../components/Search'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Carousel />
      <SearchSection />
    </div>
  )
}

export default App
