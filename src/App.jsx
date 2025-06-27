import React, { useState } from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

// Pages

import AboutPage from "./pages/AboutPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursePage";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Headers from "./components/header/Header";
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopUp";

const App= ()  => {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return ( 
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Aditya madan Mahamuni"
          studentPhotoUrl="/images/WhatsApp Image 2025-06-27 at 11.35.18 AM.jpeg"// Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>










    <div>
    <Router>
          
        <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/apply" element={<AdmissionPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/courses" element={<CoursesPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </main>
     
        <ChatbotComponent/> 
    </Router>
    </div>
   
    </>
  );
}

export default App;