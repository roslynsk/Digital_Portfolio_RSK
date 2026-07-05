import React, { useState } from "react";
import "./Contact.css";
import SpinningCircle from "./SpinningCircle";

// Web3Forms access key. This value is public-safe (it is sent from the browser).
// See CONTACT_FORM_SETUP.md for how to generate it. The inbox that receives
// submissions is chosen when the key is created (rmshawkelly@gmail.com).
const WEB3FORMS_ACCESS_KEY = "6edc6c1f-78b3-4ea5-8198-bb4dcbfd4025";

type Status = "idle" | "sending" | "success" | "error";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New message from your portfolio contact form");
    formData.append("from_name", "Roslyn Portfolio");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact">
        <h2>Get In Touch</h2>
        <p>Let’s create something meaningful together. Use the form to get in touch!</p>

        {status === "success" ? (
          <p className="form-status success" role="status">
            ✅ Thanks! Your message has been sent — Roslyn will get back to you soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" rows={5} required></textarea>

            {/* Honeypot: hidden from humans, catches spam bots */}
            <input
              type="checkbox"
              name="botcheck"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Submit"}
            </button>

            {status === "error" && (
              <p className="form-status error" role="alert">
                ⚠️ {errorMsg}
              </p>
            )}
          </form>
        )}

        {/* Spinning circle at bottom-right */}
        <div className="circle-bottom-right">
          <SpinningCircle text=" LET'S CONNECT •LET'S CONNECT • LET'S CONNECT • LET'S CONNECT • " size={200} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
