import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

import filler1img from "../assets/aesthetic.jpg";
import filler2img from "../assets/dog.jpeg";
import filler3img from "../assets/probw.jpg"

const photographyProjects = [
  { id: 1, title: "Ethereal Essence", description: "Aesthetic", image: filler1img },
  { id: 2, title: "A Puppy's Palate", description: "Passion", image: filler2img },
  { id: 3, title: "Professional", description: "Portrait", image: filler3img },
];

const videoProjects = [
  {
    id: 1,
    title: "Video 1",
    description: "Description",
    youtube: "https://www.youtube.com/embed/4mCMQyVjxZ4?sirbI2L1yWXpvzBlOd",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <section className="gallery-section">
        <h2>PHOTOGRAPHY</h2>
        <div className="gallery-grid">
          {photographyProjects.map((item) => (
            <Link to={`/gallery/${item.id}`} key={item.id} className="gallery-card-link">
              <div className="gallery-card">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2>VIDEO PRODUCTION</h2>
        <div className="gallery-grid">
          {videoProjects.map((item) => (
            <div key={item.id} className="gallery-card">
              <iframe
                width="100%"
                height="100%"
                src={item.youtube}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="gallery-video"
              ></iframe>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
