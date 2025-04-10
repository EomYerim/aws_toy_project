import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-scroll";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 마우스 감지 영역 */}
      <div
        className="sidebar-hover-zone"
        onMouseEnter={() => setIsOpen(true)}
      />
      
      {/* 실제 사이드바 */}
      <div
        className={`sidebar ${isOpen ? "open" : ""}`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <ul>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
          <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
