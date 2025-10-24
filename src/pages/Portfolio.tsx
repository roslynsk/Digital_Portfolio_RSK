import React from "react";
import "./Portfolio.css";

import project1Img from "../assets/sentio.png";
import project2Img from "../assets/airbuds.png";
import project3Img from "../assets/Haptix.png";

const projects = [
  {
    title: "Sentio",
    description:
      "Designing The Future of Transplant Care. Detecting organ rejection in transplant patients using intelligent design and innovation.",
    image: project1Img,
    button: "View Project",
  },
  {
    title: "Airbuds",
    description:
      "A reimagined travel-friendly earbud case that focuses on accessibility and comfort.",
    image: project2Img,
    button: "View Project",
  },
  {
    title: "HaptiX",
    description:
      "A haptic feedback suite designed for immersive experiences with Logitech’s design team.",
    image: project3Img,
    button: "View Project",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <div className="portfolio-overlay">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className="project-btn">{project.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
