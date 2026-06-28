// ─── PERSONAL INFO ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Aditi Yadav",
  tagline: "Building products that matter.",
  email: "aditiyadav20022024@gmail.com",
  github: "https://github.com/aditiyadavz",
  linkedin: "https://www.linkedin.com/in/aditi-yadav04/",
  leetcode: "https://leetcode.com/u/aditi_yadavz/",
  gfg: "https://www.geeksforgeeks.org/profile/aditiyadavvqhz",
  location: "India",
  resumeUrl: "/resume.pdf",
  bio: "I'm a 3rd year BTech CSE student with a deep passion for full stack development. I love turning ideas into real products — from clean React interfaces to scalable Node.js backends. Currently preparing hard for 2026 internships and placements.",
};

// ─── ROTATING TITLES ──────────────────────────────────────────────────────────
export const roles = [
  "Full Stack Developer",
  "React Developer",
  "Frontend Engineer",
  "DSA Enthusiast",
  "Future SWE @ Top Companies",
];

// ─── STATS ────────────────────────────────────────────────────────────────────
export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "DSA Problems", value: 200, suffix: "+" },
  { label: "GitHub Commits", value: 500, suffix: "+" },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: "Frontend",
    color: "#6c63ff",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    title: "Backend",
    color: "#00d4ff",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 60 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "#ff6b9d",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
      { name: "Docker (learning)", level: 40 },
      { name: "Linux basics", level: 55 },
    ],
  },
  {
    title: "Currently Learning",
    color: "#ffd93d",
    skills: [
      { name: "System Design", level: 45 },
      { name: "DevOps & CI/CD", level: 40 },
      { name: "TypeScript", level: 50 },
      { name: "AI Integration", level: 55 },
    ],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "AI Interview Platform",
    description:
      "A voice-based mock interview system that generates job role-specific questions, records answers, and provides AI-powered feedback. Includes scorecard, interview history, and performance analytics.",
    tags: ["React", "Node.js", "MongoDB", "AI/NLP", "Express"],
    github: "https://github.com/aditiyadavz/ai-interview-platform",
    live: null,
    featured: true,
    color: "#6c63ff",
    icon: "🎙️",
    status: "Flagship Project",
  },
  {
    id: 2,
    title: "Job Board Platform",
    description:
      "Full-stack job marketplace with separate dashboards for employers and candidates. Features include job filtering, one-click apply, application tracking, and employer analytics.",
    tags: ["Next.js", "Express", "PostgreSQL", "JWT Auth"],
    github: "https://github.com/aditiyadavz/job-board",
    live: null,
    featured: true,
    color: "#00d4ff",
    icon: "💼",
    status: "Full Stack",
  },
  {
    id: 3,
    title: "Alumni Network Portal",
    description:
      "Community platform connecting college students with alumni for mentorship, referrals, and networking. Includes profile pages, connection requests, messaging, and an opportunity feed.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/aditiyadavz/alumni-network",
    live: null,
    featured: true,
    color: "#ff6b9d",
    icon: "🎓",
    status: "Community App",
  },
  {
    id: 4,
    title: "Smart To-Do App",
    description:
      "Feature-rich task manager with categories, priorities, deadlines, and streak tracking. Includes local persistence and a clean, minimal UI.",
    tags: ["React", "LocalStorage", "Tailwind CSS"],
    github: "https://github.com/aditiyadavz/todo-app",
    live: null,
    featured: false,
    color: "#ffd93d",
    icon: "✅",
    status: "UI Project",
  },
];

// ─── TIMELINE ─────────────────────────────────────────────────────────────────
export const timeline = [
  {
    title: "Started Web Development",
    desc: "Began with HTML, CSS, JavaScript. Built my first static websites and fell in love with the web.",
    icon: "🌱",
    color: "#6c63ff",
  },
  {
    title: "Learned React & Node.js",
    desc: "Picked up React.js and started building SPAs. Explored backend with Node.js + Express.",
    icon: "⚛️",
    color: "#00d4ff",
  },
  {
    title: "Built First Full Stack Project",
    desc: "Launched my Job Board platform — first end-to-end full stack app with auth, database, and API.",
    icon: "🚀",
    color: "#ff6b9d",
  },
  {
    title: "Started DSA Seriously",
    desc: "Committed to solving LeetCode daily. Reached 200+ problems, focusing on arrays, trees, and graphs.",
    icon: "🧠",
    color: "#ffd93d",
  },
  {
    title: "AI Interview Platform",
    desc: "Built my most complex project — an AI-powered voice interview system with feedback and analytics.",
    icon: "🎙️",
    color: "#6c63ff",
  },
  {
    title: "Exploring DevOps & AI Tools",
    desc: "Learning Docker, CI/CD, system design. Integrating AI APIs into full stack projects.",
    icon: "⚙️",
    color: "#00d4ff",
  },
  {
    title: "Now Targeting Top Internships and Placements",
    desc: "Actively preparing for on/off campus placements. Building in public, contributing to open source.",
    icon: "🎯",
    color: "#ff6b9d",
  },
];

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const services = [
  {
    icon: "🎨",
    title: "Frontend Development",
    desc: "Beautiful, responsive UIs with React and Tailwind CSS. Pixel-perfect, fast, and accessible.",
    color: "#6c63ff",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "Scalable REST APIs with Node.js, Express, and MongoDB/PostgreSQL. Clean architecture.",
    color: "#00d4ff",
  },
  {
    icon: "📱",
    title: "Responsive Web Apps",
    desc: "Mobile-first, fully responsive web apps that look great on every screen size.",
    color: "#ff6b9d",
  },
  {
    icon: "🤖",
    title: "AI-Powered Features",
    desc: "Integrating AI APIs (OpenAI, Gemini) to build smart, data-driven application features.",
    color: "#ffd93d",
  },
  {
    icon: "🗂️",
    title: "Portfolio Websites",
    desc: "Stunning developer portfolios that impress recruiters and showcase your best work.",
    color: "#6c63ff",
  },
  {
    icon: "🔧",
    title: "DevOps Basics",
    desc: "Docker containerization, GitHub Actions CI/CD, and Vercel/Netlify deployment setup.",
    color: "#00d4ff",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Senior Developer, TechCorp",
    text: "Incredibly sharp for a 3rd year student. Her AI Interview Platform shows real product thinking — not just coding ability.",
    avatar: "PS",
    color: "#6c63ff",
  },
  {
    name: "Rohit Mehta",
    role: "Team Lead, Startup India",
    text: "Clean code, good communication, and finishes what she starts. The Alumni Network project was delivered ahead of schedule.",
    avatar: "RM",
    color: "#00d4ff",
  },
  {
    name: "Ananya Gupta",
    role: "College Senior & SDE at Google",
    text: "I mentored this developer for 3 months. Her growth trajectory in React and system design is exceptional. Highly recommend.",
    avatar: "AG",
    color: "#ff6b9d",
  },
];

// ─── CODING PLATFORMS ─────────────────────────────────────────────────────────
export const codingStats = [
  { platform: "LeetCode", problems: "200+", rank: "Top 30%", color: "#ffa116", icon: "⚡" },
  { platform: "GeeksForGeeks", problems: "150+", rank: "Institute Rank 5", color: "#2f8d46", icon: "🌿" },
  { platform: "GitHub", problems: "500+ commits", rank: "15+ repos", color: "#6c63ff", icon: "🐙" },
];