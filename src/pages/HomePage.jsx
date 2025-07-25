
import React , { useState } from 'react';

//import Footer from  "../components/Footer/Footer";
import  './HomePage.css';
import Header from '../components/header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
  <div>
     <Header/>
    <div id="pqr">
      
       
    <div className="home-scroll-container">
      
    <header/>
      <div className="banner-container">
        <h1 className="home-title"><strong>Welcome to Vivekanand</strong> <span id="ab">College!</span> </h1>
        
       
        <p>Your journey to excellence starts here.</p>
        <div className="button-wrapper">
        <Link to="/apply" className="cta-button">Apply Now!</Link>
        </div>
      </div>
        <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
        <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
     
      <div>  
        <h2 id="coll">Why Choose Vivekanand College?</h2>
        <ul>
		<li id="coll"> **Legacy of Excellence**: Decades of commitment to quality education.</li>
		<li id="coll"> **Experienced Faculty**:Learn from renowned experts and passionate educators.</li>
		<li id="coll"> **Experienced Faculty**:Learn from renowned experts and passionate educators.</li>
		<li id="coll"> **Modern Facilities**:Well-equipped labs, expansive library, and comfortable campus.</li>
		<li id="coll"> **Holistic Development**: Focus on co-curricular activities, sports, and community service.</li>
    <li id="coll">**Strong Placements**: Excellent career opportunities with leading companies.</li>
    </ul>
        <div>
          <h2 id="camp"> Campus Life & Facilities</h2>
          <img src="/images/students-studying-DbLGuwF_.jpeg" alt="Campus View 1" className="gallery-image" />
          <img src="images/campus-life.jpg" alt="Campus View 2"className="gallery-image taller-image"/>
        
          <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
        </div>
        <p className="home-subtext">Ready to explore our courses?</p>
        <div className="button-wrapper"> 
        <Link to="/courses" className="cta-button-e" onClick={() => setShowForm(true)}>Explore Courses</Link>
        </div>
        {/* Future: Admission Form Component */}
        {/* {showForm && <AdmissionForm />} */}
      </div>
      
    </div>
    
    </div>
    <Footer/>
    </div>
  );
};

 export default HomePage;
