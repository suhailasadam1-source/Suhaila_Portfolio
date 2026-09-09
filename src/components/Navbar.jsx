import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { navLinks, profile } from "../data/portfolioData.js";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={handleLinkClick}>
          <span className="navbar__logo-bracket">&lt;</span>
          {profile.name}
          <span className="navbar__logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className="navbar__hamburger"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__links--mobile ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
