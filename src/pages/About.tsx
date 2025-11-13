import React from "react";
import "./About.css";
import profileImg from "../assets/pro.png";
import researchImg from "../assets/research.png";
import explorationImg from "../assets/exploration.png";
import concept1Img from "../assets/concept1.png";
import concept2Img from "../assets/concept2.png";


const About: React.FC = () => {
  return (
    <div className="about-page">

      {/* HERO*/}
      <section className="about-hero">
        <div className="hero-text">
          <h1>From products to experiences <br></br> — I make design more human.</h1>
          <p>
            Hi! I’m Roslyn, an Irish designer, focused on creating 
            solutions that feel seamless and meaningful. I have a BSc in Product Design and am currently sudying a MSc in Interaction and Experience Design.
          </p>
        </div>
        <img src={profileImg} alt="profileimg" className="hero-image" />
      </section>

       {/* EDUCATION */}
      <section className="education">
        <h2>EDUCATION</h2>
        <div className="timeline-horizontal">

          {/* Item 1: Erasmus */}
          <div className="timeline-item-horizontal">
            <div className="timeline-text-horizontal">
              <h4>2024</h4>
              <p>
                Erasmus Semester <br />
                Delft University of Technology
              </p>
            </div>
          </div>

          {/* Item 2: BSc (UL) */}
          <div className="timeline-item-horizontal">
            <div className="timeline-text-horizontal">
              <h4>2025</h4>
              <p>
                BSc Product Design <br />
                and Technology <br />
                University of Limerick
              </p>
            </div>
          </div>

          {/* Item 3: MSc (UL) */}
          <div className="timeline-item-horizontal">
            <div className="timeline-text-horizontal">
              <h4>2026</h4>
              <p>
                MSc Interaction and <br />
                Experience Design <br />
                University of Limerick
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* DESIGN PHILOSOPHY */}
      <section className="design-philosophy">
        <h2>DESIGN PHILOSOPHY</h2>
        <p>
          First I frame the problem I am trying to solve by identifying the project’s 
          goal and defining the users’ needs. Then I begin the design process...
        </p>
      </section>

      {/* DESIGN PROCESS */}
      <section className="design-process">
        <div className="process-step">
          <div className="process-text">
            <h3>01 RESEARCH</h3>
            <p>
              My design process is anchored in user-centric research to uncover genuine 
              user pain points and unmet needs.
            </p>
            <p><strong>Methods used:</strong></p>
            <ul>
              <li>Stakeholder and User Interviews</li>
              <li>User Research</li>
              <li>Competitive Analysis</li>
              <li>Personas</li>
              <li>User Journeys</li>
              <li>Value Proposition Statements</li>
            </ul>
          </div>
          <img src={researchImg} alt="Research process" />
        </div>

        <div className="process-step reverse">
          <img src={explorationImg} alt="Exploration sketches" />
          <div className="process-text">
            <h3>02 EXPLORATION</h3>
            <p>
              I start to ideate a variety of solutions — from low-fidelity sketches 
              to interactive prototypes — testing with users to refine and arrive 
              at the best-fitting solution.
            </p>
            <p><strong>Methods used:</strong></p>

            {/* bulletpoints */}
            <ul>
              <li>Wireframes</li>
              <li>User Journey Maps</li>
              <li>Prototypes</li>
              <li>Testing</li>
            </ul>
          </div>
        </div>

        <div className="process-step">
          <div className="process-text">
            <h3>03 CONCEPT DEVELOPMENT</h3>
            <p>
              Following successful validation, I transition the tested solutions into 
              high-fidelity designs. The solution’s identity, value, and feasibility 
              are established here.
            </p>
            <p><strong>Methods used:</strong></p>
            <ul>
              <li>Brand Identity</li>
              <li>Interface Design</li>
              <li>Product Final Design</li>
            </ul>
          </div>
          <div className="concept-images">
            <img src={concept1Img} alt="Concept render 1" />
            <img src={concept2Img} alt="Concept render 2" />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-cta">
        <p>Ready when you are</p>
        <h3>RMSHAWKELLY@GMAIL.COM</h3>
      </section>

    </div>
  );
};

export default About;
