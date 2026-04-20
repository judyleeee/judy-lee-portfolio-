import type { Metadata } from "next";
import CaseStudyHero from "@/components/CaseStudyHero";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Winners Big Black Bag — Judy Lee",
  description:
    "46% 완료율. 보상 없음. 이커머스 없음. 토론토 2일 크리스마스 팝업을 위해 설계된 키오스크 기반 선물 추천 퀴즈.",
};

export default function PageKR() {
  return (
    <>
      <CaseStudyHero
        label="케이스 스터디 02 · 인터랙티브 퀴즈 UX"
        title="Winners Big Black Bag: 46% 완료율, 보상 없이."
        subtitle="토론토 2일 크리스마스 팝업을 위해 설계된 키오스크 기반 선물 추천 퀴즈. 자발적 참여 · 보상 없음 · 구매 경로 없음 · UX 자체가 사용자의 다음 행동을 이끌어야 하는 조건."
        meta={[
          {
            label: "역할",
            value: "전략 · 퀴즈 UX/UI · 브랜딩 · 팝업 사이니지 · 엔드투엔드",
          },
          { label: "클라이언트 · 에이전시", value: "Winners (TJX Canada) · Edelman Toronto" },
          {
            label: "맥락",
            value: "키오스크 + QR 모바일 · 토론토 · 2일 팝업 · 2024 크리스마스",
          },
          { label: "툴", value: "Figma · 현장 관찰 · 내부 QA" },
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
