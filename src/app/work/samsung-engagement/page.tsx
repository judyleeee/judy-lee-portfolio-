import type { Metadata } from "next";
import CaseStudyHero from "@/components/CaseStudyHero";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Samsung.com · Redesign — Judy Lee",
  description:
    "How verification-first information design cut task completion time by 62% and lifted CSAT by 33% for millions of Samsung.com users.",
};

export default function Page() {
  return (
    <>
      <CaseStudyHero
        label="Case Study 01 · UX Strategy"
        title="Samsung.com: From 40 seconds to 15."
        subtitle="How verification-first information design cut task completion time by 62% and lifted CSAT by 33% for millions of Samsung.com users."
        meta={[
          { label: "Role", value: "UI/UX Designer · 70% design ownership" },
          { label: "Company", value: "Cheil Worldwide Pengtai" },
          { label: "Timeline", value: "Q4 2023 – Early 2024" },
          { label: "Tools", value: "Figma · Zeplin · Samsung Design System" },
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
