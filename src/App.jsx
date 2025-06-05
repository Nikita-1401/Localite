import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const [activeModal, setActiveModal] = useState(null);
  const locations = [
    { lat: 28.6139, lng: 77.209 },
    { lat: 19.076, lng: 72.8777 },
    { lat: 12.9716, lng: 77.5946 },
  ];

  const closeModal = () => setActiveModal(null);

  // Check if user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem("Token") !== null;
  };

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <div className="app">
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

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <SearchSection />
                <div style={{
                  width: "100%",
                  maxWidth: "1200px",
                  margin: "50px auto",
                  padding: "0 1rem",
                }}>
                  <Map locations={locations} />
                </div>
                <Card />
                <Subscription />
                <Payment />
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
