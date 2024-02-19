import React, { useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import "./Header.css";

const Header = ({ toggleMenu }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.style.setProperty("--bg-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
    } else {
      document.documentElement.style.setProperty("--bg-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="sticky top-0 w-full z-50 flex items-center justify-between p-2 bg-black shadow">
        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="text-xl text-white icon">
            <FaBars />
          </button>
          <a href="/">
            <h1 className="text-xl font-bold font-cinzel text-white icon">
              Mullai
            </h1>
          </a>
        </div>
        <button onClick={toggleTheme} className="text-xl text-white icon">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
