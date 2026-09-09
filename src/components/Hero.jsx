import { useEffect, useState } from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import "./Hero.css";

const TERMINAL_LINES = [
  { prompt: "whoami", output: "Suhaila — AI & Technology Developer Intern" },
  { prompt: "cat stack.txt", output: "React · JavaScript · Flutter/Dart · Python" },
  { prompt: "status", output: "Open to internship & junior developer roles" },
];

function useTypedLines(lines, active) {
  const [renderedLines, setRenderedLines] = useState([]);

  useEffect(() => {
    if (!active) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setRenderedLines(lines);
      return;
    }

    let cancelled = false;
    let lineIndex = 0;
    let typer;
    let completionTimer;
    let nextLineTimer;

    function typeLine() {
      if (cancelled || lineIndex >= lines.length) return;
      const target = lines[lineIndex].prompt;
      let charIndex = 0;

      setRenderedLines((prev) => [...prev, { prompt: "", output: null }]);

      typer = setInterval(() => {
        if (cancelled) return;
        charIndex += 1;
        setRenderedLines((prev) => {
          if (!prev[lineIndex]) return prev;
          const next = [...prev];
          next[lineIndex] = { prompt: target.slice(0, charIndex), output: null };
          return next;
        });

        if (charIndex >= target.length) {
          clearInterval(typer);
          completionTimer = setTimeout(() => {
            if (cancelled) return;
            setRenderedLines((prev) => {
              if (!prev[lineIndex]) return prev;
              const next = [...prev];
              next[lineIndex] = { prompt: target, output: lines[lineIndex].output };
              return next;
            });
            lineIndex += 1;
            nextLineTimer = setTimeout(typeLine, 260);
          }, 220);
        }
      }, 34);
    }

    typeLine();
    return () => {
      cancelled = true;
      clearInterval(typer);
      clearTimeout(completionTimer);
      clearTimeout(nextLineTimer);
    };
  }, [active, lines]);

  return renderedLines;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const typedLines = useTypedLines(TERMINAL_LINES, mounted);

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className={`hero__copy ${mounted ? "hero__copy--in" : ""}`}>
          <p className="hero__greeting">Hi, I&apos;m Suhaila</p>
          <h1 className="hero__title">{profile.role}</h1>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View my projects
            </a>
            <a href={profile.resumePath} download className="btn btn-outline">
              Download resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>

          <div className="hero__social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className={`hero__terminal ${mounted ? "hero__terminal--in" : ""}`} aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__title">suhaila@portfolio</span>
            </div>
            <div className="terminal__body">
              {typedLines.map((line, i) => (
                <div className="terminal__line" key={i}>
                  <span className="terminal__prompt">
                    <span className="terminal__prompt-symbol">$</span> {line.prompt}
                    {i === typedLines.length - 1 && line.output === null && (
                      <span className="terminal__cursor" />
                    )}
                  </span>
                  {line.output && <div className="terminal__output">{line.output}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-cue" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
