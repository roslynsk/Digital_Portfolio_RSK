import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";

import overflowStoryboard1 from "../assets/storyboard1.png";
import overflowStoryboard2 from "../assets/storybpard2.png";
import overflowDrawing2 from "../assets/drawing2.png";
import overflowDrawing3 from "../assets/drawing3.png";
import overflowDrawing1 from "../assets/drawing1.png";
import overflowFlowDiagram from "../assets/flow_diagram.png";

const blogData = [
  {
    id: 1,
    title: "Overflow",
    subtitle: "An interactive art installation designed as a critique of overconsumption",
    coDesigners: "Grace Clehane and Roisin Mohally",
    intro: "Excessive consumption and production patterns in the fast fashion industry is a serious issue we are currently facing. Roughly 85% of all textiles end up in landfill — the equivalent of one truck load being dumped every second. Humanity currently consumes natural resources 80% faster than the earth can reproduce them. Overflow is an interactive art installation created in response to UN Sustainability Goal 12: responsible consumption and production patterns.",
    images: [
      overflowStoryboard1,
      overflowStoryboard2,
      overflowDrawing2,
      overflowDrawing3,
      overflowDrawing1,
      overflowFlowDiagram,
    ],
    sections: [
      {
        heading: "Technologies",
        text: "A number of technologies would be used together to create this immersive and interactive environment. Motion tracking cameras detect when people enter the exhibition and begin the experience loop. A full projection mapping system including high lumen projectors and software such as TouchDesigner would project visuals of fashion influencers, ads and social media trends across all walls, dynamically responding to user interaction. As participants collect more balls, the videos get faster and louder, making the environment increasingly uncomfortable. Speakers placed discretely around the space play ad sounds and influencer voices, with volume and tempo increasing as the game progresses. Weight sensors inside each basket detect how many balls are collected, feeding data to a central control system. A mechanical suction system attached to the ceiling collects the balls via PVC tubing, with an RGB colour sensor and Arduino-controlled servo flaps sorting them into the correct storage spaces for release in the next round.",
      },
      {
        heading: "Reflection",
        text: "The intention of Overflow is to highlight how demand creates overproduction. It is aligned with UN Sustainable Goal 12 — responsible consumption and production. The visuals represent how overwhelming and constant advertisements are in our lives, and how hugely influential they are in driving overconsumption. The seemingly fun game at the beginning quickly turns into a stressful task, conveying how we buy into trends without realising the impact on the environment. The final silent visual of the landfill drives the point home — these short trends will end up there. This installation compacts an important issue into a tangible and engaging experience that shows participants how our consumption has a real impact.",
      },
    ],
  },
];

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blogId = Number(id);
  const blog = blogData.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="project-detail">
        <p>Post not found.</p>
        <Link to="/gallery" className="back-link">← Back to gallery</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Link to="/gallery" className="back-link">← Back to gallery</Link>

      <div className="project-detail-layout">

        {/* LEFT — scrolling images */}
        <div className="project-detail-images">
          {blog.images.map((img, index) => (
            <img key={index} src={img} alt={`${blog.title} ${index + 1}`} className="project-detail-img" />
          ))}
        </div>

        {/* RIGHT — sticky text */}
        <div className="project-detail-text">
          <h1>{blog.title}</h1>
          <h2>{blog.subtitle}</h2>
          {blog.coDesigners && (
            <p className="project-codesigners">Co-designers: {blog.coDesigners}</p>
          )}
          <p className="project-intro">{blog.intro}</p>

          {blog.sections.map((section, index) => (
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

export default BlogDetail;