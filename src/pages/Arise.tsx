import React from "react";
import "./Arise.css";



const Arise: React.FC = () => {
  return (
    <div className="project-detail">

      {/* PROJECT VIDEO HERO */}
<section className="arise-video">

  <iframe
    src="https://player.vimeo.com/video/1193285939?autoplay=1&muted=1&loop=1"
    title="ARISE Project"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  />

</section>


{/* TITLE */}
<section className="arise-header">

  <p className="arise-eyebrow">
    CURRENT PROJECT
  </p>

  <h1>
    ARISE
  </h1>

  <h2>
    Activity and Recreation in an Inclusive Sensory Environment
  </h2>

  <p>
    Research & Design Assistant | University of Limerick × Limerick City & County Council
  </p>

</section>

      {/* Overview */}
      <section className="project-section">
        <h2>Project Overview</h2>

        <p>
          ARISE (Activity and Recreation in an Inclusive Sensory Environment)
          is a collaborative research project that aims to create an inclusive
          outdoor activity and recreation space in Limerick for older adults,
          autistic young adults, people with disabilities, and the wider
          community.
        </p>

        <p>
          The project brings together researchers, healthcare professionals,
          designers, community organisations and Limerick City & County Council
          to co-design a public space that encourages physical activity, social
          connection and wellbeing through inclusive design.
        </p>
      </section>

      {/* My Role */}
      <section className="project-section">
        <h2>My Role</h2>

        <p>
          As a Research & Design Assistant, I work within a varied
          design team supporting the research and development of the park from
          early user research through to concept development.
        </p>

        <div className="skills-grid">
          <div className="skill-card">User Interviews</div>
          <div className="skill-card">Focus Groups</div>
          <div className="skill-card">Co-design Workshops</div>
          <div className="skill-card">Qualitative Analysis</div>
          <div className="skill-card">Inclusive Design</div>
          <div className="skill-card">Stakeholder Engagement</div>
        </div>
      </section>

      {/* Contributions */}
      <section className="project-section">
        <h2>Key Contributions</h2>

        <ul className="project-list">
          <li>
            Conducted user interviews with project stakeholders to understand
            experiences, needs and priorities for an inclusive outdoor space.
          </li>

          <li>
            Facilitated focus groups and participatory co-design workshops with
            community members and partner organisations.
          </li>

          <li>
            Performed qualitative data analysis to identify key design themes
            and user requirements.
          </li>

          <li>
            Collaborated with researchers, designers and landscape architects
            to translate research findings into the developing park layout.
          </li>

          <li>
            Will support the iterative design process by conducting further stakeholder
            consultation and design refinement.
          </li>
        </ul>
      </section>

      {/* Design Process */}
      <section className="project-section">
        <h2>Design Process</h2>

        <div className="process-flow">

          <div className="process-step">
            <h3>01</h3>
            <p>Stakeholder Interviews</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-step">
            <h3>02</h3>
            <p>Focus Groups</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-step">
            <h3>03</h3>
            <p>Co-design Workshops</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-step">
            <h3>04</h3>
            <p>Data Analysis</p>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-step">
            <h3>05</h3>
            <p>Park Layout Development</p>
          </div>

        </div>
      </section>

      {/* Current Phase */}
      <section className="project-section">
        <h2>Current Design Phase</h2>

        <p>
          The project is currently in the spatial design stage.
          Working alongside the project team and landscape architects from
          Limerick City & County Council, I am helping to develop the proposed
          park layout using insights gathered from interviews, focus groups and
          co-design workshops.
        </p>

        <p>
          The next phase will involve further community engagement to evaluate,
          refine and validate the design before progressing towards
          implementation with the council.
        </p>
      </section>

      

      {/* Reflection */}
      <section className="project-section">
        <h2>Reflection</h2>

        <p>
          Working on ARISE has strengthened my skills in participatory design,
          qualitative research, stakeholder engagement and collaboration.
            It has also provided valuable experience translating
          user insights into practical design decisions for a real-world public
          space that aims to improve accessibility and community wellbeing.
        </p>
      </section>

    </div>
  );
};

export default Arise;