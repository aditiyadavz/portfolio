# 🚀 Dev Portfolio 2026

A world-class, fully responsive developer portfolio built with React + Vite + Tailwind CSS + Framer Motion.

---

## ✨ Features

- Custom animated cursor with ring effect
- Preloader animation
- Scroll progress indicator
- Animated background blobs + grid
- Sticky navbar with active section tracking
- Typewriter effect for rotating roles
- Animated stat counters (About section)
- Skill progress bars with animations
- Premium project cards with glow effects
- Animated vertical timeline (Journey)
- DSA heatmap-style grid (Coding section)
- Service cards with hover effects
- Testimonial cards
- Contact form with toast notifications
- Animated footer with back-to-top
- Fully mobile responsive
- Dark theme throughout

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← Add your resume here!
├── src/
│   ├── components/
│   │   ├── Background.jsx
│   │   ├── CustomCursor.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Preloader.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── SectionWrapper.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Journey.jsx
│   │   ├── Coding.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── index.js        ← All your content lives here!
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 🛠️ Setup Instructions

### 1. Prerequisites
- Node.js v18+ installed
- npm or yarn

### 2. Install dependencies
```bash
cd portfolio
npm install
```

### 3. Personalize your content
Open `src/data/index.js` and update:
- `personalInfo` — your name, email, GitHub, LinkedIn, LeetCode links
- `stats` — your actual project/DSA counts
- `projects` — add your GitHub repo links
- `timeline` — adjust dates to your story
- `codingStats` — your actual platform stats
- `testimonials` — real feedback or remove this section

### 4. Add your resume
Place your resume PDF at `public/resume.pdf`

### 5. Add your profile photo (optional)
Place it at `public/avatar.jpg` and update Hero.jsx to show it

### 6. Run locally
```bash
npm run dev
```
Open http://localhost:5173

---

## 📧 Contact Form Setup

The form is ready — just add your EmailJS credentials:

### Option A: EmailJS (recommended)
1. Go to https://emailjs.com — create free account
2. Create a service + email template
3. In `src/sections/Contact.jsx`, replace the mock timeout with:
```js
import emailjs from '@emailjs/browser';

await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
  'YOUR_PUBLIC_KEY'
);
```

### Option B: Formspree
1. Go to https://formspree.io — create free account
2. Get your form endpoint
3. Change the form action to POST to your Formspree URL

---

## 🚀 Deployment

### Vercel (recommended — free, fast)
```bash
npm install -g vercel
npm run build
vercel
```
Or connect your GitHub repo to https://vercel.com for auto-deploy.

### Netlify
```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 🎨 Customization Tips

### Change accent colors
In `tailwind.config.js`:
```js
accent: "#6c63ff",   // purple — main
accent2: "#00d4ff",  // cyan — secondary
accent3: "#ff6b9d",  // pink — tertiary
```

### Add a new section
1. Create `src/sections/YourSection.jsx`
2. Import and use `SectionWrapper` + `SectionHeader` from `components/SectionWrapper.jsx`
3. Import and add it to `App.jsx`
4. Add a nav link in `components/Navbar.jsx`

### Add live project links
In `src/data/index.js`, update `live:` field in each project from `null` to the URL.

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react + react-dom | Core framework |
| vite + @vitejs/plugin-react | Build tool |
| tailwindcss | Utility CSS |
| framer-motion | Animations |
| react-icons | Icons (FI, HI sets) |
| react-type-animation | Typewriter effect |
| react-intersection-observer | Scroll-triggered animations |
| react-countup | Animated number counters |
| @emailjs/browser | Contact form emails |
| react-hot-toast | Toast notifications |
| @studio-freight/lenis | Smooth scroll (optional) |

---

## 🔥 Performance Tips

- Images: Use WebP format, compress before adding
- Fonts: Already using `display=swap` for non-blocking load
- Lazy load: Add `loading="lazy"` to any `<img>` tags
- Bundle: Run `npm run build` and check bundle size with `npx vite-bundle-visualizer`

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

Custom cursor and floating labels are hidden on mobile automatically.

---

## 💡 What to do next

- [ ] Replace "Your Name" everywhere with your real name
- [ ] Add your GitHub repo URLs in `data/index.js`
- [ ] Drop your `resume.pdf` in the `public/` folder
- [ ] Set up EmailJS for the contact form
- [ ] Deploy to Vercel and share the link!
- [ ] Add the portfolio URL to your LinkedIn and GitHub bio
- [ ] Create a screen recording of AI Interview Platform and embed it

---

Built with ❤️ for getting that internship in 2026.
