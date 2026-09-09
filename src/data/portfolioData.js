// All content here is sourced directly from Suhaila's resume.
// Replace placeholder links (marked clearly) with real ones when available.

export const profile = {
  name: "Suhaila",
  role: "AI & Technology Developer Intern",
  location: "Dubai, UAE",
  visaStatus: "Valid UAE Resident Visa — No Sponsorship Required",
  email: "suhailasadam1@gmail.com",
  phone: "+971 561014966",
  github: "https://github.com/suhailasadam1-source",
  githubLabel: "github.com/suhailasadam1-source",
  linkedin: "https://linkedin.com/in/suhaila-majeed",
  linkedinLabel: "linkedin.com/in/suhaila-majeed",
  intro:
    "Full-stack focused developer passionate about building responsive web applications, exploring AI-powered solutions, and turning ideas into practical digital experiences.",
  resumePath: "/Suhaila_Resume.pdf",
};

export const about = {
  paragraphs: [
    "I'm a Computer Science graduate with hands-on project experience across React, JavaScript, and Flutter/Dart, plus foundational Python skills. I enjoy building responsive UI components, consuming REST APIs, and integrating JSON data into working products.",
    "I've had early exposure to generative AI tools and prompt engineering through AI-assisted development using GitHub Copilot, Claude, ChatGPT, and Microsoft Copilot Studio — and I'm currently deepening my backend skills (Node.js, Express, MongoDB/MySQL) alongside AI/ML fundamentals including LLMs and RAG/embeddings concepts.",
    "My goal is to keep growing as a developer while contributing to real-world software and AI-driven projects — bringing the same curiosity, documentation habits, and stakeholder communication I built during two years as a Primary Teacher to every team I work with.",
  ],
};

export const skillGroups = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"],
  },
  {
    id: "mobile",
    label: "Mobile",
    skills: ["Flutter", "Dart"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "MySQL / SQL"],
  },
  {
    id: "programming",
    label: "Programming Languages",
    skills: ["Java", "Python (Basic)", "C", "C++"],
  },
  {
    id: "ai",
    label: "AI",
    skills: [
      "Prompt Engineering",
      "Machine Learning Fundamentals",
      "LLM Concepts",
      "RAG / Embeddings Concepts",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "GitHub Copilot",
      "Claude",
      "ChatGPT",
      "Microsoft Copilot Studio",
    ],
  },
];

export const experience = [
  {
    id: "sqrock",
    role: "Frontend Development Intern",
    company: "SQROCK IT Solution",
    period: "September 2026 – October 2026",
    location: "Remote — Alpha 2 Internship Program",
    points: [
      "Building an Android E-Learning app using Java/Kotlin and Firebase",
      "Implementing user authentication",
      "Building course browsing functionality",
      "Building lesson/video tracking",
      "Building a progress dashboard",
      "Integrating REST APIs",
      "Integrating with the app database",
    ],
  },
];

export const projects = [
  {
    id: "movie-app",
    title: "Movie and TV Show Search App",
    year: "2026",
    type: "Self-directed learning project",
    accent: "blue",
    description:
      "A React application that searches movies and TV shows through a live public API, built to practice component architecture and real-world data fetching.",
    technologies: ["React", "JavaScript", "REST API"],
    features: [
      "Debounced search",
      "Loading, empty, and error states",
      "Responsive grid layout",
      "Reusable movie/show card components",
      "State management with hooks",
      "JSON API data fetching and integration",
    ],
    demoLink: null,
    githubLink: null,
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone Website",
    year: "September 2025 – October 2025",
    type: "Self-directed project",
    accent: "cyan",
    description:
      "A responsive Netflix-inspired web application built from scratch and delivered independently end-to-end, with version control used throughout.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Homepage and navigation bar",
      "Hero/banner section",
      "Movie sections",
      "Responsive layout across desktop, tablet, and mobile",
    ],
    demoLink: null,
    githubLink: null,
  },
  {
    id: "taxi-app",
    title: "Taxi Booking App",
    year: "March 2022 – April 2022",
    type: "Final Year Project",
    accent: "purple",
    description:
      "A cross-platform taxi booking app front-end built with Flutter and Dart, developed together with a teammate on reusable UI components.",
    technologies: ["Flutter", "Dart"],
    features: [
      "Login and registration",
      "Booking flow",
      "Payment screen",
      "Trip history",
      "Reusable UI components built with a teammate",
    ],
    demoLink: null,
    demoLabel: "Project details",
    githubLink: null,
  },
];

export const education = {
  degree: "B.Sc. Computer Science",
  institution: "Bharathidasan University",
  period: "2019 – 2022",
  cgpa: "8.74 / 10",
  achievements: ["2nd Rank in Department", "Silver Medal for Outstanding Academic Performance"],
  coursework: ["Machine Learning Fundamentals", "Object-Oriented Programming", "Database Systems"],
};

export const certifications = [
  {
    id: "prompters",
    title: "1 Million Prompters — Prompt Engineering for AI Systems",
    issuer: "Dubai Future Foundation / Dubai Centre for Artificial Intelligence",
    date: null,
  },
  {
    id: "fullstack101",
    title: "Full-Stack Development 101",
    issuer: "Simplilearn",
    date: "August 2026",
  },
];

export const achievements = [
  {
    id: "rank",
    title: "2nd Rank in Department",
    description: "Secured 2nd Rank in the Computer Science department at Bharathidasan University.",
  },
  {
    id: "medal",
    title: "Silver Medal",
    description: "Awarded a Silver Medal for outstanding academic performance.",
  },
  {
    id: "placement",
    title: "Campus Placement",
    description: "Selected through campus placement.",
  },
  {
    id: "teaching",
    title: "2 Years as a Primary Teacher",
    description:
      "Developed presentation, mentoring, documentation, and stakeholder communication skills while teaching.",
  },
];

export const softSkills = [
  "Written and verbal communication",
  "Communication with technical and non-technical stakeholders",
  "Documentation",
  "Analytical thinking",
  "Curiosity",
  "Self-motivation",
  "Collaboration",
  "Adaptability to fast-paced development environments",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
