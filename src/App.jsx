import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage.jsx";
import CertificationsPage from "./pages/CertificationsPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [currentView, setCurrentView] = useState("home"); // Default to home on page load

  const handleNavClick = (view) => {
    console.log("Navigating to:", view); // Debugging: log the clicked view
    setCurrentView(view); // Update view based on navbar click
  };

  console.log("Current View:", currentView); // Debugging: log currentView to see updates

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
