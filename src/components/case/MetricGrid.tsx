type Metric = {
  value: string;
  label: string;
};

type Props = {
  metrics: Metric[];
  columns?: 2 | 3 | 4 | 5;
};

export default function MetricGrid({ metrics, columns = 4 }: Props) {
  const gridClass =
    columns === 5
      ? "grid grid-cols-2 md:grid-cols-5"
      : columns === 3
        ? "grid grid-cols-2 md:grid-cols-3"
        : columns === 2
          ? "grid grid-cols-2"
          : "grid grid-cols-2 md:grid-cols-4";

  return (
    <div
      className={gridClass}
      style={{
        gap: "var(--space-5)",
        margin: "var(--space-6) 0",
        padding: "var(--space-6) 0",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        maxWidth: 920,
      }}
    >
      {metrics.map((m, i) => (
        <div key={i}>
          <div
            style={{
              fontSize: "clamp(28px, 3vw, 36px)",
              fontWeight: "var(--weight-light)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
            }}
          >
            {m.value}
          </div>
          <div
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--text-small)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-normal)",
            }}
          >
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}
