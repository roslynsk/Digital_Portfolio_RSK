import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <p>Let’s create something meaningful together. Use the form to get in touch!</p>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows={5} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
