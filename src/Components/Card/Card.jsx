import "./card.css";
import { FaGithub } from "react-icons/fa";

function Card({ title, image, description, techStack = [], githubLink }) {
  const hasDetails = Boolean(description) || techStack.length > 0;

  return (
    <div className="card">
      <div className="card-main">
        <h1>{title}</h1>
        <div className="hovercard">
          <img src={image} alt={title} />
        </div>
      </div>
      {hasDetails && (
        <div className="project-description-box">
          {description && <p>{description}</p>}
          {techStack.length > 0 && (
            <div className="tech-stack">
              {techStack.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer" className="github-link-chip">
                  <FaGithub />
                  <span>Link</span>
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
