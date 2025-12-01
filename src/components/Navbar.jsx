import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar(){
  return (
    <div className="navbar container">
      <div className="brand">
        <span className="dot" />
        <div>
          Rajeshwari <div className="kv" style={{fontWeight:400}}>AI & DS • Full Stack</div>
        </div>
      </div>

      <div className="navlinks">
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#contact" className="btn">Contact</a>
        <a href="https://www.linkedin.com/in/rajeshwari-b-c-aids-a12774327" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="#" target="_blank" rel="noreferrer"><FaGithub/></a>
      </div>
    </div>
  )
}