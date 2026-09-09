import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Education.css";

export default function Education() {
  const headRef = useScrollReveal();
  const cardRef = useScrollReveal();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">05 — Education</span>
          <h2>Academic foundation</h2>
        </div>

        <div className="education__card card reveal" ref={cardRef}>
          <div className="education__icon">
            <GraduationCap size={22} />
          </div>

          <div className="education__content">
            <div className="education__top">
              <div>
                <h3>{education.degree}</h3>
                <p className="education__institution">{education.institution}</p>
              </div>
              <span className="education__period">{education.period}</span>
            </div>

            <div className="education__stats">
              <div className="education__stat">
                <span className="education__stat-value">{education.cgpa}</span>
                <span className="education__stat-label">CGPA</span>
              </div>
              {education.achievements.map((achievement) => (
                <div className="education__stat" key={achievement}>
                  <span className="education__stat-value education__stat-value--text">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="education__coursework">
              <span className="education__coursework-label">Relevant coursework</span>
              <ul>
                {education.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
