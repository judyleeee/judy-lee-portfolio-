"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
};

type AccordionRowData = {
  label: string;
  value: string;
};

export default function ProjectCard({ project }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const rows: AccordionRowData[] = [
    { label: "Role", value: project.role },
    { label: "Context", value: project.context },
    { label: "Timeline", value: project.timeline },
    { label: "Tags", value: project.tags.join(" · ") },
  ];

  return (
    <article
      className="grid md:grid-cols-2 items-start"
      style={{
        gap: "var(--space-8)",
        padding: "var(--space-8) 0",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* ─── Left ─── */}
      <div
        className="flex flex-col order-2 md:order-1"
        style={{ gap: "var(--space-4)", paddingRight: "var(--space-6)" }}
      >
        <span
          className="uppercase block"
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-text-tertiary)",
          }}
        >
          {project.year}
        </span>

        <Link href={`/work/${project.caseStudySlug}`} className="inline-block">
          <h2
            className="transition-opacity hover:opacity-60"
            style={{
              fontSize: "var(--text-h1)",
              fontWeight: "var(--weight-light)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-text-primary)",
            }}
          >
            {project.title}
          </h2>
        </Link>

        <p
          style={{
            fontSize: "var(--text-body)",
            fontWeight: "var(--weight-regular)",
            lineHeight: "var(--leading-loose)",
            color: "var(--color-text-secondary)",
          }}
        >
          {project.description}
        </p>

        {/* ─── Accordion ─── */}
        <div
          style={{
            marginTop: "var(--space-5)",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          {rows.map((row, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between"
                  style={{
                    padding: "var(--space-3) 0",
                    borderBottom: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="uppercase"
                    style={{
                      fontSize: "var(--text-small)",
                      fontWeight: "var(--weight-medium)",
                      color: isOpen
                        ? "var(--color-text-primary)"
                        : "var(--color-text-secondary)",
                      letterSpacing: "var(--tracking-wide)",
                      transition: "color var(--transition-fast)",
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-text-tertiary)",
                      fontSize: 18,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="grid overflow-hidden"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows var(--transition-expand)",
                  }}
                >
                  <div className="overflow-hidden">
                    <span
                      className="block"
                      style={{
                        fontSize: "var(--text-small)",
                        color: "var(--color-text-primary)",
                        lineHeight: "var(--leading-normal)",
                        padding: "var(--space-3) 0 var(--space-4)",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href={`/work/${project.caseStudySlug}`}
          className="inline-flex items-center self-start transition-opacity hover:opacity-50"
          style={{
            gap: "var(--space-2)",
            marginTop: "var(--space-5)",
            fontSize: "var(--text-small)",
            fontWeight: "var(--weight-medium)",
            color: "var(--color-text-primary)",
            borderBottom: "1px solid var(--color-text-primary)",
            paddingBottom: 2,
          }}
        >
          View Case Study →
        </Link>
      </div>

      {/* ─── Right (Image) ─── */}
      <Link
        href={`/work/${project.caseStudySlug}`}
        className="order-1 md:order-2 relative overflow-hidden block"
        style={{
          borderRadius: "var(--radius-sm)",
          backgroundColor: "var(--color-bg-subtle)",
          aspectRatio: "4 / 3",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
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
              {project.title}
            </span>
          </div>
        )}
      </Link>
    </article>
  );
}
