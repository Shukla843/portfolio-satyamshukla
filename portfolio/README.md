# 🚀 Satyam Shukla — MERN Developer Portfolio

A professional, animated portfolio built with **Vite + React + Tailwind CSS + GSAP + Framer Motion**.

---

## 📦 Tech Stack

| Tool            | Purpose                        |
|-----------------|--------------------------------|
| Vite            | Lightning-fast dev server      |
| React 18        | UI framework                   |
| Tailwind CSS 3  | Utility-first styling          |
| GSAP 3          | Hero & scroll animations       |
| Framer Motion   | Section reveal animations      |
| React Icons     | Icon library                   |
| React Scroll    | Smooth nav scrolling           |

---

## ⚡ Quick Start (VS Code)

### 1. Open project in VS Code
```
File → Open Folder → select satyam-shukla-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start dev server
```bash
npm run dev
```

### 4. Open in browser
```
http://localhost:5173
```

---

## 🏗️ Build for Production
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
satyam-shukla-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Cursor.jsx          ← Custom animated cursor
│   │   ├── Navbar.jsx          ← Sticky responsive navbar
│   │   ├── Hero.jsx            ← GSAP animated hero
│   │   ├── About.jsx           ← Framer Motion about section
│   │   ├── Skills.jsx          ← Skill chips + animated bars
│   │   ├── Projects.jsx        ← Project cards grid
│   │   ├── Certificates.jsx    ← Certificate cards
│   │   ├── Contact.jsx         ← Contact form + links
│   │   └── Footer.jsx          ← Footer
│   ├── data/
│   │   └── portfolio.js        ← ✏️  EDIT YOUR DATA HERE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               ← Global styles + Tailwind
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ How to Customize

### Update your personal info
Edit **`src/data/portfolio.js`** — all projects, skills, and certificates are stored here.

### Update contact links
Edit **`src/components/Contact.jsx`** → change email, LinkedIn, GitHub URLs.

### Add your real photo
Replace the SVG avatar in **`src/components/Hero.jsx`**:
```jsx
// Replace the <svg>...</svg> inside .hero-avatar with:
<img src="/your-photo.jpg" alt="Satyam Shukla" className="w-full h-full object-cover" />
```
Put your photo in the `public/` folder.

### Add project links
In **`src/data/portfolio.js`**, replace `live: '#'` and `code: '#'` with real URLs.

---

## 🎨 Color Palette

| Variable   | Color     | Usage              |
|------------|-----------|--------------------|
| `accent`   | `#00e5ff` | Cyan highlights    |
| `accent2`  | `#7b2fff` | Violet gradients   |
| `accent3`  | `#ff3c6e` | Pink accents       |
| `bg`       | `#0a0a0f` | Main background    |
| `muted`    | `#6b6b8a` | Subtle text        |

Change colors in **`tailwind.config.js`** under `theme.extend.colors`.

---

## 🚀 Deploy to Vercel (Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Framework: **Vite** (auto-detected)
4. Click **Deploy** ✅

---

Built with ❤️ for **Satyam Shukla** | SIRT Bhopal
