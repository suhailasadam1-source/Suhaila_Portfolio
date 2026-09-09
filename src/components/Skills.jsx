import { skillGroups } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Skills.css";

function SkillGroup({ group, index }) {
  const revealRef = useScrollReveal();
  return (
    <div className="skill-group card reveal" ref={revealRef} style={{ transitionDelay: `${index * 60}ms` }}>
      <h3>{group.label}</h3>
      <ul className="skill-group__chips">
        {group.skills.map((skill) => (
          <li key={skill} className="skill-chip">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  const headRef = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">02 — Skills</span>
          <h2>What I build with</h2>
          <p>Grouped by area rather than arbitrary percentages — an honest snapshot of my current toolkit.</p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <SkillGroup group={group} index={index} key={group.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
