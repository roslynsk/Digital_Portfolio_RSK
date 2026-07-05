import React, { useState, useEffect } from "react";
import "./Gallery.css";

import filler1img from "../assets/aesthetic.jpg";
import filler2img from "../assets/dog.jpeg";

import sentioVideo from "../assets/sentio_prototype.mp4";

export const videoProjects = [
  {
    id: 1,
    title: "Sentio",
    videoUrl: sentioVideo,
  },
];

type PhotoItem = { type: "photo"; id: string; title: string; image: string };
type VideoItem = { type: "video"; id: string; title: string; thumbnail: string; youtube: string };
type GalleryItem = PhotoItem | VideoItem;


const photos: PhotoItem[] = [
  { type: "photo", id: "p1", title: "Ethereal Essence", image: filler1img },
  { type: "photo", id: "p2", title: "A Puppy's Palate", image: filler2img },
];

const videos: VideoItem[] = [
  {
    type: "video",
    id: "v1",
    title: "Headphones Ad",
    thumbnail: "https://img.youtube.com/vi/fn9DfOfEUCQ/hqdefault.jpg",
    youtube: "https://www.youtube.com/embed/fn9DfOfEUCQ",
  },
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const renderCard = (item: GalleryItem) => (
    <figure key={item.id} className="gallery-item">
      <button
        className="gallery-card"
        onClick={() => setSelected(item)}
        aria-label={`Open ${item.title}`}
      >
        <img
          src={item.type === "photo" ? item.image : item.thumbnail}
          alt={item.title}
          className="gallery-image"
          loading="lazy"
        />
        {item.type === "video" && <span className="play-icon" aria-hidden="true">▶</span>}
      </button>
      <figcaption className="gallery-caption">{item.title}</figcaption>
    </figure>
  );

  return (
    <div className="gallery">
      <header className="gallery-header">
        <h1>GALLERY</h1>
      </header>

      <section className="gallery-section">
        <h2>PHOTOGRAPHY</h2>
        <div className="gallery-grid">{photos.map(renderCard)}</div>
      </section>

      <section className="gallery-section">
        <h2>VIDEO PRODUCTION</h2>
        <div className="gallery-grid">{videos.map(renderCard)}</div>
      </section>

      {selected && (
        <div
          className="lightbox"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            className="lightbox-close"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selected.type === "photo" ? (
              <img src={selected.image} alt={selected.title} />
            ) : (
              <div className="lightbox-video">
                <iframe
                  src={`${selected.youtube}?autoplay=1`}
                  title={selected.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <p className="lightbox-caption">{selected.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;