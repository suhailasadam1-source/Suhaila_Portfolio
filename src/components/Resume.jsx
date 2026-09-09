import { FileDown } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Resume.css";

export default function Resume() {
  const revealRef = useScrollReveal();

  return (
    <section className="section resume">
      <div className="container">
        <div className="resume__panel reveal" ref={revealRef}>
          <div>
            <h2>Want to know more about my experience?</h2>
            <p>Download my resume to explore my skills, projects, education, and experience.</p>
          </div>
          <a href={profile.resumePath} download className="btn btn-primary">
            <FileDown size={18} />
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
