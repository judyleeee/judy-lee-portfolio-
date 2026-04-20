import type { Metadata } from "next";
import CaseStudyHero from "@/components/CaseStudyHero";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "PTKorea · 리브랜딩 & 웹사이트 — Judy Lee",
  description:
    "117명 내부 설문 · 3-Pillar 크리에이티브 프레임워크 · 로코드 CMS로 파편화된 브랜드를 비디자이너가 실행 가능한 시스템으로 통합한 케이스. Red Dot · iF Design Award 수상.",
};

export default function PageKR() {
  return (
    <>
      <CaseStudyHero
        label="케이스 스터디 03 · 브랜드 전략"
        title="PTKorea: 브랜드를 UX 문제처럼 다뤘습니다. 실제로 그랬으니까."
        subtitle="117명 내부 설문 · 3-Pillar 크리에이티브 프레임워크 · 로코드 CMS로 파편화된 브랜드를 비디자이너가 실행 가능한 시스템으로 통합한 케이스. Red Dot · iF Design Award 수상."
        meta={[
          { label: "역할", value: "리드 디자이너" },
          { label: "범위", value: "브랜드 전략 · IA · 웹 디자인" },
          { label: "연도", value: "2023" },
          { label: "툴", value: "Figma · 로코드 CMS · 내부 설문 (n=117)" },
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
