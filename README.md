# Suhaila — Personal Portfolio Website

A modern, responsive personal portfolio built with **React + Vite**, based strictly on Suhaila's resume content. No information was invented — optional/missing details use clearly labeled placeholders.

---

## 1. Folder structure

```
suhaila-portfolio/
├── public/
│   ├── favicon.svg
│   └── PUT_RESUME_HERE.txt      ← delete after adding your real PDF
├── src/
│   ├── components/               One component + one CSS file per section
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Education.jsx / .css
│   │   ├── Certifications.jsx / .css
│   │   ├── Achievements.jsx / .css
│   │   ├── Resume.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── BackToTop.jsx / .css
│   ├── data/
│   │   └── portfolioData.js      All resume content lives here — edit this
│   │                              file to update text anywhere on the site
│   ├── hooks/
│   │   ├── useTheme.js           Light/dark mode toggle
│   │   └── useScrollReveal.js    Scroll-in animation
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 Design tokens + global styles
├── index.html
├── package.json
└── vite.config.js
```


