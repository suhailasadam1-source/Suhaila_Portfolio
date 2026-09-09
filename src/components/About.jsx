import { about } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./About.css";

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head reveal" ref={revealRef}>
          <span className="section-kicker">01 — About</span>
          <h2>A developer grounded in fundamentals, curious about AI</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="about__facts card">
            <dl>
              <div>
                <dt>Based in</dt>
                <dd>Dubai, UAE</dd>
              </div>
              <div>
                <dt>Work authorization</dt>
                <dd>Valid UAE Resident Visa — no sponsorship required</dd>
              </div>
              <div>
                <dt>Background</dt>
                <dd>B.Sc. Computer Science</dd>
              </div>
              <div>
                <dt>Currently learning</dt>
                <dd>Node.js, Express, MongoDB/MySQL, LLMs &amp; RAG</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
