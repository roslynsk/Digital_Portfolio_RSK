import React from "react";
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";

import project1Img from "../assets/sentio.png";
import project2Img from "../assets/airbuds.png";
import project3Img from "../assets/Haptix.png";
import cniotalImg from "../assets/Cniotail.jpg";
import PentaglowImg from "../assets/PentaGlow.jpeg";
import uniMarketImg from "../assets/Hackathon_1.jpg";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  button: string;
  path?: string;
};

const productDesignProjects: Project[] = [
  {
    id: 4,
    title: "Cniotal",
    description:
      "An interactive sculpture merging traditional Irish craft with physical computing: Handknitted cubes that respond to touch with calm, meaningful visual feedback.",
    image: cniotalImg,
    button: "View Project",
  },
  {
    id: 5,
    title: "Penta Glow",
    description:
      "An experimental lamp design exploring laser cutting and digital fabrication, combining laser-cut wooden forms with custom 3D-printed brackets for assembly.",
    image: PentaglowImg,
    button: "View Project",
  },
  {
    id: 3,
    title: "HaptiX",
    description:
      "A haptic feedback suite designed for immersive experiences with Logitech's design team.",
    image: project3Img,
    button: "View Project",
  },
  {
    id: 2,
    title: "Airbuds",
    description:
      "A reimagined travel-friendly earbud case that focuses on accessibility and comfort.",
    image: project2Img,
    button: "View Project",
  },
];


const uxUiProjects: Project[] = [
  {
    id: 1,
    title: "Sentio",
    description:
      "A companion app for post-transplant care. Iterated from a B/C SUS score to Grade A through structured usability testing.",
    image: project1Img,
    button: "View Project",
    path: "/portfolio/sentio-app",
  },
  {
    id: 6,
    title: "UniMarket",
    description:
      "A trusted, UL-exclusive marketplace designed to help students and staff buy, sell, and exchange second-hand items safely.",
    image: uniMarketImg,
    button: "View Project",
    path: "/portfolio/unimarket-app",
  },
];


const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  const renderCard = (project: Project) => (
    <div
      key={project.id}
      className="portfolio-card"
      onClick={() => navigate(project.path || `/portfolio/${project.id}`)}
    >
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
  );

  return (
    <div className="portfolio">
      <h1 className="portfolio-title">PORTFOLIO</h1>

      <section className="portfolio-section">
        <h2 className="portfolio-section-heading">PRODUCT DESIGN</h2>
        <div className="portfolio-grid">
          {productDesignProjects.map(renderCard)}
        </div>
      </section>

      <section className="portfolio-section">
        <h2 className="portfolio-section-heading">UX / UI</h2>
        <div className="portfolio-grid">
          {uxUiProjects.map(renderCard)}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;