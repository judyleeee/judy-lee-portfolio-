import type { Metadata } from "next";
import CaseStudyHero from "@/components/CaseStudyHero";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Samsung.com · 리디자인 — Judy Lee",
  description:
    "확인 우선 정보 디자인으로 과제 완료 시간을 62% 단축하고 CSAT를 33% 끌어올린 Samsung.com 리디자인 케이스.",
};

export default function PageKR() {
  return (
    <>
      <CaseStudyHero
        label="케이스 스터디 01 · UX 전략"
        title="Samsung.com: 40초에서 15초로."
        subtitle="확인 우선 정보 디자인으로 · 수백만 명이 쓰는 Samsung.com에서 과제 완료 시간 62% 단축, CSAT 33% 향상을 만든 리디자인 케이스."
        meta={[
          { label: "역할", value: "UI/UX 디자이너 · 디자인 기여도 70%" },
          { label: "회사", value: "제일기획 펑타이" },
          { label: "기간", value: "2023 Q4 – 2024 초" },
          { label: "툴", value: "Figma · Zeplin · Samsung Design System" },
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
