import React from "react";
import { Link } from "react-router-dom";
import "./SentioApp.css";
import prototypeVideo from "../assets/sentio_prototype.mp4";

// Hero image — swap for a dedicated Sentio App screenshot when you have one

// TODO: add real screens to your assets and import them here, e.g.:
// import prototype1Img from "../assets/sentio_lofi.png";
// import prototype2Img from "../assets/sentio_hifi.png";
import researchImg from "../assets/sentio_research.png";
import journeyImg from "../assets/sentio_journey_map.png";
import lowFiImg from "../assets/sentio_wireframe.png";
import resultImg from "../assets/sentio.png";

const SentioApp: React.FC = () => {
  return (
    <div className="sentio-app">
      <Link to="/portfolio" className="back-link">← Back to portfolio</Link>
{/* PROTOTYPE VIDEO */}
<section className="sa-prototype">
  <video
    src={prototypeVideo}
    autoPlay
    loop
    muted
    playsInline
    controls
  />
</section>
      {/* HERO */}
      <section className="sa-hero">
        <div className="sa-hero-text">
          <p className="sa-eyebrow">UX/UI CASE STUDY</p>
          <h1>Sentio</h1>
          <p className="sa-subtitle">
            A companion app bringing calm, control and connection to the space between clinic visits for post-transplant patients.
          </p>
        </div>
        
      </section>

      {/* META PANEL */}
      <section className="sa-meta">
        <div className="sa-meta-item">
          <h4>TIMELINE</h4>
          <p>8 months</p>
        </div>
        <div className="sa-meta-item">
          <h4>MY ROLE</h4>
          <p>UX Research · UX Design · UI Design · Usability Testing</p>
        </div>
        <div className="sa-meta-item">
          <h4>TOOLS</h4>
          <p>Figma · Affinity Designer</p>
        </div>
        <div className="sa-meta-item">
          <h4>DELIVERABLES</h4>
          <p>Interactive prototype, usability report</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sa-section">
        <h2>Project Overview</h2>
        <p>
          Sentio is a smart sensor designed to detect early signs of organ rejection in post-transplant patients through dd-cfDNA monitoring. This case study focuses on the <strong>companion mobile app</strong> that gives patients real-time visibility into their organ health, tools to manage daily care, and access to a supportive community.
        </p>
        <p>
          The project was inspired by watching a family member navigate the aftermath of a lung transplant, not just the medical challenges, but the isolation, anxiety and admin burden that can shape day-to-day life.
        </p>
      </section>

      {/* CHALLENGE */}
      <section className="sa-section sa-highlight">
        <h2>The Challenge</h2>
        <p>
          Over 80% of transplant patients experience depression, anxiety or feelings of isolation. Between clinic visits, they lack real-time visibility into their organ health and are left to manage medication schedules, appointments and exercise routines alone, often while feeling physically vulnerable and emotionally overwhelmed.
        </p>
        <p>
          Medical journals focus heavily on the physical process of transplantation. The emotional and quality-of-life dimensions of post-transplant care are consistently under-served.
        </p>
      </section>

      {/* GOAL */}
      <section className="sa-section">
        <h2>The Goal</h2>
        <p>Design a mobile companion app that:</p>
        <ul className="sa-list">
          <li>Gives patients confidence through real-time organ health data</li>
          <li>Reduces daily overwhelm with integrated tools for medication, exercise and appointments</li>
          <li>Reduces isolation through a community space with events, classes, and peer connection</li>
          <li>Provides a clear, calm escalation path when readings suggest possible rejection</li>
        </ul>
      </section>

      {/* RESEARCH */}
      <section className="sa-section">
        <h2>Research</h2>

        <h3>Secondary Research</h3>
        <p>
          Reviewed medical journals, transplant screening protocols, and dd-cfDNA monitoring literature. Identified a gap: existing research overwhelmingly addresses the physical transplant process, not the emotional and quality-of-life dimensions patients actually live with.
        </p>

        <h3>Primary Research: 8 In-Depth Interviews</h3>
        <p>
          Interviews with 6 post-transplant patients and 2 healthcare professionals, including one organ donation nurse. All names anonymised for confidentiality.
        </p>

        <h3>Cultural Probes</h3>
        <p>
          Photo journals and patient diaries with prompts, so participants could capture daily struggles in their own words on their own timeline — rather than being filtered through the framing of a live interview.
        </p>
      <img
  src={researchImg}
  alt="Research process including interviews and affinity mapping"
  className="sa-feature-image"
/>
        <div className="sa-side-image">
  <div>
    <h3>Journey Timeline Mapping</h3>
    <p>
      Visualised the full patient journey — from waiting list through surgery to long-term recovery — to identify emotional peaks, troughs and design opportunities.
    </p>
  </div>

  <img
    src={journeyImg}
    alt="Journey map"
  />
</div>

        <h3>Three Key Insights</h3>
        <div className="sa-insights">
          <div className="sa-insight">
            <span className="sa-insight-num">01</span>
            <h4>Constant background anxiety between appointments</h4>
            <p>The interval between clinic checks feels like flying blind — patients have no real-time signal to reassure them their organ is okay.</p>
          </div>
          <div className="sa-insight">
            <span className="sa-insight-num">02</span>
            <h4>Isolation is a bigger burden than expected</h4>
            <p>Multiple patients said they wished they had known someone else on the transplant journey. Peer connection consistently emerged as a missing support system.</p>
          </div>
          <div className="sa-insight">
            <span className="sa-insight-num">03</span>
            <h4>Daily care admin crowds out self-care</h4>
            <p>Between medications, appointments and exercise routines, patients described forgetting to eat or exercise. The load itself becomes a health risk.</p>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="sa-section">
        <h2>Design</h2>

        <h3>Prototype 1 — Low Fidelity</h3>
        <p>
          Black-and-white wireframes to establish page hierarchy and feature discovery without committing to visual style. Focus was on structural decisions: what lives on the home screen, how the menu is organised, and how a user gets from setup to reading their data.
        </p>
        <div className="sa-frame">
  <img
    src={lowFiImg}
    alt="Low fidelity prototype"
  />
</div>

        <h3>Prototype 2 — High Fidelity</h3>
        <p>
          Colour, full component set, and complete navigation across sensor setup, home/graph, alarms, calendar, classes, booking, events, forum, and direct messages.
        </p>
        {/* <img src={prototype2Img} alt="High fidelity prototype" className="sa-image" /> */}
      </section>

      {/* TESTING */}
      <section className="sa-section">
        <h2>Usability Testing</h2>

        <h3>Method</h3>
        <p>
          Chose qualitative in-person testing with think-aloud protocol so I could observe body language, hesitation, and unexpected navigation paths — not just verbal feedback.
        </p>
        <p>
          Layered on the <strong>System Usability Scale (SUS)</strong> — a validated 10-item questionnaire, scored 0–100 — to quantify perceived usability and provide a benchmark for iteration.
        </p>

        <h3>Participants & Tasks</h3>
        <p>
          Three participants spanning the target user demographic (ages 20, 54, 57). Users first explored freely, then completed six defined tasks including setting up the sensor, booking a class, browsing the forum, and interpreting graph readings.
        </p>

        <h3>What Broke</h3>
        <ul className="sa-list">
          <li>Text was too small across most pages — critical for older users</li>
          <li>Duplicate menus at top and bottom confused navigation</li>
          <li>Graph readings hard to interpret without medical background</li>
          <li>Sensor setup lacked clear instructions</li>
          <li>Event and class imagery dominated attention away from key info</li>
        </ul>

        <h3>SUS Scores — Round 1</h3>
        <div className="sa-scores">
          <div className="sa-score">
            <p className="sa-score-label">USER 1</p>
            <p className="sa-score-number">78</p>
            <p className="sa-score-grade">Grade B</p>
          </div>
          <div className="sa-score">
            <p className="sa-score-label">USER 2</p>
            <p className="sa-score-number">75</p>
            <p className="sa-score-grade">Grade B</p>
          </div>
          <div className="sa-score">
            <p className="sa-score-label">USER 3</p>
            <p className="sa-score-number">68</p>
            <p className="sa-score-grade">Grade C</p>
          </div>
        </div>
      </section>

      {/* ITERATION */}
      <section className="sa-section">
        <h2>Iteration</h2>
        <p>Based on testing insights, I made the following targeted changes:</p>
        <ol className="sa-list sa-list-numbered">
          <li>Created a brand identity (name and logo) to give the app a clear identity</li>
          <li>Darkened background and button colours for improved contrast</li>
          <li>Scaled up text across all pages for legibility</li>
          <li>Removed the redundant hamburger menu, leaving a single menu bar at the bottom</li>
          <li>Added a personal setup step to capture age and transplant type — enabling personalised rejection thresholds</li>
          <li>Redesigned the graph page with colour-coded risk levels (green / orange / red)</li>
          <li>Added a high-risk warning screen with tap-to-call "My Team" contacts and emergency signs</li>
          <li>Detailed sensor setup with a progress graphic to reduce abandonment</li>
          <li>Moved event descriptions and CTAs beneath images for clearer hierarchy</li>
        </ol>

        <h3>SUS Scores — Round 2 (Post-Iteration)</h3>
        <div className="sa-scores sa-scores-after">
          <div className="sa-score">
            <p className="sa-score-label">USER 1</p>
            <p className="sa-score-number">98</p>
            <p className="sa-score-grade">Grade A · +20</p>
          </div>
          <div className="sa-score">
            <p className="sa-score-label">USER 2</p>
            <p className="sa-score-number">95</p>
            <p className="sa-score-grade">Grade A · +20</p>
          </div>
          <div className="sa-score">
            <p className="sa-score-label">USER 3</p>
            <p className="sa-score-number">90</p>
            <p className="sa-score-grade">Grade A · +22</p>
          </div>
        </div>

        <div className="sa-callout">
          <p className="sa-callout-label">RESULT</p>
          <p className="sa-callout-text">
            Average SUS score improved from <strong>73.7 (Grade B/C)</strong> to <strong>94.3 (Grade A)</strong> through structured, user-led iteration.
          </p>
        </div>
        <div className="sa-result-image">
  <img
    src={resultImg}
    alt="Final Sentio interface"
  />
</div>
      </section>

      {/* REFLECTION */}
      <section className="sa-section">
        <h2>Reflection</h2>
        <p>
          This was my fourth year project, and it became something more meaningful than any brief I've worked on before. Designing for transplant patients meant sitting with people during vulnerable conversations about isolation, anxiety and everyday struggle — and being trusted with those stories shaped how I approach research now. I care much more about protecting the emotional weight of what participants share, not just the data.
The biggest lesson was how much a small design change can matter. Increasing text size, simplifying the menu, adding colour to the graph — none of these are dramatic decisions on their own, but together they moved SUS scores from B/C to A. It reinforced for me that usability lives in the details, and that testing with real users is the only way to know which details actually matter.
If I were to take Sentio further, I'd expand the testing sample well beyond three participants and run a formal accessibility audit — designing for a patient population that skews older means legibility and motor accessibility deserve dedicated attention. A next round would also include developer handoff and, in a real-world scenario, clinical validation of the risk thresholds.
More than anything, this project confirmed that the design work I want to do is the kind that quietly improves people's day-to-day lives.
        </p>
      </section>
    </div>
  );
};

export default SentioApp;