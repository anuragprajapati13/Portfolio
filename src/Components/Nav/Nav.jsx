import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import achievementIcon from "../../assets/leetcode-logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Nav() {
  let menu = useRef();
  let mobile = useRef();

  const closeMobileMenu = () => {
    mobile.current.classList.remove("activeMobile");
    menu.current.classList.remove("activeham");
  };

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0,
    });
    tl.from("nav ul li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
  });
  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className="desktopMenu">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>About</li>
        </Link>
        <Link
          to="education"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Education</li>
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Skills</li>
        </Link>
        <Link
          to="achievements"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Achievement</li>
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Projects</li>
        </Link>
        
        <Link
          to="certificates"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Certificates</li>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <div
        className="hamburger"
        ref={menu}
        onClick={() => {
          mobile.current.classList.toggle("activeMobile");
          menu.current.classList.toggle("activeham");
        }}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <ul className="mobileMenu" ref={mobile}>
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>About</li>
        </Link>
        <Link
          to="education"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Education</li>
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Skills</li>
        </Link>
        <Link
          to="achievements"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Achievement</li>
        </Link>
        <Link
          to="certificates"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Certificates</li>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
