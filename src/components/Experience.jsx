import { experience } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Experience.css";

function TimelineItem({ item }) {
  const revealRef = useScrollReveal();
  return (
    <li className="timeline__item reveal" ref={revealRef}>
      <span className="timeline__dot" aria-hidden="true" />
      <div className="timeline__card card">
        <div className="timeline__meta">
          <span className="timeline__period">{item.period}</span>
          <span className="timeline__location">{item.location}</span>
        </div>
        <h3>{item.role}</h3>
        <p className="timeline__company">{item.company}</p>
        <ul className="timeline__points">
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Experience() {
  const headRef = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">03 — Experience</span>
          <h2>Where I&apos;ve worked</h2>
        </div>

        <ol className="timeline">
          {experience.map((item) => (
            <TimelineItem item={item} key={item.id} />
          ))}
        </ol>
      </div>
    </section>
  );
}
