import React from "react";
import "./Skills.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  FaCode,
  FaChartLine,
  FaRobot,
  FaDatabase,
  FaBrain,
  FaTools,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaChartBar,
  FaChartArea,
  FaProjectDiagram,
  FaCheckCircle,
  FaCodeBranch,
  FaCubes,
  FaChartPie,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiC,
  SiJupyter,
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMysql,
  SiMongodb,
  SiSpyderide,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    color: "#e06c75",
    skills: ["Python", "Java", "C++", "C"],
  },
  {
    title: "Data Analysis & Visualization",
    icon: FaChartLine,
    color: "#61afef",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    title: "Machine Learning",
    icon: FaRobot,
    color: "#98c379",
    skills: ["Scikit-learn", "Regression", "Classification", "Model Evaluation"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    color: "#e5c07b",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Core Concepts",
    icon: FaBrain,
    color: "#c678dd",
    skills: [
      "Statistics",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    color: "#7ad7ea",
    skills: ["Jupyter Notebook", "Spyder", "VS Code", "Git", "GitHub"],
  },
];

const skillIcons = {
  Python: SiPython,
  "C++": SiCplusplus,
  C: SiC,
  Java: FaJava,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Matplotlib: FaChartBar,
  Seaborn: FaChartArea,
  "Scikit-learn": SiScikitlearn,
  Regression: FaChartLine,
  Classification: FaProjectDiagram,
  "Model Evaluation": FaCheckCircle,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  "Data Structures & Algorithms": FaCodeBranch,
  "Object-Oriented Programming": FaCubes,
  Statistics: FaChartPie,
  Git: FaGitAlt,
  GitHub: FaGithub,
  "VS Code": VscVscode,
  "Jupyter Notebook": SiJupyter,
  Spyder: SiSpyderide,
};

function Skills() {
  useGSAP(() => {
    const skillsTimeline = gsap.timeline({
      defaults: {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#skills",
        start: "top 78%",
      },
    });

    skillsTimeline
      .from(".skills-title", {})
      .from(".skill-category", { stagger: 0.12 }, "-=0.25");
  });

  return (
    <div id="skills">
      <div className="skills-title">
        <div className="skills-title-text">
          <span className="skills-title-accent">My</span>&nbsp;Skills
        </div>
        <div className="skills-title-bar" />
      </div>

      <div className="skills-grid">
        {categories.map((cat) => {
          const CategoryIcon = cat.icon;
          return (
          <div className="skill-category" key={cat.title}>
            <div className="category-header">
              <span className="category-icon" style={{ color: cat.color }}>
                <CategoryIcon aria-hidden="true" />
              </span>
              <h3 className="category-title" style={{ color: cat.color }}>
                {cat.title}
              </h3>
            </div>
            <div className="skill-pills">
              {cat.skills.map((skill) => {
                const PillIcon = skillIcons[skill];
                return (
                  <span
                    className={`skill-pill ${PillIcon ? "has-icon" : "no-icon"}`}
                    key={skill}
                    style={{
                      borderColor: cat.color,
                      boxShadow: `0 0 0 0 ${cat.color}`,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow = `0 0 10px ${cat.color}88`)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow = `0 0 0 0 ${cat.color}`)
                    }
                  >
                    {PillIcon ? (
                      <PillIcon className="skill-pill-icon" aria-hidden="true" />
                    ) : null}
                    <span className="skill-pill-label">{skill}</span>
                  </span>
                );
              })}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
