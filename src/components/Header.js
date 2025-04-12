import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import '../styles.css';

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hsuasim@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/HassanAsim",
  },
  {
    icon: faLinkedin,
    url: "https://linkedin.com/in/hassan-asim",
  },
];

const Header = () => {
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (headerRef.current) {
        if (currentScrollY > lastScrollY.current) {
          headerRef.current.style.transform = "translateY(-200px)";
        } else {
          headerRef.current.style.transform = "translateY(0)";
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header-content">
        <nav className="header-nav">
          <div className="social-links">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
          </div>
          <div className="nav-links">
            <a href="#projects" onClick={handleClick("projects")}>
              Projects
            </a>
            <a href="#contactme" onClick={handleClick("contactme")}>
              Contact Me
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
