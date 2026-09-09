import { BadgeCheck } from "lucide-react";
import { certifications } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Certifications.css";

function CertCard({ cert, index }) {
  const revealRef = useScrollReveal();
  return (
    <div className="cert-card card reveal" ref={revealRef} style={{ transitionDelay: `${index * 70}ms` }}>
      <BadgeCheck size={20} className="cert-card__icon" />
      <div>
        <h3>{cert.title}</h3>
        <p className="cert-card__issuer">{cert.issuer}</p>
        {cert.date && <span className="cert-card__date">{cert.date}</span>}
      </div>
    </div>
  );
}

export default function Certifications() {
  const headRef = useScrollReveal();

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">06 — Certifications</span>
          <h2>Continuous learning</h2>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <CertCard cert={cert} index={index} key={cert.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
