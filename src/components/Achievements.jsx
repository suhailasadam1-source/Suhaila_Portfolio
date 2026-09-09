import { Trophy, Medal, Briefcase, Users } from "lucide-react";
import { achievements } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Achievements.css";

const ICONS = {
  rank: Trophy,
  medal: Medal,
  placement: Briefcase,
  teaching: Users,
};

function AchievementCard({ item, index }) {
  const revealRef = useScrollReveal();
  const Icon = ICONS[item.id] || Trophy;

  return (
    <div className="achievement-card card reveal" ref={revealRef} style={{ transitionDelay: `${index * 60}ms` }}>
      <div className="achievement-card__icon">
        <Icon size={20} />
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

export default function Achievements() {
  const headRef = useScrollReveal();

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">07 — Achievements</span>
          <h2>Milestones along the way</h2>
        </div>

        <div className="achievements__grid">
          {achievements.map((item, index) => (
            <AchievementCard item={item} index={index} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
