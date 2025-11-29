import { useState, useEffect } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem("savedTheme") || "standard");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("savedTheme", theme);
  }, [theme]);

  return (
    <div className="flexrow-container">
      <div className="theme-selector standard-theme" onClick={() => setTheme("standard")}></div>
      <div className="theme-selector light-theme" onClick={() => setTheme("light")}></div>
      <div className="theme-selector darker-theme" onClick={() => setTheme("darker")}></div>
    </div>
  );
}

export default ThemeSwitcher;
