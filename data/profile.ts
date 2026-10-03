export interface Project {
  id: string;
  name: string;
  tagline: string;
  text: string;
  tech: string[];
  category: "Full Stack" | "Real-time & AI" | "Backend / Systems" | "Frontend";
  featured?: boolean;
  live?: boolean;
  metrics?: string;
  thumbnail?: string;
  github?: string;
  demo?: string;
}

export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Familiar";
  iconName: string;
  highlight?: boolean;
}

export interface SkillCategory {
  group: string;
  category: "all" | "frontend" | "backend" | "database" | "tools";
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
  techStack: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
  achievements?: string[];
}

export const profile = {
  name: "Muhammad Awais Farooq",
  headline: "Full Stack Developer & AI Software Engineer",
  role: "Full Stack Developer",
  status: "Available for high-impact opportunities",
  location: "Rawalpindi / Islamabad, Pakistan",
  email: "Muhammadawaisfarooq111@gmail.com",
  phone: "+923028124908",
  whatsapp: "https://wa.me/923028124908",
  instagram: "https://www.instagram.com/wasi._.20/",
  facebook: "https://www.facebook.com/M.Awais.020",
  linkedin: "https://linkedin.com/in/muhammad-awais-farooq",
  github: "https://github.com/awaisfarooq",
  avatar: "/profile.png",
  bio: "I architect and craft complete web applications from high-performance React & Next.js user interfaces to ultra-fast FastAPI microservices, real-time WebSockets, and resilient SQL databases. Computer Science specialist focused on building modern AI-driven solutions.",
  stats: [
    { label: "Core Tech Stacks", value: "React & FastAPI", suffix: "" },
    { label: "Production Experience", value: "2+", suffix: "Years" },
    { label: "Completed Projects", value: "10+", suffix: "Apps" },
    { label: "API Response Time", value: "<45", suffix: "ms" },
  ],
  stackHighlights: [
    "React 18 / Next.js",
    "TypeScript",
    "Python / FastAPI",
    "PostgreSQL & Redis",
    "WebSockets & WebRTC",
    "Docker & CI/CD",
  ],
  experience: [
    {
      company: "Product Engineering",
      role: "Full Stack Developer",
      type: "Full-Time",
      location: "On-site / Hybrid",
      period: "June 2025 – Present",
      current: true,
      points: [
        "Architecting modern, responsive front-ends with Next.js, React, and TypeScript delivering sub-second load times.",
        "Developing scalable RESTful APIs with FastAPI and Python, integrating asynchronous background workers and caching.",
        "Engineering real-time communications, user authentication flows with JWT, and role-based access control.",
        "Transforming intricate Figma wireframes into accessible, fluid web applications with micro-interactions.",
        "Collaborating in agile sprints, participating in code reviews, and optimizing continuous integration pipelines on GitHub.",
      ],
      techStack: ["Next.js", "React", "FastAPI", "Python", "TypeScript", "PostgreSQL", "Docker", "Tailwind CSS"],
    },
  ] as ExperienceItem[],
  projects: [
    {
      id: "realtime-chatbot",
      name: "Real-Time AI Chatbot Platform",
      tagline: "Intelligent conversational AI with real-time WebSocket messaging",
      text: "Full-stack AI chatbot platform with real-time WebSocket communication, persistent chat history, user authentication, and seamless multi-session management deployed on Vercel.",
      tech: ["Next.js", "React", "FastAPI", "WebSockets", "PostgreSQL", "JWT", "Vercel"],
      category: "Real-time & AI",
      featured: true,
      live: true,
      metrics: "Real-time WebSocket messaging with <30ms latency",
      thumbnail: "/chatbot.jpg",
      github: "https://github.com/awaisfarooq",
      demo: "https://realtimechatbot-frontend.vercel.app/login",
    },
    {
      id: "pakistan-machinery",
      name: "Pakistan Industrial Machinery Marketplace",
      tagline: "Pakistan's premier B2B industrial & agricultural machinery marketplace",
      text: "Large-scale e-commerce marketplace for buying and selling heavy industrial and agricultural machinery across Pakistan. Features product listings, category filters, real-time search, and PKR pricing.",
      tech: ["Next.js", "React", "FastAPI", "PostgreSQL", "Tailwind CSS", "Vercel"],
      category: "Full Stack",
      featured: true,
      live: true,
      metrics: "Full e-commerce platform with machinery catalog",
      thumbnail: "/machinery.jpg",
      github: "https://github.com/awaisfarooq",
      demo: "https://pakistan-machionary-opbh.vercel.app/",
    },
    {
      id: "tasko-task-management",
      name: "Tasko — Modern Task Management",
      tagline: "Beautiful Kanban-based project & task management system",
      text: "A modern, feature-rich task management application with Kanban boards, priority labels, progress tracking, team collaboration, and real-time updates. Clean and intuitive UI for productive workflows.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
      category: "Full Stack",
      featured: true,
      live: true,
      metrics: "Full Kanban board with real-time collaboration",
      thumbnail: "/tasko.jpg",
      github: "https://github.com/awaisfarooq",
      demo: "https://tasko-modern-task-management-six-beta.vercel.app/",
    },
    {
      id: "realtime-chat",
      name: "Real-Time Calling & Collaboration Platform",
      tagline: "Low-latency WebRTC audio/video calls with instant WebSocket messaging",
      text: "Enterprise-grade real-time collaboration engine supporting peer-to-peer WebRTC video/audio sessions, WebSocket channels with typing indicators, presence detection, Redis pub/sub message brokering, and Celery asynchronous background tasks.",
      tech: ["Next.js", "React", "FastAPI", "WebRTC", "WebSockets", "Redis", "PostgreSQL", "Docker", "Celery"],
      category: "Real-time & AI",
      featured: true,
      metrics: "Sub-30ms socket latency & 4K WebRTC streaming",
      thumbnail: "/chatbot.jpg",
      github: "https://github.com/awaisfarooq",
    },
    {
      id: "ecommerce-management",
      name: "Modern E-Commerce Engine & Inventory Hub",
      tagline: "High-throughput store with RBAC security and analytics",
      text: "Comprehensive commercial platform equipped with encrypted JWT authentication, granular role-based permissions (admin/merchant/customer), transactional inventory locking, SQLAlchemy ORM with SQLite/Postgres, and responsive checkout.",
      tech: ["FastAPI", "React", "SQLAlchemy", "Pydantic", "JWT", "SQLite", "PostgreSQL"],
      category: "Full Stack",
      featured: true,
      metrics: "99.9% uptime with instant token validation",
      thumbnail: "/ecommerce.jpg",
      github: "https://github.com/awaisfarooq",
    },
    {
      id: "university-mgmt",
      name: "Academic Data & University Management Suite",
      tagline: "Relational record management with complex SQL optimization",
      text: "Centralized institutional platform designed for student lifecycle administration, course enrollment rosters, automated grade transcripts, relational schema integrity, and indexed SQL query optimization.",
      tech: ["SQL", "Relational DBMS", "Python", "FastAPI", "Bootstrap", "PostgreSQL"],
      category: "Backend / Systems",
      featured: false,
      metrics: "Optimized complex nested queries for 10k+ records",
      thumbnail: "/university.jpg",
      github: "https://github.com/awaisfarooq",
    },
    {
      id: "car-simulation-game",
      name: "Interactive Arcade Simulator & Physics Engine",
      tagline: "Object-oriented desktop gaming experience with dynamic collision physics",
      text: "High-performance desktop game showcasing deep object-oriented principles, custom physics loops, collision detection mathematics, sprite animation state machines, and responsive input handling.",
      tech: ["Python", "C++", "Pygame", "GUI Graphics", "OOP Algorithms"],
      category: "Backend / Systems",
      featured: false,
      metrics: "Smooth 60 FPS physics loop rendering",
      thumbnail: "/cargame.jpg",
      github: "https://github.com/awaisfarooq",
    },
    {
      id: "modern-shopping-ui",
      name: "SwiftCart Interactive Shopping System",
      tagline: "Dynamic catalog, smart filtering, and persistent cart state",
      text: "Ultra-responsive client-side shopping experience featuring instant search autocomplete, dynamic multi-attribute product filters, local storage session persistence, and frictionless checkout validation.",
      tech: ["HTML5", "Modern CSS3", "JavaScript ES6+", "LocalStorage API", "Responsive UI"],
      category: "Frontend",
      featured: false,
      metrics: "100/100 Lighthouse performance & accessibility",
      thumbnail: "/ecommerce.jpg",
      github: "https://github.com/awaisfarooq",
    },
  ] as Project[],
  skillCategories: [
    {
      group: "Frontend Development",
      category: "frontend",
      items: [
        { name: "React 18", level: "Advanced", iconName: "Code2", highlight: true },
        { name: "Next.js 14", level: "Advanced", iconName: "Layers", highlight: true },
        { name: "TypeScript", level: "Advanced", iconName: "FileCode2", highlight: true },
        { name: "JavaScript (ES6+)", level: "Advanced", iconName: "FileJson" },
        { name: "Tailwind CSS", level: "Advanced", iconName: "Palette", highlight: true },
        { name: "Redux Toolkit", level: "Proficient", iconName: "Cpu" },
        { name: "HTML5 / Semantic UI", level: "Advanced", iconName: "Globe" },
        { name: "CSS3 / Animations", level: "Advanced", iconName: "Sparkles" },
        { name: "Figma to Code", level: "Advanced", iconName: "Palette" },
      ],
    },
    {
      group: "Backend & Systems",
      category: "backend",
      items: [
        { name: "Python 3", level: "Advanced", iconName: "Terminal", highlight: true },
        { name: "FastAPI", level: "Advanced", iconName: "Zap", highlight: true },
        { name: "RESTful API Design", level: "Advanced", iconName: "Network", highlight: true },
        { name: "WebSockets", level: "Advanced", iconName: "Radio", highlight: true },
        { name: "WebRTC Audio/Video", level: "Proficient", iconName: "Video" },
        { name: "JWT & RBAC Security", level: "Advanced", iconName: "ShieldCheck" },
        { name: "SQLAlchemy & Pydantic", level: "Advanced", iconName: "Database" },
        { name: "Java (Core)", level: "Proficient", iconName: "Coffee" },
      ],
    },
    {
      group: "Databases & Caching",
      category: "database",
      items: [
        { name: "PostgreSQL", level: "Advanced", iconName: "Database", highlight: true },
        { name: "Redis Caching", level: "Proficient", iconName: "Gauge", highlight: true },
        { name: "SQLite", level: "Advanced", iconName: "HardDrive" },
        { name: "SQL Query Tuning", level: "Advanced", iconName: "SearchCode" },
        { name: "Data Modeling", level: "Advanced", iconName: "GitMerge" },
      ],
    },
    {
      group: "DevOps & Tooling",
      category: "tools",
      items: [
        { name: "Git & GitHub", level: "Advanced", iconName: "GitBranch", highlight: true },
        { name: "Docker & Containers", level: "Proficient", iconName: "Box", highlight: true },
        { name: "Postman API Testing", level: "Advanced", iconName: "Send" },
        { name: "Celery Task Queue", level: "Proficient", iconName: "Workflow" },
        { name: "Nginx Server", level: "Proficient", iconName: "Server" },
        { name: "Linux / Bash", level: "Proficient", iconName: "Terminal" },
      ],
    },
  ] as SkillCategory[],
  education: [
    {
      school: "Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi",
      degree: "Bachelor of Science in Computer Science (BS CS)",
      period: "2022 – 2026",
      location: "Rawalpindi, Pakistan",
      achievements: [
        "Major focus on Distributed Systems, Advanced Data Structures, Algorithms, and Software Architecture.",
        "Active member of tech symposiums, collaborative open-source sessions, and university software competitions.",
      ],
    },
    {
      school: "Punjab College Hasilpur",
      degree: "Intermediate in Computer Science (ICS)",
      period: "2020 – 2022",
      location: "Hasilpur, Pakistan",
      achievements: [
        "Graduated with Distinction in Mathematics and Computer Foundations.",
        "Built early software utilities and procedural programming foundations in C++.",
      ],
    },
  ] as EducationItem[],
  quickTags: [
    "Full Stack Engineering",
    "FastAPI Microservices",
    "Next.js App Router",
    "Real-time WebSockets",
    "WebRTC Calling",
    "PostgreSQL & Redis",
    "Clean Architecture",
    "AI Integration",
  ],
};
