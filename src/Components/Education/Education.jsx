import React from "react";
import "./Education.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const educationList = [
  {
    degree: "Bachelor Of Technology In Computer Science And Engineering",
    institute: "Lovely Professional University",
    result: "CGPA: 7.06 |   2023 - Present",
  },
  {
    degree: "Intermediate",
    institute: "Narayana Public School",
    result: "Percentage: 65% Feb 2022",
  },
  {
    degree: "Matriculation",
    institute: "Narayana Public School",
    result: "Percentage: 80% March 2020",
  },
];

function Education() {
  useGSAP(() => {
    const educationTimeline = gsap.timeline({
      defaults: {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#education",
        start: "top 78%",
      },
    });

    educationTimeline
      .from(".education-eyebrow", {})
      .from(".education-title", {}, "-=0.35")
      .from(".education-subtitle", {}, "-=0.35")
      .from(".education-card", { stagger: 0.12 }, "-=0.2");
  });

  return (
    <section id="education">
      <div className="education-header">
        <p className="education-eyebrow">EDUCATION</p>
        <h1 className="education-title">
          <span className="education-icon">&#127891;</span>
          <span>My </span>
          <span className="education-title-accent">Education</span>
        </h1>
        <p className="education-subtitle">
          Learning should train the mind to explore ideas, not just collect
          facts.
        </p>
      </div>

      <div className="education-list">
        {educationList.map((item) => (
          <article className="education-card" key={item.degree}>
            <h2>{item.degree}</h2>
            <p className="education-institute">{item.institute}</p>
            <p className="education-result">{item.result}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
