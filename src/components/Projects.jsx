import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {title:'Portfolio Website', desc:'React + Vite + framer-motion', link:'#'},
  {title:'ML Classifier', desc:'Image classifier using TensorFlow', link:'#'},
  {title:'Chatbot Agent', desc:'Python + Rasa chatbot', link:'#'},
]

export default function Projects(){
  return (
    <section id="projects" className="section container">
      <h2>Projects</h2>
      <div className="grid" style={{marginTop:12}}>
        {projects.map(p => (
          <div key={p.title} className="project card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:12}}>
              <a className="btn" href={p.link}>View</a>
              <a href={p.link} className="kv"><FaExternalLinkAlt/></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
