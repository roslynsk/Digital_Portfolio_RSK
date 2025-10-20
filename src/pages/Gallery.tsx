import React from "react";
import "./Gallery.css";

// ✅ Import your images
import filler1img from "../assets/filler_1.jpg";
import filler2img from "../assets/filler_3.jpg";
import filler3img from "../assets/filler_4.jpg";
import filler4img from "../assets/filler_5.jpg";

const Gallery: React.FC = () => {
  const projects = [
    { id: 1, title: "X", subtitle: "Description", image: filler1img },
    { id: 2, title: "Y", subtitle: "Description", image: filler2img },
    { id: 3, title: "Z", subtitle: "Description", image: filler3img },
    { id: 4, title: "A", subtitle: "Description", image: filler4img },
  ];

  return (
    <div className="gallery">
      <h2>GALLERY</h2>

      <div className="gallery-columns">
        {/* Column 1 */}
        <div className="gallery-column">
          {projects.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="caption">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="gallery-column">
          {projects.map((item) => (
            <div key={item.id + "-2"} className="gallery-item">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="caption">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="gallery-column">
          {projects.map((item) => (
            <div key={item.id + "-3"} className="gallery-item">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="caption">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
