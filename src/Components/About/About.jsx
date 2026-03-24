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
      .from(".about-heading", { y: 30, duration: 0.6, opacity: 0 })
      .from(".about-copy p", { y: 24, duration: 0.7, opacity: 0, stagger: 0.12 }, "-=0.35")
      .from(".about-actions", { y: 20, duration: 0.6, opacity: 0 }, "-=0.3")
      .from(".about-feature-card", { y: 24, duration: 0.7, opacity: 0, scale: 0.96, stagger: 0.12 }, "-=0.2");
  });

  return (
    <section id="about">
      <div className="about-shell about-futuristic-layout">
        <div className="about-left">
          <div className="about-heading">
            <span className="about-logo" aria-hidden="true">
              <FaUserAstronaut />
            </span>
            <p className="about-eyebrow">About Me</p>
          </div>
          <div className="about-copy">
            <p>
              I'm <b>Anurag Prajapati</b>, a B.Tech Computer Science student at Lovely Professional University (2023–2027) with a strong passion for <b>Data Science, Data Analytics, and Machine Learning</b>.
            </p>
            <p>
              I specialize in working with data to uncover insights and build intelligent solutions. From developing <b>predictive models</b> and <b>REST APIs</b> to creating <b>interactive dashboards</b>, I focus on transforming raw data into meaningful and actionable results.
            </p>
           
            <p>
              I am also trained in <b>Data Structures & Algorithms</b>, with strong problem-solving skills demonstrated through platforms like <b>LeetCode</b>. I aim to build scalable solutions, continuously learn emerging technologies, and leverage data to drive impactful decisions.
            </p>
          </div>
          <div className="about-actions">
            <a className="about-download-btn" href={cvFile} target="_blank" rel="noreferrer">
              Open CV
            </a>
          </div>
        </div>
        <div className="about-right">
          <div className="about-feature-grid futuristic-grid">
            <article className="about-feature-card futuristic-card">
              <div className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#8b5cf6" strokeWidth="2.2"/><path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3>Analytical Thinking</h3>
              <p>Breaks down complex problems and finds logical, data-driven solutions.</p>
            </article>
            <article className="about-feature-card futuristic-card">
              <div className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#38bdf8" strokeWidth="2.2"/><path d="M8 12h8M12 8v8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <h3>Data-Driven</h3>
              <p>Uses data to inform decisions and validate outcomes for every project.</p>
            </article>
            <article className="about-feature-card futuristic-card">
              <div className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="6" stroke="#fbbf24" strokeWidth="2.2"/><path d="M8 16l8-8M8 8h8v8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <h3>Clean Engineering</h3>
              <p>Writes modular, maintainable code and builds robust, scalable systems.</p>
            </article>
            <article className="about-feature-card futuristic-card">
              <div className="about-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2.2"/><path d="M12 8v4l3 3" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/></svg>
              </div>
              <h3>Continuous Learner</h3>
              <p>Embraces new technologies and adapts quickly to evolving challenges.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
