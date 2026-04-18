type Pattern = {
  label: string;
  title: string;
  description: string;
};

type Props = {
  patterns: Pattern[];
};

export default function PatternGrid({ patterns }: Props) {
  return (
    <div
      className="grid md:grid-cols-2"
      style={{
        gap: "var(--space-4)",
        margin: "var(--space-6) 0",
        maxWidth: 920,
      }}
    >
      {patterns.map((p, i) => (
        <div
          key={i}
          style={{
            padding: "var(--space-5) var(--space-5)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm)",
            background: "var(--color-bg)",
          }}
        >
          <span
            className="uppercase block"
            style={{
              fontSize: "var(--text-caption)",
              fontWeight: "var(--weight-medium)",
              letterSpacing: "var(--tracking-wide)",
              color: "var(--color-text-tertiary)",
              marginBottom: "var(--space-3)",
            }}
          >
            {p.label}
          </span>
          <h4
            style={{
              fontSize: "var(--text-h2)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--space-3)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            {p.title}
          </h4>
          <p
            style={{
              fontSize: "var(--text-small)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-loose)",
            }}
          >
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}
