import React, { useState, useEffect } from "react";
import { getInitialTheme, setTheme } from "../utils/theme";

export default function Navbar() {
  const [theme, setThemeState] = useState(getInitialTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* 🌙 Dark / Light Theme Button */}
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "light" ? "" : ""}
      </button>
    </nav>
  );
}
