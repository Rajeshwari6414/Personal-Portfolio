import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="hero container">
      <div className="hero-left card">
        <motion.h1 layout animate={{ x: 0 }} initial={{ x: -10, opacity: 0 }} transition={{duration:0.5}}>
          Hi, I'm Rajeshwari — AI & Data Science Student
        </motion.h1>
        <p>Building full-stack apps, data projects, and intelligent systems. I love converting ideas into code and polished UIs.</p>

        <div className="cta">
          <a className="btn" href="#projects">See Projects</a>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
        </div>
      </div>

      <div className="profile-card card">
        <div className="avatar">RB</div>
        <div style={{marginTop:12}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <div style={{fontWeight:700}}>Rajeshwari B C</div>
              <div className="kv">2nd Year — AI & DS • SVCE</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div className="badge">Open to Internships</div>
            </div>
          </div>
          <div style={{marginTop:12,color:'var(--muted)'}}>Email: 2024ad0334@svce.ac.in</div>
        </div>
      </div>
    </section>
  )
}