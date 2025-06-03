import React, { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import SearchSection from "../components/Search";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Dashboard from "../components/dashboard";
import Login from "../components/LogIn";
import SignUpModal from "../components/SignUpModal";
import Card from "../components/Card";
import Subscription from "../components/Subscription";
import Payment from "../components/Payment";

function App() {
  // Example locations
  const locations = [
    { lat: 28.6139, lng: 77.209 }, // New Delhi
    { lat: 19.076, lng: 72.8777 }, // Mumbai
    { lat: 12.9716, lng: 77.5946 }, // Bangalore
  ];

  const [activeModal, setActiveModal] = useState(null); // 'signin', 'signup', or null

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <Navbar
        onSignupClick={() => setActiveModal("signup")}
        onLoginClick={() => setActiveModal("signin")}
      />

      {activeModal === "signup" && (
        <SignUpModal
          onClose={closeModal}
          onSwitchToSignIn={() => setActiveModal("signin")}
        />
      )}
      {activeModal === "signin" && (
        <Login
          onClose={closeModal}
          onSwitchToSignUp={() => setActiveModal("signup")}
        />
      )}

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
      {/* <Card /> */}
      <Dashboard />
      <Subscription />
      <Payment />
      <Footer />
    </>
  );
}

export default App;
