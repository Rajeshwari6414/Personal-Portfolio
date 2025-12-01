// src/utils/theme.js
export function getInitialTheme(){
  if(typeof window === "undefined") return "light";

  const saved = localStorage.getItem("theme");
  if(saved) return saved;

  return (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
          ? "dark"
          : "light";
}

export function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}
