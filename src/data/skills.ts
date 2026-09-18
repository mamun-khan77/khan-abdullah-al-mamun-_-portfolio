import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "development",
    name: "Engineering & Development",
    description: "Core programming languages, frameworks, and web technologies I build with daily.",
    skills: [
      { name: "Programming", highlight: true },
      { name: "Web Development", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "React", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "HTML5", highlight: false },
      { name: "CSS3 / Tailwind", highlight: false },
      { name: "TypeScript", highlight: true },
      { name: "Git & GitHub", highlight: false },
    ],
  },
  {
    id: "design",
    name: "Design & Product",
    description: "Creating accessible, intuitive design systems and engaging user interfaces.",
    skills: [
      { name: "UI/UX Design", highlight: true },
      { name: "Figma", highlight: true },
      { name: "Responsive Design", highlight: true },
      { name: "Visual Design & Layout", highlight: false },
      { name: "Wireframing & Prototyping", highlight: false },
      { name: "Design Tokens", highlight: false },
    ],
  },
  {
    id: "productivity",
    name: "Productivity & Documentation",
    description: "Tools for business documentation, presentations, and technical communication.",
    skills: [
      { name: "Microsoft Word", highlight: false },
      { name: "Microsoft PowerPoint", highlight: false },
      { name: "Technical Writing", highlight: false },
      { name: "Documentation", highlight: false },
    ],
  },
  {
    id: "professional",
    name: "Professional & Leadership",
    description: "Interpersonal communication, ownership, and collaborative competencies.",
    skills: [
      { name: "Problem Solving", highlight: true },
      { name: "Teamwork & Collaboration", highlight: false },
      { name: "Communication", highlight: false },
      { name: "Leadership", highlight: false },
      { name: "Public Speaking", highlight: false },
    ],
  },
];
