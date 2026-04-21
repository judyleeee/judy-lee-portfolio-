import type { Metadata } from "next";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "About — Judy Lee",
  description:
    "Product designer with brand craft DNA, currently focused on AI-native product experiences.",
};

const skills = {
  "Product & UX": [
    "End-to-end product design",
    "Information architecture",
    "Interaction design",
    "Design systems",
    "Prototyping (Figma, Figma Make)",
  ],
  "AI-Native Workflow": [
    "Claude · prompt and context engineering",
    "Agent and workflow design",
    "LLM-assisted research synthesis",
    "AI tooling for design velocity",
  ],
  "Craft & Visual": [
    "Typography and editorial layout",
    "Brand systems and identity",
    "Design tokens · component libraries",
  ],
  "Collaboration": [
    "Cross-functional partnership (PM, Eng, Research)",
    "Design critique and feedback",
    "Stakeholder communication",
  ],
};

export default function AboutPage() {
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
        About
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
        Product designer with craft DNA,
        <br />
        <em style={{ fontStyle: "italic" }}>
          building AI-native product experiences.
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
          7 years of design practice across Seoul and Toronto · from graphic
          craft at Samsung and Edelman to product thinking in complex,
          multi-audience systems. Two international design awards (Red Dot,
          iF) for a rebrand that began as a UX problem and ended as a
          brand operating system.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          I design how products work. The craft of how they look is still
          there · it's the input. The output is behavior, measurable and
          measured. I'm drawn to problems where the surface story ("this
          flow is broken") masks a structural one ("users are looking for
          identity confirmation, not navigation"). Those are the problems
          that compound.
        </p>
        <p style={{ marginBottom: "var(--space-4)" }}>
          Now I'm deliberately moving into AI-native product design · the
          place where system thinking, craft, and new interaction paradigms
          meet. I use Claude as a thinking partner, not a shortcut ·
          designing agent workflows, prompt systems, and the experiences
          people will have *with* AI rather than next to it.
        </p>
      </div>

      {/* ─── Skills ─── */}
      <FadeInSection>
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
          Capabilities
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
      </FadeInSection>

      {/* ─── Contact ─── */}
      <FadeInSection>
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
          Let's talk
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
          Always open to a good conversation.
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
      </FadeInSection>
    </div>
  );
}
