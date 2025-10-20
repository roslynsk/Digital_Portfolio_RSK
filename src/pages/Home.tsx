import React from "react";
import "./Home.css";
import Contact from "./Contact"


import sentioimg from '../assets/sentioproject.jpg';
import haptiximg from '../assets/Haptix.png';
import airbudimg from '../assets/airbuds.png';
import backgroundimg from '../assets//Coverdrawing.png';
import affinityimg from '../assets/affinity.png';
import solidworksimg from '../assets/solidworks.png';
import figmaimg from '../assets/figma.png';
import blenderimg from '../assets/blender.png';

const Home: React.FC = () => {
  return (
    <div className="home">
      
      {/* Hero */}
      
      <section className="hero">
        <img src={backgroundimg} alt="background" className="hero-bg"/>
      
        <div className="fronttext">
          <h2>2025</h2>
          <h1>EMPATHY DRIVEN <br></br> INNOVATION</h1>
          <p className="tagline">Hi! I'm Roslyn</p>
          <p className="subtext">
            A product / UX Designer who strives to create intuitive, elegant designs that solve real problems.
          </p>
          <button className="portfolio-btn">Portfolio</button>
        </div>
      </section>

      {/* Featured Work */}
      <section className="featured">
        <div className="scrolling-title">
          <div className="scrolling-track">
            <span>FEATURED WORK</span>
            <span>FEATURED WORK</span>
            <span>FEATURED WORK</span>
            <span>FEATURED WORK</span>
          </div>
        </div>
        <div className="featured-grid">
          <div className="project-card">
            <img src={sentioimg} alt="Sentio" />
            <h3>Sentio</h3>
            <p>Detecting organ rejection in transplant patients</p>
          </div>
          <div className="project-card">
            <img src={haptiximg} alt="HaptiX" />
            <h3>HaptiX</h3>
            <p>Haptic feedback suite collab with Logitech</p>
          </div>
          <div className="project-card">
            <img src={airbudimg}alt="Airbuds" />
            <h3>Airbuds</h3>
            <p>Redesigned case for ease of use when travelling</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
       <div className="scrolling-title">
          <div className="scrolling-track">
            <span>SKILLS</span>
            <span>SKILLS</span>
            <span>SKILLS</span>
            <span>SKILLS</span>
            <span>SKILLS</span>
            <span>SKILLS</span>
          
          </div>
        </div>
        <div className="skills-logos">
          <img src={affinityimg} alt="affinity" />
          <img src ={solidworksimg} alt="solidworks" />
          <img src={blenderimg} alt="blender" />
          <img src={figmaimg} alt="figma" />
        </div>
      </section>

      {/* Services */}
      <section className="services">
         <div className="scrolling-title">
          <div className="scrolling-track">
            <span>SERVICES</span>
            <span>SERVICES</span>
            <span>SERVICES</span>
            <span>SERVICES</span>
            <span>SERVICES</span>
            <span>SERVICES</span>
          </div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <h3>Product Design</h3>
            <ul>
              <li>CAD Modelling</li>
              <li>User Research</li>
              <li>User Testing</li>
              <li>Brand Identity</li>
              <li>Prototyping</li>
            </ul>
          </div>

          <div className="service-card">
           <h3>UX/UI Design</h3>
           <ul>
            <li>Wireframing</li>
            <li>Digital Prototyping</li>
            <li>User Flows</li>
            <li>User Experience Research</li>
          </ul>
        </div>
    </div>
   </section>

   <Contact />

  </div>
  );
};


   



export default Home;

