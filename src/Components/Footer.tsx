import React from "react";
import "./Footer.css";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-name">roslyn.</p>
        <p className="footer-rights">
          All Rights Reserved © {new Date().getFullYear()} Roslyn
        </p>
      </div>

      <div className="footer-icons">
        <a
          href="mailto:rmshawkelly@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Roslyn"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/roslyn-shaw-kelly-a8aa82267"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
