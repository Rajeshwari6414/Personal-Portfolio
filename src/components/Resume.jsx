import React from 'react';

export default function Resume() {
  return (
    <section id="resume" className="section container">
      <h2>Resume / Experience</h2>

      {/* ⭐ Download Resume Button */}
      <a 
        href="/resume.pdf" 
        download="Rajeshwari_BC_Resume.pdf"
        className="download-btn"
      >
        Download My Resume
      </a>

      <div className="card" style={{ marginTop: 12 }}>
        <h3>Education</h3>
        <p className="kv">
          B.Tech – AI & DS, Sri Venkateswara College of Engineering (SVCE)
        </p>

        <h3 style={{ marginTop: 12 }}>Achievements</h3>
        <ul>
          <li className="kv">Built a full-stack portfolio with React + Node.</li>
          <li className="kv">Completed certifications in Python, AI, C Programming.</li>
        </ul>
      </div>
    </section>
  );
}