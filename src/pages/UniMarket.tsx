import React from "react";
import { Link } from "react-router-dom";
import "./UniMarket.css";
import hackathonVideo from "../assets/hackathon_video.mp4";

import listingsImg from "../assets/Hackathon_2.jpg";
import messagingImg from "../assets/Hackathon_3.jpg";

const UniMarket: React.FC = () => {
  return (
    <div className="unimarket-app">
      <Link to="/portfolio" className="back-link">← Back to portfolio</Link>

      {/* PROTOTYPE VIDEO */}
      <section className="um-prototype">
        <video
          src={hackathonVideo}
          autoPlay
          loop
          muted
          playsInline
          controls
        />
      </section>

      {/* HERO */}
      <section className="um-hero">
        <div className="um-hero-text">
          <p className="um-eyebrow">UX/UI CASE STUDY</p>
          <h1>UniMarket</h1>
          <p className="um-subtitle">
            A trusted, UL-exclusive marketplace designed to help students and staff buy, sell, and exchange second-hand items safely.
          </p>
        </div>
      </section>

      {/* META PANEL */}
      <section className="um-meta">
        <div className="um-meta-item">
          <h4>DURATION</h4>
          <p>48-hour Hackathon</p>
        </div>
        <div className="um-meta-item">
          <h4>MY ROLE</h4>
          <p>UX/UI Designer</p>
        </div>
        <div className="um-meta-item">
          <h4>ORGANISATION</h4>
          <p>CSIS, University of Limerick</p>
        </div>
        <div className="um-meta-item">
          <h4>TOOLS</h4>
          <p>Figma</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="um-section">
        <h2>Project Overview</h2>
        <p>
          This project was designed during a 48-hour hackathon hosted by the Computer Science and Information Systems Society (CSIS) at the University of Limerick. The challenge was to design a secure, university-exclusive marketplace that enables students and staff to safely buy and sell second-hand items within the campus community.
        </p>
        <img
          src={listingsImg}
          alt="UniMarket listings interface"
          className="um-feature-image"
        />
      </section>

      {/* CHALLENGE */}
      <section className="um-section um-highlight">
        <h2>The Challenge</h2>
        <p>
          The platform addresses the limitations of existing informal marketplaces, such as Facebook groups and WhatsApp chats, by providing a trusted environment where all users are verified through their University of Limerick email accounts. Users can create listings with images, browse items by category, communicate through an integrated messaging system, and arrange transactions with confidence. The platform also includes moderation tools that allow administrators to manage listings, remove inappropriate content, and suspend users who breach community guidelines.
        </p>
      </section>

      {/* IMPACT */}
      <section className="um-section">
        <h2>Impact</h2>
        <p>
          By creating a secure, UL-only marketplace, the platform encourages sustainable consumption, reduces waste through the reuse of goods, and strengthens the sense of community on campus while prioritizing user safety and trust.
        </p>
        <div className="um-frame">
          <img src={messagingImg} alt="UniMarket messaging interface" />
        </div>
      </section>
    </div>
  );
};

export default UniMarket;
