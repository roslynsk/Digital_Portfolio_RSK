import React from "react";
import "./Home.css";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";


import sentioimg from "../assets/sentio.png";
import haptiximg from "../assets/Haptix.png";
import airbudimg from "../assets/airbuds.png";
import backgroundimg from "../assets/Coverdrawing.png";
import affinityimg from "../assets/affinity.png";
import solidworksimg from "../assets/solidworks.png";
import figmaimg from "../assets/figma.png";
import blenderimg from "../assets/blender.png";
import mayaimg from "../assets/maya.png";

// Array of featured projects
const featuredProjects = [
  {
    title: "Sentio",
    description: "Detecting organ rejection in transplant patients",
    image: sentioimg,
    button: "See Project",
  },
  {
    title: "HaptiX",
    description: "Haptic feedback suite collab with Logitech",
    image: haptiximg,
    button: "See Project",
  },
  {
    title: "Airbuds",
    description: "Redesigned case for ease of use when travelling",
    image: airbudimg,
    button: "See Project",
  },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <img src={backgroundimg} alt="background" className="hero-bg" />

        <div className="fronttext">
          <h2>2025</h2>
          <h1>
            EMPATHY DRIVEN <br /> INNOVATION
          </h1>
          <p className="tagline">Hi! I'm Roslyn</p>
          <p className="subtext">
            A product / UX Designer who strives to create intuitive, elegant
            designs that solve real problems.
          </p>
          <button className="portfolio-btn" onClick={() => navigate("/portfolio")}>
            Portfolio
          </button>

        </div>
      </section>

      {/* Featured Work */}
      <section className="featured">
        <h2 className="section-title">FEATURED WORK</h2>

        <div className="featured-grid">
          {featuredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <span>{project.button}</span>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <div className="skills-header">
          <h2 className="section-title light">SKILLS</h2>
          <div className="skills-logos">
            <img src={affinityimg} alt="Affinity" />
            <img src={solidworksimg} alt="Solidworks" />
            <img src={blenderimg} alt="Blender" />
            <img src={figmaimg} alt="Figma" />
            <img src={mayaimg} alt="Maya" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2 className="section-title">SERVICES</h2>

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
