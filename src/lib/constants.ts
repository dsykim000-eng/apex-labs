export const SITE = {
  name: "Apex Labs",
  title: "Apex Labs — AI Product Studio",
  description:
    "I'm Daniel Kim, founder of Apex Labs — an AI product studio. I build, launch, and grow AI-powered products by combining growth expertise with the new wave of AI-native development.",
  email: "daniel@apexlabs.work",
  url: "https://apexlabs.work",
};

export const NAV_LINKS = [
  { label: "Index", href: "#hero" },
  { label: "Info", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const INTRO_TEXT =
  "I'm Daniel Kim, founder of Apex Labs — an AI product studio. I build, launch, and grow AI-powered products by combining growth expertise with the new wave of AI-native development.";

export const ABOUT_BIO = [
  "I build AI-powered products by combining a decade of growth and product experience with a builder's obsession for shipping fast. Having lived and worked across São Paulo, San Francisco, and Seoul, I bring a cross-cultural lens to everything I create — designing for people, not just users.",
  "From concept to launch, I move quickly and iterate relentlessly, turning bold ideas into real products that connect with real audiences. Every project is a chance to push the boundaries of what one person with AI tools and a clear vision can build.",
];

export type Project = {
  name: string;
  category: string;
  year: string;
  image: string;
  description?: string;
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Lovelow",
    category: "Consumer AI",
    year: "2025",
    image: "/images/lovelow-mockup.png",
    description: "AI-powered relationship companion",
  },
];

export type StatData = {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  decimal?: boolean;
  label: string;
};

export const STATS: StatData[] = [
  { value: "1.1M", numericValue: 1.1, suffix: "M", decimal: true, label: "Peak MAU" },
  {
    value: "$1.8M",
    numericValue: 1.8,
    prefix: "$",
    suffix: "M",
    decimal: true,
    label: "Scaled ARR",
  },
  { value: "10+", numericValue: 10, suffix: "+", label: "Years experience" },
];

export const SKILLS = [
  "AI Product Development",
  "Vibe Coding",
  "Growth Marketing",
  "Rapid Prototyping",
  "Product Strategy",
  "Go-to-Market",
  "Market Expansion",
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  { company: "Apex Labs", role: "Founder & CEO", period: "2025 — Now" },
  { company: "Spoon Labs", role: "US Country Manager", period: "2022 — 2024" },
  { company: "LOVO AI", role: "Head of Growth", period: "2020 — 2022" },
  { company: "TeamBlind", role: "Product Lead", period: "2018 — 2020" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", url: "https://instagram.com/" },
  { label: "LinkedIn", url: "https://linkedin.com/in/" },
  { label: "X", url: "https://x.com/" },
];
