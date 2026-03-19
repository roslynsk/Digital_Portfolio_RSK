import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";

import project1Img from "../assets/sentiocopy.png";
import project2Img from "../assets/airbuds.png";
import project3Img from "../assets/Haptix.png";
import culturalProbeImg from "../assets/gardening_pic.png";

import research1Img from "../assets/research_1.png";
import research2Img from "../assets/research_2.png";
import ideation1Img from "../assets/ideation_1.png";
import ideation2Img from "../assets/ideation_2.png";
import ideation3Img from "../assets/ideation_3.png";
import prototyping1Img from "../assets/prototyping_1.png";
import prototyping2Img from "../assets/prototyping_2.png";
import concept1Img from "../assets/concept_1.png";
import concept2Img from "../assets/concept_2.png";
import concept3Img from "../assets/concept_3.png";
import concept4Img from "../assets/concept_4.png";
import app1Img from "../assets/app_1.png";
import earbuds2Img from "../assets/earbuds2.png"
import earbuds3Img from "../assets/earbuds3.png"

const projectData = [
  {
    id: 1,
    title: "Sentio",
    subtitle: "Confidence, connection and control",
    intro: "Over 80% of transplant patients suffer with depression, anxiety or feelings of isolation. Sentio is a smart sensor designed to change the way post-transplant patients live. The device provides early warning signs of organ rejection. The paired app not only gives users real-time access to their organ health but creates a space for connection.",
    images: [
      research1Img,
      research2Img,
      ideation1Img,
      ideation2Img,
      ideation3Img,
      prototyping1Img,
      prototyping2Img,
      concept1Img,
      concept2Img,
      concept3Img,
      concept4Img,
      app1Img,
      project1Img,
    ],
    sections: [
      {
        heading: "Research",
        text: "My research phase included collecting secondary research around transplants. I looked at many medical journals and academic papers to learn about the transplant process and was surprised to find it was mainly about the physical experience of transplantation. Then I reached out to some community organisations to find transplant patients willing to be interviewed. I conducted 10 interviews with post-transplant patients as well as 3 with healthcare professionals.",
      },
      {
        heading: "Analysing the Data",
        text: "I analysed the interview scripts to create a set of design requirements for the project. I also asked some patients to complete a photo diary with given prompts to identify their struggles in everyday life. Some participants also completed a patient diary in which they documented their daily tasks and feelings around those tasks. I was able to use these to inform the design requirements.",
      },
      {
        heading: "Ideation",
        text: "Once I had the design requirements, I began to ideate through sketching and rapid prototyping. I tested some of the prototypes with the participants and got their feedback for future development.",
      },
      {
        heading: "Final Concept",
        text: "I referred back to the stakeholders and pitched each idea to a range of transplant patients. The general consensus was that a sensor that could detect organ rejection in its earliest stages would be most beneficial. Stakeholders also liked the concept of an app that would serve as a community platform. Many patients said this is something they wished they had throughout their transplant journey. They felt having access to an app like this would definitely help them to not feel so isolated.",
      },
    ],
  },
  {
    id: 2,
    title: "Airbuds",
    subtitle: "A reimagined travel-friendly earbud case",
    intro: "Airbuds was a personal side project undertaken to develop my SolidWorks skills through the design of a technical object. The brief I set myself was simple: redesign the AirPods case with the traveller in mind, focusing on practicality, durability and ease of use on the go. I enjoyed doing this project and learning how to use Solidworks and create renderings.",
    images: [project2Img,earbuds2Img,earbuds3Img],
    sections: [],
  },
  {
    id: 3,
    title: "HaptiX",
    subtitle: "Haptic feedback suite collab with Logitech",
    intro: "A haptic feedback suite designed for immersive experiences with Logitech's design team.",
    images: [project3Img],
    sections: [],
  },
  {
    id: 4,
    title: "Gardening Probe",
    subtitle: "Cultural probe research",
    intro: "Designing a cultural probe to dig deeper into the lives of middle-aged gardeners.",
    images: [culturalProbeImg],
    sections: [],
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = Number(id);
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="project-detail">
        <p>Project not found.</p>
        <Link to="/portfolio" className="back-link">← Back to portfolio</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/portfolio" className="back-link">← Back to portfolio</Link>

      <div className="project-detail-layout">

        {/* LEFT — scrolling images */}
        <div className="project-detail-images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="project-detail-img" />
          ))}
        </div>

        {/* RIGHT — sticky text */}
        <div className="project-detail-text">
          <h1>{project.title}</h1>
          <h2>{project.subtitle}</h2>
          <p className="project-intro">{project.intro}</p>

          {project.sections.map((section, index) => (
            <div key={index} className="project-section">
              <h3>{section.heading}</h3>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;