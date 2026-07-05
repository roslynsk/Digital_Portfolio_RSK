import React from "react";
import { useParams, Link } from "react-router-dom";
import { videoProjects } from "../pages/Gallery";
import "./Gallery.css";
import "./VideoDetail.css";
import conceptStoryboard from "../assets/conceptstoryboard.jpeg";
import studioStoryboard from "../assets/studio storyboard.jpeg";

const VideoDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const videoId = Number(id);
  const video = videoProjects.find((v) => v.id === videoId);

  if (!video) {
    return (
      <div className="video-detail">
        <p>Video not found.</p>
        <Link to="/gallery" className="back-link">
          ← Back to gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="video-detail">
      <header className="video-detail-header">
        <Link to="/gallery" className="back-link">
          ← Back to gallery
        </Link>
        <h1>{video.title}</h1>
      </header>

      <div className="video-detail-player">
        <div className="video-container">

          {/* ✅ FIXED FOR MP4 */}
          <video
            controls
            className="gallery-video-full"
          >
            <source src={video.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </div>

      <section className="video-detail-content">
        <h2>About this project</h2>

        {video.id === 1 && (
          <>
            <p>This project was my first experience with video production...</p>
            <p>We began by sitting down as a group and brainstorming...</p>
            <p>Next, we storyboarded the concept...</p>
            <p>Overall, this was a really cool experience...</p>
          </>
        )}

        {video.id === 2 && (
          <>
            <p>When first given this assignment, I struggled...</p>
            <p>I started to research nature...</p>
            <p>This sequence starts at 0...</p>
            <p>The rules to this music performance are simple...</p>
            <p>I took many strange sounds...</p>
          </>
        )}
      </section>

      {video.id === 1 && (
        <section className="video-storyboard-section">
          <div className="storyboard-card">
            <h3>Concept Storyboard</h3>
            <img src={conceptStoryboard} alt="Concept storyboard" />
          </div>

          <div className="storyboard-card">
            <h3>Studio Storyboard</h3>
            <img src={studioStoryboard} alt="Studio storyboard" />
          </div>
        </section>
      )}
    </div>
  );
};

export default VideoDetail;