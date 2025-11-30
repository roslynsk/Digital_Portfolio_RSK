// Gallery.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";

import filler1img from "../assets/aesthetic.jpg";
import filler2img from "../assets/dog.jpeg";
import filler3img from "../assets/probw.jpg";

const photographyProjects = [
  { id: 1, title: "Ethereal Essence", description: "Aesthetic", image: filler1img },
  { id: 2, title: "A Puppy's Palate", description: "Passion", image: filler2img },
  { id: 3, title: "Professional", description: "Portrait", image: filler3img },
];

export const videoProjects = [
  {
    id: 1,
    title: "Headphones Ad ",
    description: "Assignment 4",
    youtube: "https://www.youtube.com/embed/fn9DfOfEUCQ?si=Xc7zpEQ96GqIn2uh",
    thumbnail: "https://img.youtube.com/vi/fn9DfOfEUCQ/hqdefault.jpg",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="gallery">
      <section className="gallery-section">
        <h2>PHOTOGRAPHY</h2>
        <div className="gallery-grid">
          {photographyProjects.map((item) => (
            <Link
              to={`/gallery/${item.id}`}
              key={item.id}
              className="gallery-card-link"
            >
              <div className="gallery-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                />
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
            <Link
              to={`/videos/${item.id}`}
              key={item.id}
              className="gallery-card-link"
            >
              <div className="gallery-card">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
