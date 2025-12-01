import React, { useEffect, useRef } from "react";
import "./styles.css";

const projectsData = [
  { id: 1, title: "Portfolio Website", desc: "Modern portfolio built using React + Vite with animations.", tech: ["React", "CSS", "Vite"] },
  { id: 2, title: "AI Chatbot", desc: "NLP based chatbot built using Python.", tech: ["Python", "NLP"] },
  { id: 3, title: "E-Commerce UI", desc: "Product listing + cart frontend.", tech: ["React", "Stripe"] },
  { id: 4, title: "Student Result System", desc: "Simple CRUD app.", tech: ["Node.js", "MongoDB"] },
];

export default function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll(".project-card");

    // Apply stagger animation
    cards.forEach((card, index) => {
      card.style.setProperty("--i", `${index * 0.1}s`);

      setTimeout(() => {
        card.classList.add("revealed"); // ensures animation completes
      }, 100 + index * 120);
    });
  }, []);

  return (
    <section id="projects" className="projects-section container">
      <h2>Projects</h2>

      <div ref={gridRef} className="projects-grid">
        {projectsData.map((p, index) => (
          <div
            key={p.id}
            className="project-card"
            style={{ "--i": `${index * 0.1}s` }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div style={{ marginTop: 10 }}>
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>

            <a href="#" className="cta-btn" style={{ marginTop: 14, display: "inline-block" }}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
