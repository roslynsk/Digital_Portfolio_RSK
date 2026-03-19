// VideoDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { videoProjects } from "./Gallery"; // adjust import path as needed
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
          <iframe
            src={video.youtube}
            title={video.title}
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="gallery-video-full"
          />
        </div>
      </div>

      <section className="video-detail-content">
  <h2>About this project</h2>

  {video.id === 1 && (
    <>
      <p>
        This project was my first experience with video production, and I enjoyed it thoroughly.
        We worked hard to come up with an original concept and develop it as professionally as we could.
        The team worked really well together as we all took on different roles to ensure the production
        ran smoothly and in a timely manner.
      </p>

      <p>
        We began by sitting down as a group and brainstorming different ideas until we agreed upon a
        concept. We wanted to convey that these headphones were timeless and constant throughout life,
        no matter where (or when) you are. We decided to get creative and explore a concept that took
        the headphones through time, showing a woman using them in different eras. We wanted the video
        to end with some studio shoots of the headphones, displaying their features. Due to the nature
        of the video, we needed to extensively plan for shooting. We took a few days to look at
        different locations, makeup, hairstyles and fashion that could be used to convey the different
        eras.
      </p>

      <p>
        Next, we storyboarded the concept to use as a reference throughout shooting and assigned
        ourselves roles. My roles included creating the storyboards (as seen below), organising the
        studio shoot, bringing props to the set and being co-creative director during shooting. The
        latter job included being present at shooting and offering direction as to what the actress
        would do, how she should interact with props, where she should stand / move to and how to shoot
        for transitions in later editing.
      </p>

      <p>
        Overall, this was a really cool experience and I found myself really enjoying this type of work.
        We were really happy with the final video and can't wait to do more work like this!
      </p>
    </>
  )}

  {video.id === 2 && (
    <>
      <p>
        When first given this assignment, I struggled to come up with a defined set of rules.
      </p>

      <p>
        I started to research nature and came across many interesting papers about the Fibonacci Sequence.
        I decided to apply this to the music performance.
      </p>

      <p>
        This sequence starts at 0 and each new number in the pattern is created by adding its two
        predecessors together. For example: 0, 1, 2, 3, 5, 8.
      </p>

      <p>
        The rules to this music performance are simple. The performer readies 8 sounds. Every 10 seconds
        they can add/subtract a sound according to the sequence. They start by first growing the layers
        of sound (from 0 to 8), leaving the sounds play together for 10 seconds and then subtracting
        the sounds according to the sequence (8, 5, 3, 2, 1, 0).
      </p>

      <p>
        I took many strange sounds and followed this set of rules to create the performance above.
      </p>
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
