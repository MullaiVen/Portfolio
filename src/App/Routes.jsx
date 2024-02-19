import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../containers/Header/Header.jsx";
import Sidebar from "../containers/Sidebar/Sidebar.jsx";

import Home from "../containers/Pages/home/home.jsx";
import Skills from "../containers/Pages/skills/skills.jsx";
import Works from "../containers/Pages/works/works.jsx";
import Contact from "../containers/Pages/contact/contact.jsx";
import { ThemeContext } from "../containers/Header/theme.js";

const RoutesComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <Header toggleMenu={toggleMenu} />
        <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Skills />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
};

export default RoutesComponent;
