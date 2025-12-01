import React from "react";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-name">Hi, I'm Rajeshwari B C</h1>
          <p className="hero-sub">AI & DS Student | Full Stack Developer | React | Node.js</p>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="btn primary">See My Work</a>
        </div>
      </div>
    </section>
  );
}
