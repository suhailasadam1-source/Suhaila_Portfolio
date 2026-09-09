import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { profile } from "../data/portfolioData.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";
import "./Contact.css";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const headRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="section-kicker">08 — Contact</span>
          <h2>Let&apos;s work together</h2>
          <p>Open to internship and junior developer opportunities in Dubai and remote.</p>
        </div>

        <div className="contact__grid reveal" ref={gridRef}>
          <div className="contact__info card">
            <ul>
              <li>
                <Mail size={18} />
                <div>
                  <span className="contact__label">Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <Phone size={18} />
                <div>
                  <span className="contact__label">Phone</span>
                  <a href={`tel:${profile.phone.replace(/\s+/g, "")}`}>{profile.phone}</a>
                </div>
              </li>
              <li>
                <MapPin size={18} />
                <div>
                  <span className="contact__label">Location</span>
                  <span>{profile.location}</span>
                </div>
              </li>
              <li>
                <Github size={18} />
                <div>
                  <span className="contact__label">GitHub</span>
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    {profile.githubLabel}
                  </a>
                </div>
              </li>
              <li>
                <Linkedin size={18} />
                <div>
                  <span className="contact__label">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    {profile.linkedinLabel}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <form className="contact__form card" onSubmit={handleSubmit}>
            <p className="contact__form-note">
              This form opens your email client with the message pre-filled, since this site has no backend.
            </p>

            <div className="contact__field-row">
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">
              <Send size={16} />
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
