type Stat = {
  percent: number;
  label: string;
};

type Props = {
  stats: Stat[];
  caption?: string;
};

export default function StatBar({ stats, caption }: Props) {
  return (
    <div
      style={{
        margin: "var(--space-6) 0",
        maxWidth: 720,
      }}
    >
      {caption && (
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
          {caption}
        </span>
      )}
      <div className="flex flex-col" style={{ gap: "var(--space-4)" }}>
        {stats.map((stat, i) => (
          <div key={i}>
            <div
              className="flex items-baseline justify-between"
              style={{ marginBottom: "var(--space-2)" }}
            >
              <span
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--color-text-primary)",
                  lineHeight: "var(--leading-normal)",
                  paddingRight: "var(--space-4)",
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  fontSize: "var(--text-h2)",
                  fontWeight: "var(--weight-light)",
                  color: "var(--color-text-primary)",
                  letterSpacing: "var(--tracking-tight)",
                  whiteSpace: "nowrap",
                }}
              >
                {stat.percent}%
              </span>
            </div>
            <div
              style={{
                height: 4,
                background: "var(--color-bg-subtle)",
                borderRadius: "var(--radius-full)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${Math.min(stat.percent, 100)}%`,
                  height: "100%",
                  background: "var(--color-text-primary)",
                  transition: "width var(--transition-slow)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
