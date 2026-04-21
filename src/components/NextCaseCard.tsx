"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { visibleProjects } from "@/lib/projects";

export default function NextCaseCard() {
  const pathname = usePathname() ?? "";
  const isKR = pathname.startsWith("/kr");

  // Extract current slug from /work/[slug] or /kr/work/[slug]
  const match = pathname.match(/\/work\/([^\/]+)/);
  const currentSlug = match?.[1];
  if (!currentSlug) return null;

  const currentIndex = visibleProjects.findIndex(
    (p) => p.caseStudySlug === currentSlug,
  );
  if (currentIndex === -1) return null;

  // Wrap around: if last, show first
  const nextIndex = (currentIndex + 1) % visibleProjects.length;
  const next = visibleProjects[nextIndex];

  const basePath = isKR ? "/kr/work" : "/work";
  const t = isKR
    ? {
        label: "다음 케이스",
        cta: "읽기 →",
      }
    : {
        label: "Next Case",
        cta: "Read →",
      };

  return (
    <div
      className="mx-auto w-full"
      style={{
        maxWidth: "var(--content-max-width)",
        padding:
          "var(--space-8) var(--content-padding-x) var(--space-7)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <span
        className="uppercase block"
        style={{
          fontSize: "var(--text-caption)",
          fontWeight: "var(--weight-medium)",
          letterSpacing: "var(--tracking-wide)",
          color: "var(--color-text-tertiary)",
          marginBottom: "var(--space-4)",
        }}
      >
        {t.label}
      </span>

      <Link
        href={`${basePath}/${next.caseStudySlug}`}
        className="group grid md:grid-cols-2 items-center transition-opacity hover:opacity-90"
        style={{ gap: "var(--space-7)" }}
      >
        {/* Text */}
        <div
          className="flex flex-col order-2 md:order-1"
          style={{ gap: "var(--space-4)" }}
        >
          <h3
            style={{
              fontSize: "var(--text-h1)",
              fontWeight: "var(--weight-light)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-text-primary)",
            }}
          >
            {next.title}
          </h3>
          <p
            style={{
              fontSize: "var(--text-body)",
              lineHeight: "var(--leading-loose)",
              color: "var(--color-text-secondary)",
              maxWidth: 520,
            }}
          >
            {next.description}
          </p>
          <span
            className="inline-flex items-center transition-opacity group-hover:opacity-60"
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-primary)",
              borderBottom: "1px solid var(--color-text-primary)",
              paddingBottom: 2,
              alignSelf: "flex-start",
            }}
          >
            {t.cta}
          </span>
        </div>

        {/* Image */}
        <div
          className="order-1 md:order-2 relative overflow-hidden"
          style={{
            borderRadius: "var(--radius-sm)",
            backgroundColor: "var(--color-bg-subtle)",
            aspectRatio: "4 / 3",
          }}
        >
          {next.image ? (
            <Image
              src={next.image}
              alt={next.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                {next.title}
              </span>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
