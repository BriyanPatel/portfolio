import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleDownload = () => {
    const fileUrl = "/Briyan_resume.pdf"; // Replace with your file URL
    // Create a new anchor element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Remove 'download' attribute to open the file in a new tab instead of downloading it
    link.target = "_blank"; // Open in a new tab or window

    document.body.appendChild(link); // Append link to body
    link.click(); // Programmatically click the link
    document.body.removeChild(link); // Clean up the DOM
  };
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
        <button className="button-pc" onClick={handleDownload}>View Resume</button>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <button className="button-mobile" onClick={handleDownload}>View Resume</button>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
