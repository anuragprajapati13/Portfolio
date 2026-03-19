import React from "react";
import "./Home.css";
import profilePhoto from "../../assets/profile.png";
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  FaPython,
  FaJava,
  FaC,
  FaChartLine,
  FaChartPie,
  FaCubes,
  FaSpider,
  FaGitAlt,
  FaGithub,
  FaCircleCheck,
  FaBrain,
  FaCode,
  FaFileExcel,
  FaChartColumn,
} from "react-icons/fa6";
import {
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMysql,
  SiMongodb,
  SiJupyter,
} from "react-icons/si";
import { TbBinaryTree2, TbChartHistogram, TbChartDots3 } from "react-icons/tb";

function Home() {
  const [cursor, setCursor] = React.useState({ x: 50, y: 50 });
  const [isPaused, setIsPaused] = React.useState(false);

  const outerRingIcons = [
    { name: "Python", Icon: FaPython },
    { name: "Java", Icon: FaJava },
    { name: "C++", Icon: SiCplusplus },
    { name: "C", Icon: FaC },
    { name: "NumPy", Icon: SiNumpy },
    { name: "Pandas", Icon: SiPandas },
    { name: "Matplotlib", Icon: TbChartHistogram },
    { name: "Seaborn", Icon: TbChartDots3 },
  ];

  const middleRingIcons = [
    { name: "Scikit-learn", Icon: SiScikitlearn },
    { name: "Regression", Icon: FaChartLine },
    { name: "Classification", Icon: TbChartDots3 },
    { name: "Model Evaluation", Icon: FaCircleCheck },
    { name: "MySQL", Icon: SiMysql },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Statistics", Icon: FaChartPie },
    { name: "Data Structures & Algorithms", Icon: TbBinaryTree2 },
  ];

  const innerRingIcons = [
    { name: "Object-Oriented Programming", Icon: FaCubes },
    { name: "Jupyter Notebook", Icon: SiJupyter },
    { name: "Spyder", Icon: FaSpider },
    { name: "VS Code", Icon: FaCode },
    { name: "Git", Icon: FaGitAlt },
    { name: "GitHub", Icon: FaGithub },
    { name: "Excel", Icon: FaFileExcel },
    { name: "Power BI", Icon: FaChartColumn },
  ];

  const handleUniverseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setCursor({ x, y });
  };

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".homebadge", {
      y: 30,
      duration: 0.7,
      opacity: 0,
    });
    tl1.from(".line1", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 80,
      duration: 1,
      opacity: 0,
    });
    tl1.from(
      ".homeintro",
      {
        y: 30,
        duration: 0.8,
        opacity: 0,
      },
      "-=0.5",
    );
    tl1.from(
      ".homedivider",
      {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        opacity: 0,
      },
      "-=0.4",
    );
    tl1.from(
      ".homefocus",
      {
        y: 20,
        duration: 0.6,
        opacity: 0,
      },
      "-=0.3",
    );
    gsap.from(".skill-universe", {
      x: 120,
      duration: 1.1,
      opacity: 0,
      ease: "power3.out",
    });
    gsap.from(".ring-node", {
      y: 24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.2,
    });
  });
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <p className="homebadge">CSE Student | Data Analyst</p>
          <div className="line1">Hello, I&apos;M</div>
          <div className="line2">
            <div className="name-with-photo">
              <div className="name-stack">
                <span className="namefirst">Anurag</span>
                <span className="namelast">Prajapati</span>
              </div>
              <div className="profile-frame" aria-hidden="true">
                <span className="profile-glow" />
                <span className="profile-shine" />
                <img
                  className="profile-photo"
                  src={profilePhoto}
                  alt="Anurag Prajapati"
                  loading="eager"
                />
                {/* <span className="profile-status">Open to Work</span> */}
              </div>
            </div>
          </div>
          <div className="line3">
            <span>
              <Typewriter
                words={["DATA SCIENTIST", "DATA ANALYST", "ML ENTHUSIAST"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <p className="homeintro">
            Passionate Data Science student skilled in analyzing data and
            building intelligent models to solve real-world problems.
            <br />
            BTech Computer Science student with a strong interest in Machine
            Learning, Data Analysis, and Visualization. Continuously learning
            new tools and technologies to enhance my data-driven
            problem-solving skills.
          </p>
          <div className="homedivider" />
        </div>
      </div>

      <div className="righthome">
        <div
          className={`skill-universe ${isPaused ? "is-paused" : ""}`}
          onMouseMove={handleUniverseMove}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            "--cursor-x": `${cursor.x}%`,
            "--cursor-y": `${cursor.y}%`,
          }}
        >
          <div className="skill-grid" aria-hidden="true" />
          <div className="cursor-beacon" aria-hidden="true" />
          <div className="orbit-track orbit-track-one" aria-hidden="true">
            {outerRingIcons.map(({ name, Icon }, index) => (
              <div
                key={name}
                className="ring-node ring-node-primary"
                title={name}
                style={{ "--i": index, "--count": outerRingIcons.length }}
              >
                <span className="ring-node-inner">
                  <span className="ring-icon">
                    <Icon />
                  </span>
                  <span className="ring-label">{name}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="orbit-track orbit-track-two" aria-hidden="true">
            {middleRingIcons.map(({ name, Icon }, index) => (
              <div
                key={name}
                className="ring-node ring-node-secondary"
                title={name}
                style={{ "--i": index, "--count": middleRingIcons.length }}
              >
                <span className="ring-node-inner">
                  <span className="ring-icon">
                    <Icon />
                  </span>
                  <span className="ring-label">{name}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="orbit-track orbit-track-three" aria-hidden="true">
            {innerRingIcons.map(({ name, Icon }, index) => (
              <div
                key={name}
                className="ring-node ring-node-tertiary"
                title={name}
                style={{ "--i": index, "--count": innerRingIcons.length }}
              >
                <span className="ring-node-inner">
                  <span className="ring-icon">
                    <Icon />
                  </span>
                  <span className="ring-label">{name}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="skill-core">
            <p className="core-title">Skill Orbit</p>
            <p className="core-subtitle">Programming | Data | ML | Tools</p>
            <span className="core-icon" aria-hidden="true">
              <FaBrain />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
