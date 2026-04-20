import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "어바웃 — Judy Lee",
  description:
    "디자인 감각이 뿌리 깊은 프로덕트 디자이너. 지금은 AI 네이티브 제품 경험에 집중하고 있습니다.",
};

const skills = {
  "프로덕트 · UX": [
    "엔드투엔드 프로덕트 디자인",
    "정보 구조 설계",
    "인터랙션 디자인",
    "디자인 시스템",
    "프로토타이핑 (Figma, Figma Make)",
  ],
  "AI 네이티브 워크플로우": [
    "Claude · 프롬프트와 컨텍스트 설계",
    "에이전트와 워크플로우 디자인",
    "LLM 기반 리서치 합성",
    "디자인 속도를 위한 AI 툴링",
  ],
  "감각 · 비주얼": [
    "타이포그래피와 에디토리얼 레이아웃",
    "브랜드 시스템과 아이덴티티",
    "디자인 토큰 · 컴포넌트 라이브러리",
  ],
  "협업": [
    "크로스펑셔널 파트너십 (PM, Eng, Research)",
    "디자인 크리틱과 피드백",
    "이해관계자 커뮤니케이션",
  ],
};

export default function AboutKR() {
  return (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: "var(--content-max-width)",
        padding:
          "var(--space-9) var(--content-padding-x) var(--space-9)",
      }}
    >
      <span
        className="uppercase block"
        style={{
          fontSize: "var(--text-caption)",
          fontWeight: "var(--weight-medium)",
          letterSpacing: "var(--tracking-wide)",
          color: "var(--color-text-tertiary)",
          marginBottom: "var(--space-5)",
        }}
      >
        어바웃
      </span>

      <h1
        style={{
          fontSize: "var(--text-display)",
          fontWeight: "var(--weight-light)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--color-text-primary)",
          maxWidth: 860,
          marginBottom: "var(--space-6)",
        }}
      >
        디자인 감각이 뿌리 깊은 프로덕트 디자이너,
        <br />
        <em style={{ fontStyle: "italic" }}>
          AI 네이티브 제품 경험을 만듭니다.
        </em>
      </h1>

      <div
        style={{
          maxWidth: 720,
          fontSize: "var(--text-body)",
          lineHeight: "var(--leading-loose)",
          color: "var(--color-text-primary)",
        }}
      >
        <p style={{ marginBottom: "var(--space-4)" }}>
          서울과 토론토를 오가며 7년간 디자인을 해왔습니다. Samsung과
          Edelman에서 그래픽 감각을 다졌고 · 여러 사용자 층이 얽힌 복잡한
          시스템에서 프로덕트 사고를 키웠습니다. UX 문제에서 출발한 리브랜딩
          작업으로 Red Dot · iF 두 개의 국제 디자인 어워드를 받았습니다.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          제가 디자인하는 것은 제품이 "어떻게 작동하는가"입니다. 모양을 다듬는
          감각은 그 안에 여전히 있지만 · 그것은 입력이고 결과는 행동이며 ·
          그 행동은 측정되어야 합니다. 겉으로 드러난 문제("플로우가 망가졌다")
          뒤에 구조적인 원인("사용자는 내 물건이 맞는지 확인하려 한다")이 숨은
          문제에 끌립니다. 그런 문제를 풀 때 임팩트가 쌓입니다.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          지금은 의도적으로 AI 네이티브 제품 디자인으로 이동하고 있습니다.
          시스템 사고와 감각, 그리고 새로운 인터랙션 패러다임이 만나는
          지점입니다. Claude를 지름길이 아닌 사고 파트너로 사용합니다 ·
          에이전트 워크플로우 · 프롬프트 시스템 · 사람이 AI와 "함께" 만드는
          경험을 설계합니다.
        </p>
      </div>

      {/* ─── Capabilities ─── */}
      <section
        style={{
          marginTop: "var(--space-9)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-7)",
        }}
      >
        <span
          className="uppercase block"
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--space-5)",
          }}
        >
          역량
        </span>

        <div
          className="grid md:grid-cols-2"
          style={{ gap: "var(--space-7)" }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3
                style={{
                  fontSize: "var(--text-h2)",
                  fontWeight: "var(--weight-medium)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {category}
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "var(--text-small)",
                      color: "var(--color-text-secondary)",
                      lineHeight: "var(--leading-loose)",
                      padding: "var(--space-2) 0",
                      borderBottom: "1px solid var(--color-border)",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section
        style={{
          marginTop: "var(--space-9)",
          borderTop: "1px solid var(--color-border)",
          paddingTop: "var(--space-7)",
        }}
      >
        <span
          className="uppercase block"
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--space-5)",
          }}
        >
          연락
        </span>
        <p
          style={{
            fontSize: "var(--text-h1)",
            fontWeight: "var(--weight-light)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-text-primary)",
            maxWidth: 720,
          }}
        >
          좋은 대화는 언제나 환영합니다.
          <br />
          <a
            href="mailto:jihyunlee719@gmail.com"
            className="transition-opacity hover:opacity-60"
            style={{
              borderBottom: "1px solid var(--color-text-primary)",
              paddingBottom: 2,
            }}
          >
            jihyunlee719@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
