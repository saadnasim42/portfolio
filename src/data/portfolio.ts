export const profile = {
  name: "Saad Nasim Ullah",
  shortName: "Saad Nasim",
  title: "Senior Full Stack Developer & Software Engineer",
  location: "Pakistan",
  availability: "Open to Remote · Hybrid · Full-time",
  tagline:
    "I build scalable full-stack web applications with React, Next.js, Node.js, PHP/Laravel, and AWS — including REST APIs, eCommerce platforms, and enterprise dashboards.",
  summary:
    "5+ years of production experience across Healthcare, Education, E-Commerce, SaaS, and enterprise workflows. I focus on clean architecture, API design, and shipping maintainable code that scales.",
  email: "saad.nasim42@gmail.com",
  phone: "+923216662619",
  educationLine: "Bachelor of Computer Science · University of Gujrat",
};

export const heroBadges = [
  "Available for Opportunities",
  profile.location,
  "Remote · Hybrid · On-site",
];

export const typingPhrases = [
  "scalable MERN web applications",
  "REST APIs & microservices",
  "eCommerce & payment integrations",
  "enterprise dashboards & SaaS platforms",
];

export const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PHP",
  "Laravel",
  "MongoDB",
  "AWS",
];

export const stats = [
  { value: "5+", label: "Years of Full-Stack Experience" },
  { value: "6+", label: "Production Projects Delivered" },
  { value: "4", label: "Companies & Consulting Roles" },
  { value: "6+", label: "Business Domains Served" },
];

export const targetingRoles = [
  "Senior Full Stack Developer",
  "MERN Stack Developer",
  "PHP/Laravel Developer",
  "React Developer",
  "Node.js Backend Engineer",
  "Software Engineer",
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const aboutCards = [
  {
    title: "Full-Stack Ownership",
    body: "I ship features end-to-end: React/Next.js frontends, Node/Express APIs, Laravel modules, database design, and AWS deployment.",
  },
  {
    title: "MERN & PHP Ecosystems",
    body: "Deep experience across MongoDB, Express, React, Node.js, plus PHP, Laravel, Symfony, and legacy migrations to modern stacks.",
  },
  {
    title: "Production Mindset",
    body: "Agile delivery, Git workflows, payment gateway integrations, auth flows, code reviews, and reliable releases under real deadlines.",
  },
  {
    title: "Domain Experience",
    body: "Healthcare, Education, Rental, E-Commerce, Janitorial ops, Fintech UI, and multi-tenant SaaS — with measurable business impact.",
  },
];

export const glance = [
  { label: "5+ Years", sub: "Production Experience" },
  { label: "BCS", sub: "University of Gujrat" },
  { label: "MERN + PHP", sub: "Primary Stack" },
  { label: "Remote OK", sub: "Global Collaboration" },
  { label: "Stripe", sub: "Payments Integration" },
  { label: "AWS", sub: "Cloud Deployment" },
  { label: "GraphQL", sub: "API Experience" },
  { label: "Agile", sub: "Cross-functional Teams" },
];

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Material UI",
      "Redux",
      "Recoil",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Next.js API Routes",
      "PHP",
      "Laravel",
      "Symfony",
      "REST APIs",
      "GraphQL",
      "Authentication",
      "Payment Gateways",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "DynamoDB",
      "SQL Server",
      "Firebase",
      "Redis",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Linux",
      "Apache",
      "Vercel",
      "CI/CD Concepts",
      "Git",
      "GitHub",
      "GitLab",
      "Environment Config",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      "Jira",
      "ClickUp",
      "VS Code",
      "Postman",
      "DataTables",
      "Shopware",
      "CodeIgniter",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Devsinc",
    period: "Mar 2021 – Present",
    location: "Remote",
    highlights: [
      "Full-stack development with MERN, PHP/Laravel, REST APIs, and modern JavaScript frameworks.",
      "Delivered scalable projects across Healthcare, Education, Rental, E-Commerce, SaaS, and enterprise workflows.",
      "Owned API architecture, frontend/backend modules, code quality, estimation, and client communication in agile teams.",
    ],
    tech: ["React", "Node.js", "Laravel", "MongoDB", "MySQL", "AWS", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "SWE-Bench",
    period: "Jan 2025 – Jun 2025",
    highlights: [
      "Led evaluation and development of software engineering benchmarks.",
      "Specialized in Issue Clarity, Hints, Test-to-Issue Alignment, and Final Verdict criteria.",
      "Implemented and tested platform features for assessing development challenges.",
    ],
    tech: ["Python", "Benchmarking", "Code Review", "Agile"],
  },
  {
    role: "Software Engineer",
    company: "RLgym AI",
    period: "Jul 2025 – Jan 2026",
    highlights: [
      "Developed reinforcement learning environments for evaluating RL algorithms.",
      "Implemented Q-learning, DQN, and PPO for real-world applications.",
      "Built custom benchmarks and collaborated on scalable RL platform design.",
    ],
    tech: ["Python", "RL Algorithms", "Q-learning", "DQN", "PPO"],
  },
  {
    role: "Software Engineer",
    company: "TechBridge Consultancy",
    period: "Jan 2019 – Feb 2021",
    highlights: [
      "Delivered web and mobile projects across the full SDLC.",
      "Built with JavaScript, TypeScript, React, Node, Express, PHP, and Laravel.",
      "Integrated third-party APIs, payment gateways, and authentication flows.",
    ],
    tech: ["React", "Node.js", "Express", "PHP", "Laravel", "REST APIs"],
  },
];

export type Project = {
  name: string;
  category: "fullstack" | "ecommerce" | "saas" | "enterprise";
  featured?: boolean;
  subtitle: string;
  description: string;
  bullets: string[];
  stack: string[];
  metrics?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    name: "Honey Bricks",
    category: "fullstack",
    featured: true,
    subtitle: "Architect-Led Fintech Web Platform",
    description:
      "Scalable fintech product with GraphQL APIs, secure auth, and polished Material UI experience.",
    bullets: [
      "Architected frontend structure for long-term scalability and maintainability.",
      "Stytch-powered authentication with Redux-managed login/logout flows.",
      "Recoil for global state and Apollo Client for GraphQL data fetching.",
      "Material UI design system for responsive, production-grade interfaces.",
    ],
    stack: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Redux",
      "Recoil",
      "MUI",
      "Stytch",
    ],
    metrics: [
      { value: "GraphQL", label: "API Layer" },
      { value: "MUI", label: "Design System" },
      { value: "Stytch", label: "Auth Integration" },
      { value: "Recoil", label: "Global State" },
    ],
  },
  {
    name: "Letsremotify",
    category: "saas",
    subtitle: "Multi-Tenant MERN/PHP SaaS Platform",
    description:
      "Scalable multi-tenant application with Redis caching and cross-stack architecture.",
    bullets: [
      "Engineered MERN/PHP backend on Node, Express, Laravel, MongoDB, and MySQL.",
      "Redis caching reduced response times across high-traffic modules.",
      "Reusable React components integrated with API-driven multi-tenant workflows.",
    ],
    stack: ["MERN", "Laravel", "MongoDB", "MySQL", "Redis", "Linux"],
    metrics: [
      { value: "Redis", label: "Caching Layer" },
      { value: "Multi", label: "Tenant Modules" },
    ],
  },
  {
    name: "Installmart",
    category: "ecommerce",
    subtitle: "Home Services eCommerce Platform",
    description:
      "Full-stack migration from AngularJS to React/Redux with Stripe payments.",
    bullets: [
      "Migrated legacy AngularJS storefront to React with Redux state management.",
      "Laravel/PHP and Node.js APIs powering product catalog and checkout flows.",
      "Stripe integration for secure payments and Redux-powered cart experience.",
    ],
    stack: ["React", "Redux", "Laravel", "Node.js", "Stripe", "MySQL"],
    metrics: [
      { value: "Stripe", label: "Payments" },
      { value: "Redux", label: "Cart & State" },
    ],
  },
  {
    name: "The Shade Store",
    category: "ecommerce",
    subtitle: "Custom Window Treatments eCommerce",
    description:
      "Product customization, checkout, and dual payment gateway integration on AWS.",
    bullets: [
      "React frontend with PHP/Node backend for cart, checkout, and order processing.",
      "PayPal and Stripe payment gateways for reliable transactions.",
      "Optimized listing pages, mobile responsiveness, and cross-browser compatibility.",
    ],
    stack: ["React", "Node.js", "PHP", "PayPal", "Stripe", "AWS"],
  },
  {
    name: "Console Enterprises",
    category: "enterprise",
    subtitle: "Janitorial Operations Management System",
    description:
      "End-to-end admin platform with HR, inventory, and attendance modules.",
    bullets: [
      "Repository-pattern Laravel backend with React dashboards.",
      "HR module: attendance, performance metrics, and payroll processing.",
      "Inventory tracking and staff attendance monitoring for operations teams.",
    ],
    stack: ["Laravel", "React", "Node.js", "MySQL", "MongoDB"],
  },
  {
    name: "Dascon Towers",
    category: "enterprise",
    subtitle: "Residential Sales & Payment Management",
    description:
      "Sales tracking, multi-year payment plans, and role-based access for a residential complex.",
    bullets: [
      "Shop and apartment sales tracking with Laravel/React stack.",
      "Stripe-enabled payment plans over configurable year ranges.",
      "Role management system for permissions and sensitive data access.",
    ],
    stack: ["React", "Laravel", "MySQL", "Stripe"],
  },
];

export const capabilities = [
  {
    title: "React & Next.js",
    category: "Frontend Engineering",
    items: [
      "Component architecture & reusable UI libraries",
      "TypeScript-first development",
      "Redux, Recoil, and Context patterns",
      "Responsive, mobile-first layouts",
      "Tailwind CSS & Material UI",
    ],
  },
  {
    title: "Node.js & APIs",
    category: "Backend Engineering",
    items: [
      "Express.js & Nest.js services",
      "REST API design & integrations",
      "Laravel/PHP module development",
      "Auth, sessions, and payment flows",
      "Third-party API orchestration",
    ],
  },
  {
    title: "Databases",
    category: "Data Layer",
    items: [
      "MySQL, PostgreSQL, MongoDB",
      "Schema design & normalization",
      "Redis caching strategies",
      "Query optimization",
      "Multi-database architectures",
    ],
  },
  {
    title: "eCommerce & Payments",
    category: "Product Delivery",
    items: [
      "Stripe & PayPal integrations",
      "Cart, checkout, and order flows",
      "AngularJS → React migrations",
      "Product customization UIs",
      "AWS-hosted storefronts",
    ],
  },
  {
    title: "Cloud & Deployment",
    category: "Infrastructure",
    items: [
      "AWS services & hosting",
      "Linux/Apache environments",
      "Vercel deployments",
      "Environment configuration",
      "Git-based release workflows",
    ],
  },
  {
    title: "Engineering Practices",
    category: "Team & Process",
    items: [
      "Agile & cross-functional collaboration",
      "Client communication & estimation",
      "Code reviews & quality standards",
      "Documentation & maintainability",
      "End-to-end feature ownership",
    ],
  },
];

export const education = {
  school: "University of Gujrat",
  degree: "Bachelor of Computer Science",
  period: "Computer Science Program",
  location: "Gujrat, Pakistan",
};
