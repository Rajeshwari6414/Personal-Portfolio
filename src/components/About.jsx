import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section container">
      <motion.h2 initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}>About</motion.h2>
      <div className="card" style={{marginTop:10}}>
        <p>I'm a passionate AI & Data Science student focused on building web apps and machine learning projects.  
        Skilled in C, C++, Java, Python, React, SQL, and Data Science tools.</p>
      </div>
    </section>
  )
}
