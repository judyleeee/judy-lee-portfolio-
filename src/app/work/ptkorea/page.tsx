import type { Metadata } from "next";
import CaseStudyHero from "@/components/CaseStudyHero";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "PTKorea · Rebranding & Website — Judy Lee",
  description:
    "How a 117-person survey, a 3-pillar creative framework, and a low-code CMS consolidated a fragmented brand into a system that non-designers could execute. Recognized with Red Dot and iF Design Awards.",
};

export default function Page() {
  return (
    <>
      <CaseStudyHero
        label="Case Study 03 · Brand Strategy"
        title="PTKorea: I treated the brand like a UX problem. Because it was."
        subtitle="How a 117-person survey, a 3-pillar creative framework, and a low-code CMS consolidated a fragmented brand into a system that non-designers could execute. Recognized with Red Dot and iF Design Awards."
        meta={[
          { label: "Role", value: "Lead Designer" },
          { label: "Scope", value: "Brand Strategy · IA · Web Design" },
          { label: "Year", value: "2023" },
          { label: "Tools", value: "Figma · Low-code CMS · Internal survey (n=117)" },
        ]}
      />
      <article
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "var(--space-8) var(--content-padding-x) var(--space-9)",
        }}
      >
        <Content />
      </article>
    </>
  );
}
