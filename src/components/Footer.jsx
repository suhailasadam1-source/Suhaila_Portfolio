import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Suhaila — AI &amp; Technology Developer Intern</p>
          <p className="footer__tagline">Building, learning, and growing through technology.</p>
        </div>

        <div className="footer__links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
      <p className="footer__copyright">© {year} Suhaila. All rights reserved.</p>
    </footer>
  );
}
