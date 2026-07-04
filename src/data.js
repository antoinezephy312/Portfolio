// ─────────────────────────────────────────────────────────────────────────────
//  ✏️  EDIT THIS FILE to change your portfolio content.
//  Every word, link, skill and project on the site lives here — no need to
//  touch the components.
// ─────────────────────────────────────────────────────────────────────────────

import mainPortrait from "./img/clarence/main_image.png";
import aboutPhoto from "./img/clarence/d79decc4-0c04-466f-929a-c1ea046bc83e.jpg";
import clarenceAiLogo from "./img/project/clarenceai_logo.jpg";

export const profile = {
  name: "Clarence",
  fullName: "French Clarence Mangigo",
  role: "AI & Chatbot Developer",
  // Rotating roles shown by the typing animation in the hero
  typingRoles: [
    "AI & Chatbot Developer",
    "Cybersecurity Enthusiast",
    "Computer Science Student",
    "Creator of ClarenceAI",
  ],
  tagline:
    "I build AI chatbots for Facebook Messenger — like ClarenceAI — and I'm deep into cybersecurity, from CTF challenges to pentesting. I love turning ideas into smart, secure, and genuinely useful products.",
  location: "Davao City, Philippines",
  email: "frenchmangigo@gmail.com",
  socials: {
    github: "https://github.com/antoinezephy312",
    facebook: "https://www.facebook.com/profile.php?id=100079495600495",
    // Extra links (used on the Contact section)
    facebookSecondary: "https://www.facebook.com/frenchclarence.mangigo.9",
  },
  portrait: mainPortrait,
  aboutPhoto,
};

export const about = {
  heading: "Building AI, and learning to break & secure systems",
  paragraphs: [
    "I'm French Clarence Mangigo — but you can just call me Clarence. I'm a Computer Science student at the University of Mindanao and the owner of ClarenceAI, an AI chatbot that lives right inside Facebook Messenger.",
    "My two passions are AI and cybersecurity. When I'm not designing chatbot conversations, I'm working through CTF challenges, learning penetration testing, and building tools to understand how systems get attacked and defended. I'm also a CSS NCII–certified technician, so I'm just as comfortable with the hardware as I am with the code.",
  ],
  highlights: ["🎓 CS Student @ University of Mindanao", "🛡️ Cybersecurity Enthusiast", "📜 CSS NCII Certified"],
};

export const skillGroups = [
  {
    icon: "🤖",
    title: "AI & Chatbots",
    skills: [
      "Messenger chatbots",
      "Conversational flows",
      "Prompt engineering",
      "AI API integration",
      "NLP basics",
    ],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    skills: [
      "Penetration testing",
      "CTF challenges",
      "Ethical hacking",
      "Tool development",
      "Network security",
    ],
  },
  {
    icon: "💻",
    title: "Development & Systems",
    skills: ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "Computer Systems Servicing"],
  },
];

export const featuredProject = {
  name: "ClarenceAI",
  label: "Flagship project",
  description:
    "My AI chatbot assistant, built for Facebook Messenger. ClarenceAI greets users, understands what they need, and replies with real personality — bringing conversational AI straight into people's DMs.",
  logo: clarenceAiLogo,
  tags: ["AI", "Facebook Messenger", "Chatbot", "Conversational UX"],
  // Add real URLs when they're ready — the buttons appear automatically.
  links: {
    live: "https://www.facebook.com/clarenceai.1", // ClarenceAI's Facebook page
    code: "", // add a GitHub repo link here if you want a "Source code" button
  },
};

export const upcomingProjects = [
  {
    command: "npm run build store",
    title: "E-Commerce Website",
    blurb:
      "A full online store I'm currently building — product browsing, cart, and checkout. Still hunting for the perfect name for it.",
    status: "In development",
  },
  {
    command: "python3 rat.py --lab-only",
    title: "RAT — Offensive Security Tool",
    blurb:
      "A Remote Access Tool I'm developing strictly for Capture The Flag competitions and authorized penetration testing — a hands-on way to learn offensive security and how to defend against it.",
    status: "For CTF & Pentesting",
  },
];

export const journey = [
  {
    period: "2026 — Present",
    title: "BS Computer Science",
    place: "University of Mindanao",
    text: "Currently a college student diving deep into computer science — turning 2nd year this August 2026. Focused on AI development and cybersecurity.",
  },
  {
    period: "Certification",
    title: "CSS NCII Certified",
    place: "Computer Systems Servicing — National Certificate II (TESDA)",
    text: "Nationally certified in Computer Systems Servicing: hardware, networking, and system installation & maintenance.",
  },
  {
    period: "2025",
    title: "TVL – ICT (CSS) Graduate",
    place: "Valencia National High School",
    text: "Graduated Senior High School under the Technical-Vocational-Livelihood track, ICT strand (Computer Systems Servicing) — where my journey in tech began.",
  },
];
