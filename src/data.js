// ─────────────────────────────────────────────────────────────────────────────
//  Edit this file to change portfolio content — copy, links, skills, projects.
//  The components read from here; you shouldn't need to touch them.
// ─────────────────────────────────────────────────────────────────────────────

import mainPortrait from "./img/clarence/main_image.png";
import aboutPhoto from "./img/clarence/d79decc4-0c04-466f-929a-c1ea046bc83e.jpg";
import clarenceAiLogo from "./img/project/clarenceai_logo.jpg";

export const profile = {
  name: "Clarence",
  fullName: "French Clarence Mangigo",
  role: "AI & Chatbot Developer",
  status: "Open to freelance & collaboration",
  // Phrases the hero types out one after another, on loop.
  roles: [
    "AI & chatbot developer",
    "security enthusiast",
    "CTF player",
    "CS student @ UMindanao",
  ],
  tagline:
    "I build conversational AI for Facebook Messenger and spend my free time on security — CTFs, pentesting, and writing my own tooling. Currently studying Computer Science at the University of Mindanao.",
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

// Honest "at a glance" facts for the hero strip — real credentials, not
// invented vanity metrics.
export const stats = [
  { icon: "bot", value: "ClarenceAI", label: "Live Messenger bot" },
  { icon: "shield", value: "CTF & Pentest", label: "Security focus" },
  { icon: "terminal", value: "React · JS", label: "Front-end builds" },
  { icon: "certificate", value: "CSS NC II", label: "TESDA certified" },
];

export const about = {
  heading: "A CS student splitting his time between AI and security.",
  paragraphs: [
    "I'm French Clarence Mangigo — Clarence for short. I'm a Computer Science student at the University of Mindanao, and I build and run ClarenceAI, a chatbot that lives inside Facebook Messenger.",
    "Most of my time goes into two things: building AI assistants and learning how systems get attacked and defended. When I'm not working on chatbot flows, I'm doing CTF challenges, reading up on penetration testing, and writing small tools to understand offensive security first-hand.",
    "I'm also CSS NCII–certified, so I'm comfortable with the hardware and networking side as much as the code.",
  ],
  highlights: ["CS @ University of Mindanao", "CSS NCII certified", "Davao City, PH"],
};

export const skillGroups = [
  {
    icon: "bot",
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
    icon: "shield",
    title: "Security",
    skills: [
      "Penetration testing",
      "CTF challenges",
      "Ethical hacking",
      "Tool development",
      "Network security",
    ],
  },
  {
    icon: "terminal",
    title: "Development",
    skills: ["HTML & CSS", "JavaScript", "React", "Git & GitHub", "Computer systems servicing"],
  },
];

export const featuredProject = {
  name: "ClarenceAI",
  label: "// featured",
  description:
    "An AI assistant that runs inside Facebook Messenger. It handles greetings, works out what people are asking, and replies in a natural, conversational way. Built and maintained solo.",
  logo: clarenceAiLogo,
  tags: ["AI", "Messenger", "Chatbot", "Conversational UX"],
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
      "A full online store — product browsing, cart, and checkout. Currently in progress; still settling on a name.",
    status: "in dev",
  },
  {
    command: "python3 rat.py --lab-only",
    title: "RAT — offensive security tool",
    blurb:
      "A remote access tool I'm building strictly for Capture The Flag and authorized pentesting — a hands-on way to learn offensive tradecraft and how to defend against it.",
    status: "lab only",
  },
];

export const journey = [
  {
    period: "2026 — present",
    title: "BS Computer Science",
    place: "University of Mindanao",
    text: "Studying computer science, focused on AI development and security. Moving into 2nd year this August 2026.",
  },
  {
    period: "certification",
    title: "CSS NCII Certified",
    place: "Computer Systems Servicing — National Certificate II (TESDA)",
    text: "Nationally certified in computer systems servicing: hardware, networking, and system installation and maintenance.",
  },
  {
    period: "2025",
    title: "TVL – ICT (CSS) Graduate",
    place: "Valencia National High School",
    text: "Graduated senior high under the Technical-Vocational-Livelihood track, ICT strand (Computer Systems Servicing) — where the tech started for me.",
  },
];
