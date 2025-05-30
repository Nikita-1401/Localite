import React from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import SearchSection from "../components/Search";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Dashboard from "../components/dashboard";
import SignIn from "../components/SignIn";
import SignUpModal from "../components/SignUpModal";
import { useState } from "react";

function App() {
  // Example locations (you can make this dynamic)
  const locations = [
    { lat: 28.6139, lng: 77.209 }, // New Delhi
    { lat: 19.076, lng: 72.8777 }, // Mumbai
    { lat: 12.9716, lng: 77.5946 }, // Bangalore
  ];
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Navbar
        onSignupClick={() => setShowSignup(true)}
        onLoginClick={() => setShowLogin(true)}
      />

      {showSignup && <SignUpModal onClose={() => setShowSignup(false)} />}
      {showLogin && <SignIn onClose={() => setShowLogin(false)} />}
      <Carousel />
      <SearchSection />
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 1rem",
        }}
      >
        <Map locations={locations} />
      </div>

      <Footer />
      <Dashboard />



    </>
  );
}

export default App;
