import React from "react";
import Card from "../Card/Card";
import "./Projects.css";
import va from "../../assets/va.png";
import fw from "../../assets/fw.png";
import ise from "../../assets/ise.png";
import br from "../../assets/br.png";
import tti from "../../assets/tti.png";
import cb from "../../assets/cb.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectList = [
    {
      title: "MOODIFY – MOOD BASED MUSIC",
      image: va,
      description:
        "A smart application that analyzes user mood and suggests personalized music and activities to enhance emotional well-being, creating a calming and engaging user experience.",
      techStack: ["React", "Node.js", "OpenAI API", "MongoDB"],
      githubLink: "https://github.com/anuragprajapati13/Moodify",
    },
    {
      title: "AI POWERED SPOTIFY POPULARITY PREDICTOR",
      image: cb,
      description:
        "A machine learning model that predicts Spotify song popularity using audio features and data analysis techniques.",
      techStack: ["Python", "NumPy", "Pandas", "Seaborn"],
      githubLink: "https://github.com/anuragprajapati13/song-popularity-analysis-ml",
    },
    {
      title: "SPOTIFY DATA DASHBOARD",
      image: fw,
      description:
        "An interactive dashboard to visualize Spotify trends, popular tracks, and user listening patterns.",
      techStack: ["Power BI", "Data Visualization", "Data Analysis", "DAX"],
      githubLink: "https://github.com/anuragprajapati13/Spotify-Dashboard",
    },
    {
      title: "OCI Data Analysis & Visualization",
      image: tti,
      description:
        "Demonstrates my ability to analyze data and present meaningful insights through visualizations.",
      techStack: ["Pandas", "Numpy", "SciPy", "Matplotlib"],
      githubLink: "https://github.com/anuragprajapati13/Python-Project",
    },
    {
      title: "Food Distribution Dashboard",
      image: br,
      description:
        "An interactive Excel dashboard that analyzes automated and manual food allocation of rice and wheat across states, districts, and years to uncover trends and improve distribution insights.",
      techStack: ["Excel", "Data Analysis", "Pivot Table"],
      githubLink: "https://github.com/anuragprajapati13/Excel-dashboard-",
    },
  ];

  useGSAP(() => {
    const projectsTimeline = gsap.timeline({
      defaults: {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      scrollTrigger: {
        trigger: "#projects",
        start: "top 78%",
        once: true,
      },
    });

    projectsTimeline.from("#para", {}).from(".slider", { y: 18 }, "-=0.25");
  });
  return (
    <div id="projects">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>
      <div className="slider">
        {projectList.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
