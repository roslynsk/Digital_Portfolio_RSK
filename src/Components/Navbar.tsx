import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={close}>roslyn.</Link>

      <button
        className={`nav-toggle ${open ? "is-open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={close}>HOME</Link></li>
        <li><Link to="/portfolio" onClick={close}>PORTFOLIO</Link></li>
        <li><Link to="/about" onClick={close}>ABOUT</Link></li>
        <li><Link to="/gallery" onClick={close}>GALLERY</Link></li>
        <li><Link to="/contact" onClick={close}>CONTACT</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
