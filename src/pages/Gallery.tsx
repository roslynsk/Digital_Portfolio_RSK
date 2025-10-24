import React from "react";
import "./Gallery.css";

// ✅ Import your images
import filler1img from "../assets/filler_1.jpg";
import filler2img from "../assets/filler_3.jpg";


const Gallery: React.FC = () => {
  // Photography projects
  const photographyProjects = [
    { id: 1, title: "Photo 1", subtitle: "Description", image: filler1img },
    { id: 2, title: "Photo 2", subtitle: "Description", image: filler2img },
  ];

  // Video projects (YouTube embed links)
  const videoProjects = [
    {
      id: 1,
      title: "Video 1",
      subtitle: "Description",
      youtube: "https://www.youtube.com/embed/4mCMQyVjxZ4?sirbI2L1yWXpvzBlOd",
    },
    
  ];

  // Helper function to render 3 columns
  const renderColumns = (projects: typeof photographyProjects | typeof videoProjects) => {
    const columns = [1, 2, 3];
    return columns.map((col) => (
      <div key={col} className="gallery-column">
        {projects.map((item) => (
          <div key={item.id + "-" + col} className="gallery-item">
            {("youtube" in item && item.youtube) ? (
              <iframe
                width="100%"
                height="200"
                src={item.youtube}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "8px" }}
              ></iframe>
            ) : (
              <img src={(item as any).image} alt={item.title} loading="lazy" />
            )}
            <div className="caption">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="gallery">
      {/* Photography Section */}
      <h2>PHOTOGRAPHY</h2>
      <div className="gallery-columns">{renderColumns(photographyProjects)}</div>

      {/* Video Production Section */}
      <h2>VIDEO PRODUCTION</h2>
      <div className="gallery-columns">{renderColumns(videoProjects)}</div>
    </div>
  );
};

export default Gallery;
