import React from "react";
import "./Contact.css";
import SpinningCircle from "./SpinningCircle";

const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h2>Get In Touch</h2>
        <p>Let’s create something meaningful together. Use the form to get in touch!</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows={5} required></textarea>
          <button type="submit">Submit</button>
        </form>

        {/* Spinning circle at bottom-right */}
        <div className="circle-bottom-right">
          <SpinningCircle text=" LET'S CONNECT •LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • " size={200} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
