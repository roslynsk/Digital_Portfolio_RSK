import React from "react";
import "./Portfolio.css";

import project1Img from "../assets/sentioproject.jpg";
import project2Img from "../assets/airbuds.png";
import project3Img from "../assets/Haptix.png";

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>

      {/* Project 1 */}
      <section className="project project1">
        <div className="project-text">
          <h2>Sentio</h2>
          <h3>The Future of Transplant Care.</h3>
          <p>
            Detecting organ rejection in transplant patients using intelligent
            design and innovation.
          </p>
          <button className="project-btn">View Project</button>
        </div>
        <div className="project-image">
          <img src={project1Img} alt="Sentio Project" />
        </div>
      </section>

      {/* Project 2 */}
      <section className="project project2 reverse">
        <div className="project-text">
          <h2>Airbuds</h2>
          <h3>Redesigning Everyday. Perfecting the Case.</h3>
          <p>
            A reimagined travel-friendly earbud case that focuses on
            accessibility and comfort.
          </p>
          <button className="project-btn">View Case Study</button>
        </div>
        <div className="project-image">
          <img src={project2Img} alt="Airbuds Project" />
        </div>
      </section>

      {/* Project 3 */}
      <section className="project project3">
        <div className="project-text">
          <h2>HaptiX</h2>
          <h3>Sim Gaming, Intensified.</h3>
          <p>
            A haptic feedback suite designed for immersive experiences with
            Logitech’s design team.
          </p>
          <button className="project-btn">View Case Study</button>
        </div>
        <div className="project-image">
          <img src={project3Img} alt="HaptiX Project" />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
