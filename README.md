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

Almost everything you'd want to edit — text, dates, links — lives in **`src/data/portfolioData.js`**, so you rarely need to touch the components themselves.

---

## 2. Where to put your resume PDF

1. Add your real resume file to the `public/` folder.
2. Name it exactly: **`Suhaila_Resume.pdf`**
3. Final path: `public/Suhaila_Resume.pdf`
4. Delete `public/PUT_RESUME_HERE.txt` — it was just a placeholder note.

The "Download Resume" buttons already point to `/Suhaila_Resume.pdf`, so this works automatically once the file is in place.

---

## 3. Run the project locally

You need [Node.js](https://nodejs.org) (v18 or newer) installed.

```bash
# 1. Move into the project folder
cd suhaila-portfolio

# 2. Install dependencies
npm install

# 3. Start the local dev server
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

To build a production-ready version:

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

---

## 4. Upload to GitHub

```bash
cd suhaila-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/suhailasadam1-source/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-REPO-NAME` with the repository name you create on GitHub (e.g. `suhaila-portfolio`).

---

## 5. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project** and import your `suhaila-portfolio` repository.
3. Vercel auto-detects Vite — keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL like `suhaila-portfolio.vercel.app`.

---

## 6. Deploy on Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **Add new site → Import an existing project** and pick your repo.
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click **Deploy site**.

---

## 7. Screenshots to take for submission

- Full homepage (Hero section) — desktop
- About + Skills section
- Projects section showing all three project cards
- Experience timeline
- Education + Certifications + Achievements
- Contact section with the form
- Mobile view of the Hero section (narrow browser or device emulator)
- Dark mode toggled on

---

## 8. Links to submit

- **GitHub repository:** the URL of the repo you pushed in step 4
- **Live website:** the Vercel or Netlify URL from step 5/6
- **Screenshots:** the images captured in step 7

---

## 9. Placeholders you should replace

The resume didn't include specific project demo/repository URLs, so these are left as clearly disabled "Add link" buttons in the Projects section. Update them in `src/data/portfolioData.js`:

- `projects[].demoLink` — live demo URL for each project
- `projects[].githubLink` — GitHub repository URL for each project

Everything else on the site (name, role, contact details, GitHub/LinkedIn profile links, experience, education, certifications, achievements) comes directly from the resume you provided.
