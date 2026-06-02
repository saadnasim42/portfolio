export const profile = {
  name: "Saad Nasim Ullah",
  title: "Senior MERN/PHP Full Stack Developer",
  tagline:
    "5+ years building scalable web apps, REST APIs, dashboards, and eCommerce platforms.",
  summary:
    "Strong hands-on experience with MongoDB, Express.js, React.js, Node.js, PHP, Laravel, TypeScript, Next.js, Nest.js, MySQL, PostgreSQL, and AWS.",
  email: "saad.nasim42@gmail.com",
  phone: "+923216662619",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Devsinc",
    period: "Mar 2021 – Present",
    highlights: [
      "Full-stack development with MERN, PHP/Laravel, REST APIs, and modern JavaScript frameworks.",
      "Delivered scalable projects across Healthcare, Education, Rental, E-Commerce, SaaS, and enterprise workflows.",
      "Owned API architecture, frontend/backend modules, code quality, estimation, and client communication in agile teams.",
    ],
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
  },
];

export type Project = {
  name: string;
  stack: string[];
  description: string;
};

export const projects: Project[] = [
  {
    name: "Console Enterprises",
    stack: ["PHP", "Laravel", "React", "Node", "Express", "MySQL", "MongoDB"],
    description:
      "Janitorial service platform with Repository-pattern backend, HR module (attendance, performance, payroll), inventory tracking, and responsive React dashboards.",
  },
  {
    name: "Installmart",
    stack: ["React", "Redux", "Node", "Express", "Laravel", "Stripe", "MySQL"],
    description:
      "Home services eCommerce — migrated AngularJS to React/Redux, Laravel/Node APIs, Stripe payments, and cart flows with Axios integration.",
  },
  {
    name: "The Shade Store",
    stack: ["React", "Node", "Express", "PHP", "PayPal", "Stripe", "AWS"],
    description:
      "Custom eCommerce for window treatments — product customization, checkout, PayPal/Stripe, and optimized responsive storefront.",
  },
  {
    name: "Dascon Towers",
    stack: ["React", "Node", "Express", "Laravel", "MySQL", "Stripe"],
    description:
      "Residential complex sales system — shop/apartment sales tracking, multi-year payment plans, and role-based access control.",
  },
  {
    name: "Letsremotify",
    stack: ["MERN", "Laravel", "MongoDB", "MySQL", "Redis"],
    description:
      "Multi-tenant SaaS with Redis caching, reusable React components, and cross-functional MERN/PHP architecture on Linux/Apache.",
  },
  {
    name: "Honey Bricks",
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
    description:
      "Architected scalable fintech UI with MUI, Stytch auth via Redux, Recoil global state, and Apollo Client for GraphQL.",
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Nest.js",
      "PHP",
      "Laravel",
      "Symfony",
      "CodeIgniter",
      "Shopware",
    ],
  },
  {
    title: "APIs & Cloud",
    skills: ["REST APIs", "GraphQL", "Redux", "AWS"],
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "SQL Server",
      "MariaDB",
      "Firebase",
    ],
  },
  {
    title: "UI & Tools",
    skills: [
      "Material UI",
      "Recoil",
      "DataTables",
      "Jira",
      "ClickUp",
      "GitHub",
      "GitLab",
    ],
  },
];

export const education = {
  school: "University of Gujrat",
  degree: "Bachelor of Computer Science",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
