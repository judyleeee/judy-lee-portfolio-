import type { ReactNode } from "react";

export default function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "var(--color-bg-subtle)",
        borderLeft: "2px solid var(--color-text-primary)",
        padding: "var(--space-5) var(--space-6)",
        margin: "var(--space-6) 0",
        maxWidth: 720,
      }}
    >
      <div
        style={{
          fontSize: "var(--text-h2)",
          fontWeight: "var(--weight-light)",
          lineHeight: "var(--leading-normal)",
          color: "var(--color-text-primary)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
