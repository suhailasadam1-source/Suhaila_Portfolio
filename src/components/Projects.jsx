import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Projects.css";

function ProjectLink({ href, label, icon: Icon }) {
  if (!href) {
    return (
      <span className="btn btn-outline btn-sm project-card__link is-disabled" aria-disabled="true" title="Add this link in src/data/portfolioData.js">
        <Icon size={16} />
        {label}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm project-card__link">
      <Icon size={16} />
      {label}
    </a>
  );
}

function ProjectCard({ project, index }) {
  const revealRef = useScrollReveal();

  return (
    <article
      className={`project-card card project-card--${project.accent} reveal`}
      ref={revealRef}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-card__visual-tag">{project.technologies[0]}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tech">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <ul className="project-card__features">
          {project.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <ProjectLink href={project.demoLink} label={project.demoLabel || "Live demo"} icon={ExternalLink} />
          <ProjectLink href={project.githubLink} label="GitHub" icon={Github} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headRef = useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">04 — Projects</span>
          <h2>Things I&apos;ve built</h2>
          <p>Self-directed and coursework projects that reflect how I actually learn — by shipping.</p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
