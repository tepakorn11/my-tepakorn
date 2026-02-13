import "./style.css";

// ===== Data =====

// Skills — AI first
const skills = [
  {
    icon: "🤖",
    name: "AI / LLM",
    desc: "Gemini, Claude, GPT, DeepSeek, Kimi, Perplexity, Openclaw, Manus",
  },
  {
    icon: "⚙️",
    name: "n8n / Automation",
    desc: "Workflow Automation, AI Agent, Cron Job, Opal, Flow",
  },
  {
    icon: "🧠",
    name: "AI Tools",
    desc: "Google AI Studio, NotebookLM, ElevenLabs",
  },
  { icon: "🌐", name: "React / Next.js", desc: "Frontend Web Applications" },
  { icon: "⚡", name: "Node.js / NestJS", desc: "Backend API & Microservices" },
  { icon: "🔧", name: "Express / PHP", desc: "Server-side Development" },
  {
    icon: "🗄️",
    name: "Database",
    desc: "PostgreSQL, MySQL, SQL Server, Firebase, Supabase",
  },
  { icon: "📐", name: "Prisma", desc: "Type-safe ORM & Database Toolkit" },
  { icon: "🐳", name: "Docker", desc: "Containerization & Deployment" },
  { icon: "☁️", name: "Cloud / Deploy", desc: "Vercel, Railway, Cloudflare" },
  { icon: "🔄", name: "Version Control", desc: "GitHub, GitLab, Bitbucket" },
  {
    icon: "🎨",
    name: "UI Frameworks",
    desc: "Tailwind, Ant Design, Bootstrap",
  },
];

// Work Experience
interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  details: string[];
}

const experiences: Experience[] = [
  {
    company: "Legacy Corp Co., Ltd",
    role: "Full Stack Developer",
    period: "May 2023 — Present",
    current: true,
    details: [
      "Design, develop, and maintain Web Applications / Platforms (Frontend + Backend)",
      "Write clean, secure, and scalable code",
      "Design database structures and develop APIs รวมถึง APIs สำหรับ Legacy Verse",
      "Debug, troubleshoot, and optimize system performance",
      "Collaborate with UI/UX, PM, QA เพื่อ deliver solutions ตาม requirements",
      "Research and adopt new technologies เพื่อเพิ่มประสิทธิภาพระบบ",
      "Contribute to system architecture planning",
    ],
  },
  {
    company: "Premier Professional Consulting Co., Ltd.",
    role: "Full Stack Developer (Info SyteLine ERP)",
    period: "May 2022 — April 2023",
    current: false,
    details: [
      "Gathered and analyzed customer requirements, collaborated with dev team",
      "Developed and delivered code ตามความต้องการลูกค้า, on-site support",
      "Utilized Info SyteLine ERP, developed APIs สำหรับ integrate ระบบ",
    ],
  },
  {
    company: "BT Midland Co., Ltd",
    role: "Programmer",
    period: "Jan 2020 — Jan 2021",
    current: false,
    details: [
      "Gathered and analyzed internal user requirements",
      "Transform paper-based processes → digital systems (IT Stock Management, Executive Dashboard)",
      "IT support — troubleshooting and assisting users",
    ],
  },
];

// Education
interface Education {
  degree: string;
  school: string;
  period: string;
  icon: string;
}

const educations: Education[] = [
  {
    degree: "Bachelor of Business Administration — Information Systems",
    school: "Rajamangala University of Technology Krungthep",
    period: "2017 — 2019",
    icon: "🎓",
  },
  {
    degree: "Higher Vocational Certificate — Business Computer",
    school: "Bangna Commercial College",
    period: "2015 — 2017",
    icon: "📚",
  },
  {
    degree: "Vocational Certificate — Business Computer",
    school: "Bangna Commercial College",
    period: "2012 — 2015",
    icon: "📖",
  },
];

// Projects
interface Project {
  title: string;
  desc: string;
  tags: string[];
  emoji: string;
  image?: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "n8n Workflow Automation",
    desc: "ออกแบบและพัฒนาระบบ Workflow Automation ด้วย n8n — รวม AI Agent (OpenAI + Gemini), Intent Classification, LINE Bot Integration, Google Sheets และ Auto-post TikTok พร้อม Remove Watermark Pipeline",
    tags: [
      "n8n",
      "AI Agent",
      "OpenAI",
      "Gemini",
      "LINE API",
      "TikTok",
      "Webhook",
    ],
    emoji: "⚙️",
    image: "./assets/n8n/n8n-01.png",
  },
  {
    title: "Telegram Bots / Openclaw",
    desc: "Smart Money Trading Bot บน Telegram — วิเคราะห์ตลาดคริปโต, เทรด Futures/Spot อัตโนมัติ, แจ้งเตือน ดู Status และ Fees พร้อมระบบ Remove Watermark + Auto Upload TikTok",
    tags: ["Python", "Telegram Bot", "Trading", "n8n", "Crypto", "Openclaw"],
    emoji: "🤖",
    image: "./assets/tele/tele-01.png",
  },
  {
    title: "Billokey",
    desc: "ระบบสร้างเอกสารธุรกิจออนไลน์ (ใบแจ้งหนี้, ใบเสนอราคา) พร้อม PDF Export, Multi-language, SEO Optimized, Rate Limiting & Caching",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Redis", "SEO"],
    emoji: "📄",
    image: "./assets/projects/billokey.jpg",
  },
  {
    title: "AutoPost — Facebook Automation",
    desc: "ระบบ Automation สร้างและโพสต์ Content บน Facebook โดยอัตโนมัติ พร้อม AI-powered Template Engine และ Orchestration Script",
    tags: ["Python", "Facebook API", "Automation", "AI Content"],
    emoji: "📮",
    image: "./assets/autopost/autopost-01.png",
  },
  {
    title: "The Perfect Gift Finder",
    desc: "เว็บแอพ AI-powered ช่วยหาของขวัญให้คนพิเศษ — แค่บอกรายละเอียดและงบประมาณ AI จะแนะนำของขวัญที่เหมาะสมที่สุด พร้อม Multi-language (EN/TH)",
    tags: ["Next.js", "AI", "Generative AI", "Vercel"],
    emoji: "🎁",
    image: "./assets/projects/gift.png",
  },
  {
    title: "GiveMeMoney — Trading Bot",
    desc: "Trading Bot สำหรับตลาดคริปโต พร้อม Strategy Engine, Risk Management, Pine Scripts และ Telegram Notifications",
    tags: ["Python", "Trading", "Pine Script", "Telegram Bot"],
    emoji: "💰",
    image: "./assets/tele/tele-01.png",
  },
  {
    title: "AutoForm (OCR)",
    desc: "ระบบ OCR อัตโนมัติสำหรับอ่านเอกสาร (PAN/WAN) และแปลงเป็นข้อมูลดิจิทัล ด้วย Computer Vision",
    tags: ["Python", "OCR", "Computer Vision", "AI"],
    emoji: "📝",
  },
  {
    title: "CountD With You",
    desc: "เว็บแอพนับถอยหลังสุดน่ารัก พร้อม Supabase Backend และ Real-time Sync",
    tags: ["JavaScript", "Supabase", "Real-time"],
    emoji: "⏳",
    image: "./assets/projects/countd.png",
  },
  {
    title: "POS System",
    desc: "ระบบ Point of Sale สำหรับร้านค้าจริง พร้อม Price Logic, Multi-price Types, Payments และ Reports",
    tags: ["React", "Node.js", "PostgreSQL", "POS"],
    emoji: "🛒",
  },
];

// Gallery images
interface GalleryImage {
  src: string;
  caption: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  // n8n Workflows
  {
    src: "./assets/n8n/n8n-01.png",
    caption: "n8n — LINE Bot + AI Intent Classifier + Google Sheets",
    category: "n8n",
  },
  {
    src: "./assets/n8n/n8n-02.png",
    caption: "n8n — Workflow Node Detail",
    category: "n8n",
  },
  {
    src: "./assets/n8n/n8n-03.png",
    caption: "n8n — AI Agent Pipeline + TikTok Auto Upload",
    category: "n8n",
  },
  {
    src: "./assets/n8n/n8n-04.png",
    caption: "n8n — Full Automation Workflow",
    category: "n8n",
  },
  {
    src: "./assets/n8n/n8n-06.png",
    caption: "n8n — Webhook + Intent Classification Flow",
    category: "n8n",
  },
  // AutoPost
  {
    src: "./assets/autopost/autopost-01.png",
    caption: "AutoPost — Facebook Content (Billokey Promotion)",
    category: "autopost",
  },
  // Telegram Bots
  {
    src: "./assets/tele/tele-01.png",
    caption: "GiveMeMoney — Smart Trading Bot Commands",
    category: "telegram",
  },
  {
    src: "./assets/tele/tele-02.png",
    caption: "Telegram Bot — Trading Interface",
    category: "telegram",
  },
  {
    src: "./assets/tele/tele-03.png",
    caption: "RemoveWatermark Bot — Auto Upload TikTok via n8n",
    category: "telegram",
  },
  {
    src: "./assets/tele/tele-04.png",
    caption: "Telegram Bot — Analysis & Alerts",
    category: "telegram",
  },
];

// ===== Navigation =====
const nav = document.getElementById("nav")!;
const navToggle = document.getElementById("navToggle")!;
const navLinksEl = document.getElementById("navLinks")!;

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

navToggle.addEventListener("click", () => {
  navLinksEl.classList.toggle("open");
});

navLinksEl.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => navLinksEl.classList.remove("open"));
});

// Active link highlight
const sections = document.querySelectorAll(".section, .hero");
const navLinksAll = document.querySelectorAll(".nav-link");

const observerNav = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinksAll.forEach((l) => l.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.3 },
);

sections.forEach((s) => observerNav.observe(s));

// ===== Typing Effect =====
const typingTexts = [
  "AI Engineer",
  "Automation Architect",
  "Full-Stack Developer",
  "n8n Expert",
  "LLM Integrator",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById("typingText")!;

function typeEffect() {
  const current = typingTexts[textIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// ===== Counter Animation =====
const statNumbers = document.querySelectorAll(".stat-number");

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target as HTMLElement;
        const target = parseInt(el.dataset.count || "0");
        animateCounter(el, target);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

statNumbers.forEach((el) => counterObserver.observe(el));

function animateCounter(el: HTMLElement, target: number) {
  let current = 0;
  const duration = 1500;
  const step = target / (duration / 16);

  function update() {
    current += step;
    if (current >= target) {
      el.textContent = target.toString();
      return;
    }
    el.textContent = Math.floor(current).toString();
    requestAnimationFrame(update);
  }
  update();
}

// ===== Render Skills =====
const skillsGrid = document.getElementById("skillsGrid")!;
skills.forEach((skill, i) => {
  const card = document.createElement("div");
  card.className = "skill-card reveal";
  card.style.transitionDelay = `${i * 50}ms`;
  card.innerHTML = `
    <div class="skill-icon">${skill.icon}</div>
    <div class="skill-name">${skill.name}</div>
    <div class="skill-desc">${skill.desc}</div>
  `;
  skillsGrid.appendChild(card);
});

// ===== Render Work Experience (Timeline) =====
const timeline = document.getElementById("timeline")!;
experiences.forEach((exp, i) => {
  const item = document.createElement("div");
  item.className = "timeline-item reveal";
  item.style.transitionDelay = `${i * 150}ms`;
  item.innerHTML = `
    <div class="timeline-marker ${exp.current ? "current" : ""}">
      <div class="timeline-dot"></div>
      <div class="timeline-line"></div>
    </div>
    <div class="timeline-content">
      <div class="timeline-header">
        <div>
          <h3 class="timeline-role">${exp.role}</h3>
          <span class="timeline-company">${exp.company}</span>
        </div>
        <span class="timeline-period ${exp.current ? "current" : ""}">${exp.period}</span>
      </div>
      <ul class="timeline-details">
        ${exp.details.map((d) => `<li>${d}</li>`).join("")}
      </ul>
    </div>
  `;
  timeline.appendChild(item);
});

// ===== Render Education =====
const educationGrid = document.getElementById("educationGrid")!;
educations.forEach((edu, i) => {
  const card = document.createElement("div");
  card.className = "education-card reveal";
  card.style.transitionDelay = `${i * 100}ms`;
  card.innerHTML = `
    <div class="education-icon">${edu.icon}</div>
    <div class="education-body">
      <h3 class="education-degree">${edu.degree}</h3>
      <span class="education-school">${edu.school}</span>
      <span class="education-period">${edu.period}</span>
    </div>
  `;
  educationGrid.appendChild(card);
});

// ===== Render Projects =====
const projectsGrid = document.getElementById("projectsGrid")!;
projects.forEach((proj, i) => {
  const card = document.createElement("div");
  card.className = "project-card reveal";
  card.style.transitionDelay = `${(i % 3) * 100}ms`;

  const thumbContent = proj.image
    ? `<img src="${proj.image}" alt="${proj.title}" onerror="this.parentElement.innerHTML='<div class=\\'project-thumb-placeholder\\'>${proj.emoji}</div>'" />`
    : `<div class="project-thumb-placeholder">${proj.emoji}</div>`;

  card.innerHTML = `
    <div class="project-thumb">${thumbContent}</div>
    <div class="project-body">
      <div class="project-tags">
        ${proj.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      ${
        proj.link || proj.github
          ? `
        <div class="project-links">
          ${proj.link ? `<a href="${proj.link}" target="_blank" class="project-link">🔗 Live Demo</a>` : ""}
          ${proj.github ? `<a href="${proj.github}" target="_blank" class="project-link">📂 GitHub</a>` : ""}
        </div>
      `
          : ""
      }
    </div>
  `;
  projectsGrid.appendChild(card);
});

// ===== Gallery Filter & Render =====
const galleryGrid = document.getElementById("galleryGrid")!;
const filterBtns = document.querySelectorAll(".gallery-filter-btn");

function renderGallery(filter: string) {
  const filtered =
    filter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  galleryGrid.innerHTML = "";

  if (filtered.length === 0) {
    galleryGrid.innerHTML = `
      <div class="gallery-empty">
        <div class="gallery-empty-icon">📸</div>
        <p>ยังไม่มีภาพในหมวดนี้</p>
      </div>
    `;
    return;
  }

  filtered.forEach((img, i) => {
    const item = document.createElement("div");
    item.className = "gallery-item reveal visible";
    item.style.animationDelay = `${i * 80}ms`;
    item.innerHTML = `
      <img src="${img.src}" alt="${img.caption}" loading="lazy" />
      <div class="gallery-item-overlay">
        <span class="gallery-item-label">${img.caption}</span>
      </div>
    `;
    item.addEventListener("click", () => openLightbox(img.src, img.caption));
    galleryGrid.appendChild(item);
  });
}

// Initial render
renderGallery("all");

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = (btn as HTMLElement).dataset.filter || "all";
    renderGallery(filter);
  });
});

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox")!;
const lightboxImg = document.getElementById("lightboxImg") as HTMLImageElement;
const lightboxCaption = document.getElementById("lightboxCaption")!;
const lightboxClose = document.getElementById("lightboxClose")!;

function openLightbox(src: string, caption: string) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ===== Scroll Reveal =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
);

setTimeout(() => {
  document
    .querySelectorAll(".reveal")
    .forEach((el) => revealObserver.observe(el));
}, 100);

// ===== Profile image fallback =====
const profileImg = document.getElementById("profileImg") as HTMLImageElement;
if (profileImg) {
  profileImg.addEventListener("error", () => {
    profileImg.src =
      "data:image/svg+xml," +
      encodeURIComponent(`
      <svg width="300" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#1e1e2a" width="300" height="400"/>
        <text fill="#6c5ce7" x="150" y="200" text-anchor="middle" font-size="60">TK</text>
      </svg>
    `);
  });
}

// ===== Smooth scroll for anchors =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener(
    "click",
    function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute("href")!;
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
  );
});
