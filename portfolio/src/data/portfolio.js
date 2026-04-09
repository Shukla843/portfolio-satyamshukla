

// ─── SKILLS DATA ──────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Frontend',
   
    icon: '🎨',
    skills: [
      { name: 'React.js',      color: '#61dafb' },
      { name: 'JavaScript',    color: '#f7df1e' },
      { name: 'TypeScript',    color: '#3178c6' },
      { name: 'HTML5',         color: '#e34f26' },
      { name: 'CSS3',          color: '#1572b6' },
      { name: 'Tailwind CSS',  color: '#06b6d4' },
      { name: 'Redux',         color: '#7c3aed' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',    color: '#68a063' },
      { name: 'Express.js', color: '#aaa' },
      { name: 'REST API',   color: '#cc342d' },
      { name: 'GraphQL',    color: '#e10098' },
      { name: 'JWT Auth',   color: '#00acd7' },
      { name: 'WebSockets', color: '#f5a623' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MongoDB',    color: '#47a248' },
      { name: 'Mongoose',   color: '#00684a' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'Firebase',      color: '#dc382d' },
      { name: 'MySQL',      color: '#f29111' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git',     color: '#f05032' },
      { name: 'GitHub',  color: '#aaa' },
      { name: 'Render',  color: '#2496ed' },
      { name: 'Linux', color: '#f90' },
      { name: 'Vercel',  color: '#aaa' },
      { name: 'Postman', color: '#ff6c37' },
    ],
  },


 {
    title: 'video editing',
   
    icon: '🎨',
    skills: [
      { name: 'capcut',      color: '#61dafb' },
      { name: 'keyframes',    color: '#f7df1e' },
      { name: 'Blender',    color: '#3178c6' },
      { name: 'mask',         color: '#e34f26' },
      { name: 'transitions',          color: '#1572b6' },
      { name: 'color grading',  color: '#06b6d4' },
      { name: 'audio editing',         color: '#7c3aed' },
    ],
  },


  
 {
    title: 'motion graphics',
   
    icon: '🎨',
    skills: [
      { name: 'Alight Motion',      color: '#61dafb' },
      { name: 'Camera',    color: '#f7df1e' },
      { name: 'Animation',    color: '#3178c6' },
      { name: '3D Modeling',         color: '#e34f26' },
      { name: 'transitions',          color: '#1572b6' },
      { name: 'color grading',  color: '#06b6d4' },
      { name: 'NULL',         color: '#7c3aed' },
    ],
  },
  {
    title: 'Generative AI',
   
    icon: '🎨',
    skills: [
      { name: 'python',      color: '#61dafb' },
      { name: 'RAG',    color: '#f7df1e' },
      { name: 'LLM',    color: '#3178c6' },
      { name: 'Prompt Engineering',         color: '#e34f26' },
      { name: 'Fine-tuning',          color: '#1572b6' },
      { name: 'Transformers',  color: '#06b6d4' },
      { name: 'AI Agents',         color: '#7c3aed' },
    ],
  },

{
    title: 'SEO',
   
    icon: '🎨',
    skills: [
      { name: 'Youtube',      color: '#61dafb' },
      { name: 'Instagram',    color: '#f7df1e' },
      { name: 'Google Ads',    color: '#3178c6' },
      { name: 'SEO',         color: '#e34f26' },
      { name: 'content creation',          color: '#1572b6' },
      { name: 'Google Analytics',  color: '#06b6d4' },
      { name: 'Algorithm Optimization',         color: '#7c3aed' },
    ],
  },
]

export const skillBars = [
  { name: 'React.js',             pct: 90 },
  { name: 'JavaScript / TypeScript', pct: 88 },
  { name: 'Node.js / Express',    pct: 85 },
  { name: 'Tailwind CSS',         pct: 87 },
  { name: 'MongoDB',              pct: 82 },
  { name: 'Git & DevOps',         pct: 78 },
]

// ─── PROJECTS DATA ────────────────────────────────────────────────
export const projects = [
  {
    emoji: '📚',
    name: 'Studynotion-tutor-app',
    desc: 'Full-featured tutor app with product management, cart, Razorpay payment gateway, user auth, and admin dashboard.',
    stack: ['React', 'Node.js', 'MongoDB', 'Redux', 'Razorpay'],
    tags: ['MERN', 'Full Stack' , 'payment', 'dashboard'],
    tagColors: ['mern', 'full' ],
    live: 'https://studynotion-q81n-git-main-shukla843s-projects.vercel.app/',
    code: 'https://github.com/Shukla843/studynotion',
    gradient: 'from-accent/10 to-accent2/10',
  },
 
  {
    emoji: '🤖',
    name: 'AI interview preparation - resume-analysis-app',
    desc: 'AI-powered resume analyzer that provides feedback on formatting, content, and keyword optimization to help job seekers improve their resumes.',
    stack: ['React', 'Express', 'MongoDB', 'Tailwind', 'OpenAI API'  ],
    tags: ['MERN', 'AI' ,'OpenAI'],
    tagColors: ['mern'],
    live: 'https://ai-interview-pi-lyart.vercel.app/',
    code: 'https://github.com/Shukla843/AI-Interview',
    gradient: 'from-accent/10 to-accent2/10',
  },
  {
    emoji: '📰',
    name: 'Fake News Detection Platform',
    desc: 'I built an AI-powered fake news detection platform using MERN with real-time analysis, authentication, and dashboard analytics',
    stack: ['Vite', 'Node', 'MongoDB', 'OpenAI API' ,],
    tags: ['REST API', 'Full Stack' , 'OpenAI', 'LLM', 'NLP'],
    tagColors: ['api', 'full'],
    live: 'https://fake-news-detection-teal-two.vercel.app/',
    code: 'https://github.com/Shukla843/Fake-news-detection-',
    gradient: 'from-accent3/10 to-accent/10',
  },
   {
    emoji: '💬',
    name: 'ChatFlow — Real-time Chat App',
    desc: 'Real-time messaging with private & group chats, file sharing, online status, and JWT-secured authentication.',
    stack: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'JWT'],
    tags: ['Real-time', 'Socket.IO'],
    tagColors: ['full', 'api'],
    live: 'https://chat-app-two-tau-38.vercel.app/',
    code: 'https://github.com/Shukla843/ChatApp',
    gradient: 'from-accent2/10 to-accent3/10',
  },
  {
    emoji: '🏥',
    name: 'Inventory-saas - business-inventory-management',
    desc: 'Inventory management SaaS for businesses with product tracking, stock alerts, sales analytics, and multi-user support.',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'JWT'],
    tags: ['MERN' , 'SaaS' , 'Inventory Management'],
    tagColors: ['mern'],
    live: 'https://inventory-saas-roan.vercel.app',
    code: 'https://github.com/Shukla843/Inventory-Saas',
    gradient: 'from-accent2/10 to-accent/10',
  },
  {
    emoji: '💼',
    name: 'Portfolio-satyam-shukla - personal-portfolio',
    desc: 'Personal portfolio website built with React and Tailwind CSS, featuring project showcases, skill bars, and contact form.',
    stack: ['React', 'Tailwind CSS', 'Framer Motion'],
    tags: [ 'Personal Website', 'Animations', 'Responsive Design'],
    tagColors: ['api'],
    live: 'https://portfolio-satyamshukla.vercel.app',
    code: 'https://github.com/Shukla843/portfolio-satyamshukla',
    gradient: 'from-accent/10 to-accent3/10',
  },
]

// ─── CERTIFICATES DATA ────────────────────────────────────────────
export const certificates = [
  { icon: '⚛️', issuer: 'Codehelp ',   name: 'web devlopment ',      date: 'august 2025',   link: 'https://github.com/Shukla843/certificate/blob/main/satyam%20shukla/web%20devlopment%20certificate.jpeg' },
  { icon: '🟢', issuer: 'IIT kharagpur-NPTEL',       name: 'cloud computing',            date: 'october 2025',     link: 'https://github.com/Shukla843/certificate/blob/main/satyam%20shukla/NPTEL%20certificate.jpeg' },
  { icon: '🌿', issuer: 'sheryians coding school', name: 'Relmagine web Devlopment Based National level Hackthon',      date: 'sep 2024',       link: 'https://github.com/Shukla843/certificate/blob/main/satyam%20shukla/Relmagine-Hackthon.jpeg' },
  { icon: '☁️', issuer: 'sheryians coding school',                name: 'C++ . object oriented programming',      date: 'october 2023',    link: 'https://github.com/Shukla843/certificate/blob/main/satyam%20shukla/C%2B%2B%20certificate.jpeg' },
  { icon: '🐙', issuer: 'GitHub · Codehelp',  name: 'Git & GitHub for Developers',            date: 'September 2023', link: 'https://github.com/Shukla843/certificate/blob/main/satyam%20shukla/GitHub%20certificate.jpeg' },
  { icon: '🎯', issuer: 'LeetCode',         name: 'Problem Solving (Intermediate)',         date: 'November 2025',  link: 'https://github.com/Shukla843/certificate/blob/main/satyam%20shukla/Leetcode50day.png' },
]
