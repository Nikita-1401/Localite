// App.jsx
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import SearchSection from "./components/Search";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Dashboard from "./components/dashboard";
import Login from "./components/Login";
import SignUpModal from "./components/SignUpModal";
import Card from "./components/Card";
import SearchResults from "./components/SearchResults";
import Subscription from "./components/Subscription";
 

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

  // Public Home component
  const PublicHome = () => (
    <>
     <Carousel onLoginClick={() => setActiveModal("signin")} />
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
      <Subscription />
 
    </>
  );

  // Protected Home component (after login)
  const ProtectedHome = () => (
    <>
    <Carousel onLoginClick={() => setActiveModal("signin")} />
      <SearchSection />
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 1rem",
        }}
      >
        {/* <Map locations={locations} /> */}
      </div>
      <Card />
      <Subscription />
     
    </>
  );

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar
          onSignupClick={() => setActiveModal("signup")}
          onLoginClick={() => setActiveModal("signin")}
          isAuthenticated={isAuthenticated()}
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
          {/* Public routes */}
          <Route
            path="/"
            element={
              !isAuthenticated() ? <PublicHome /> : <Navigate to="/home" />
            }
          />

          {/* Protected routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <ProtectedHome />
              </ProtectedRoute>
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
          <Route
            path="/listings"
            element={
              <ProtectedRoute>
                <Card />
              </ProtectedRoute>
            }
          />
          <Route
            path="/search"
            element={
               
                <SearchResults />
              
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
