import React from "react";
import "./About.css";
import cvFile from "../../assets/cv.pdf";
import { FaUserAstronaut } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 78%",
      },
    });

    aboutTimeline
      .from(".about-heading", {
        y: 30,
        duration: 0.6,
        opacity: 0,
      })
      .from(
        ".about-copy p",
        {
          y: 24,
          duration: 0.7,
          opacity: 0,
          stagger: 0.12,
        },
        "-=0.35",
      )
      .from(
        ".about-actions",
        {
          y: 20,
          duration: 0.6,
          opacity: 0,
        },
        "-=0.3",
      )
      .from(
        ".about-feature-card",
        {
          y: 24,
          duration: 0.7,
          opacity: 0,
          scale: 0.96,
          stagger: 0.12,
        },
        "-=0.2",
      );
  });

  return (
    <section id="about">
      <div className="about-shell">
        <div className="about-heading">
          <span className="about-logo" aria-hidden="true">
            <FaUserAstronaut />
          </span>
          <p className="about-eyebrow">About Me</p>
        </div>

        <div className="about-copy">
          <p>
            I am a BTech Computer Science student at Lovely Professional
            University (2023-2027) with a strong interest in extracting insights
            from data and building intelligent, data-driven solutions.
          </p>
          <p>
            My current focus is Data Science and Machine Learning, where I work
            on analyzing datasets, developing predictive models, and creating
            meaningful visualizations using modern tools and technologies.
          </p>
        </div>

        <div className="about-actions">
          <a
            className="about-download-btn"
            href={cvFile}
            target="_blank"
            rel="noreferrer"
          >
            Open CV
          </a>
        </div>

        <div className="about-feature-grid">
          <article className="about-feature-card">
            <div className="about-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3 2.5 8 12 13 21.5 8 12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 10.2V15c0 .8 2.7 3 6 3s6-2.2 6-3v-4.8"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.5 8V14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>BTech CSE</h3>
            <p>Lovely Professional University (2023-2027)</p>
          </article>

          <article className="about-feature-card">
            <div className="about-feature-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 18h10a4 4 0 1 0-.8-7.92A5.5 5.5 0 0 0 5.57 11.5 3.5 3.5 0 0 0 7 18Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Data Analyst</h3>
            <p>Transforming data into insights using machine learning and analytics</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
