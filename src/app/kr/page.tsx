import ProjectCard from "@/components/ProjectCard";
import { visibleProjects } from "@/lib/projects";

const impactItems = [
  { number: "62% ↑", label: "과제 완료율\nSamsung.com" },
  { number: "33% ↑", label: "고객 만족도\nSamsung.com" },
  { number: "46%", label: "실제 키오스크 완료율\nWinners" },
  { number: "7년", label: "디자인 경력\n브랜드에서 프로덕트로" },
];

export default function HomeKR() {
  return (
    <>
      {/* ─── Hero ─── */}
      <header
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding:
            "var(--space-10) var(--content-padding-x) var(--space-8)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <span
          className="block uppercase"
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-text-tertiary)",
            marginBottom: "var(--space-5)",
          }}
        >
          프로덕트 디자이너 · 브랜드에서 프로덕트로 · AI 네이티브
        </span>

        <h1
          style={{
            fontSize: "var(--text-display)",
            fontWeight: "var(--weight-light)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-text-primary)",
            maxWidth: 860,
          }}
        >
          7년간 겉모습을 디자인했습니다.
          <br />
          <em
            style={{ fontStyle: "italic", fontWeight: "var(--weight-light)" }}
          >
            이제는 작동 방식을 디자인합니다.
          </em>
        </h1>

        <p
          style={{
            marginTop: "var(--space-5)",
            fontSize: "var(--text-body)",
            color: "var(--color-text-secondary)",
            lineHeight: "var(--leading-normal)",
            maxWidth: 560,
          }}
        >
          Samsung과 Edelman에서 쌓은 크래프트를 바탕으로 · 측정 가능한 임팩트를
          만드는 AI 네이티브 제품 경험을 설계합니다.
        </p>
      </header>

      {/* ─── Impact ─── */}
      <div
        className="mx-auto w-full grid grid-cols-2 md:grid-cols-4"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "var(--space-7) var(--content-padding-x)",
          borderBottom: "1px solid var(--color-border)",
          gap: "var(--space-6)",
        }}
      >
        {impactItems.map((item, i) => (
          <div key={i}>
            <span
              className="block"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: "var(--weight-light)",
                letterSpacing: "var(--tracking-tight)",
                color: "var(--color-text-primary)",
                lineHeight: 1,
              }}
            >
              {item.number}
            </span>
            <span
              className="block whitespace-pre-line"
              style={{
                marginTop: "var(--space-2)",
                fontSize: "var(--text-small)",
                color: "var(--color-text-secondary)",
                lineHeight: "var(--leading-normal)",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ─── Projects ─── */}
      <section
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "0 var(--content-padding-x)",
        }}
      >
        <div className="flex flex-col">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} locale="kr" />
          ))}
        </div>
      </section>
    </>
  );
}
