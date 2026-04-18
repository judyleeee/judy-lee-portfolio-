// ============================================
// Judy Lee · Product Designer Portfolio
// Project Data · Single Source of Truth
// ============================================

export type Project = {
  id: string;
  title: string;
  description: string;
  role: string;
  context: string;
  timeline: string;
  year: string;
  tags: string[];
  image: string | null;
  caseStudySlug: string;
  visible: boolean;
};

export const projects: Project[] = [
  // 01 · Samsung.com · Redesign (임팩트 · 글로벌 스케일)
  {
    id: "samsung-engagement",
    title: "Samsung.com · Redesign",
    description:
      "Reduced manual lookup time from 40s to 15s · driving a 62% task completion improvement and 33% CSAT lift through verification-first information design.",
    role: "Lead Designer · 70% Design Ownership",
    context: "Cheil Worldwide Pengtai · Global · B2C · Web",
    timeline: "Q4 2023 – Early 2024",
    year: "2024",
    tags: ["UX", "Strategy", "Global Scale"],
    image: null,
    caseStudySlug: "samsung-engagement",
    visible: true,
  },

  // 02 · Winners Big Black Bag (행동 설계 · 라이브 검증)
  {
    id: "big-black-bag",
    title: "Winners Big Black Bag",
    description:
      "Designed a decision-making flow for a high-noise, zero-onboarding pop-up environment · achieving 46% task completion in a live kiosk setting.",
    role: "End-to-end UX/UI Design · Brand Design",
    context: "Pop-up Store · Kiosk · B2C · In-person",
    timeline: "8 weeks · 2025",
    year: "2025",
    tags: ["Interaction Design", "Behavior Design", "In-person"],
    image: null,
    caseStudySlug: "big-black-bag",
    visible: true,
  },

  // 03 · PTKorea (Brand Systems · Red Dot · iF)
  {
    id: "ptkorea",
    title: "PTKorea · Rebranding & Website",
    description:
      "Won Red Dot and iF Design Awards by solving a brand-ops misalignment · consolidating 7 fragmented sections into a 3-pillar system that non-designers could execute.",
    role: "Lead Designer",
    context: "Brand Strategy · Web Design · Internal Systems",
    timeline: "2023",
    year: "2023",
    tags: ["Branding", "Systems", "Craft"],
    image: null,
    caseStudySlug: "ptkorea",
    visible: true,
  },
];

export const visibleProjects = projects.filter((p) => p.visible);
