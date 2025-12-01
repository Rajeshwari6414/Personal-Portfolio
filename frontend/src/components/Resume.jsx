import React, { useState } from "react";
import "./styles.css";

export default function Resume() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section id="resume" className="section resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-actions">
        {/* Preview button */}
        <button className="btn preview-btn" onClick={() => setPreviewOpen(true)}>
          Preview Resume
        </button>

        {/* Download button */}
        <a href="/resume.pdf" download className="btn download-btn">
          Download Resume
        </a>
      </div>

      {previewOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <header className="modal-header">
              <h3>Resume Preview</h3>
              <button className="close-btn" onClick={() => setPreviewOpen(false)}>
                ✕
              </button>
            </header>

            <div className="modal-body">
              <embed src="/resume.pdf" type="application/pdf" className="pdf-embed" />
            </div>

            <footer className="modal-footer">
              <button className="btn secondary" onClick={() => setPreviewOpen(false)}>
                Close
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
}