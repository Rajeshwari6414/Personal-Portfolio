import React from "react";
import "./styles.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button className="btn" type="submit">Send</button>
      </form>
    </section>
  );
}
