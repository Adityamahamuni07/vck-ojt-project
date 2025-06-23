import React, { useState } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

// Pages

import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Headers from "./components/header/Header";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <Router>
     
      <Headers />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
    </Router>
    </>
  );
}

export default App;