type Props = {
  beforeLabel: string;
  beforeItems: string[];
  afterLabel: string;
  afterItems: string[];
};

export default function BeforeAfter({
  beforeLabel,
  beforeItems,
  afterLabel,
  afterItems,
}: Props) {
  return (
    <div
      className="grid md:grid-cols-[1fr_auto_1fr] items-center"
      style={{
        gap: "var(--space-5)",
        margin: "var(--space-6) 0",
        maxWidth: 920,
      }}
    >
      {/* Before */}
      <div>
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
          {beforeLabel}
        </span>
        <div className="flex flex-col" style={{ gap: "var(--space-2)" }}>
          {beforeItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "var(--space-3) var(--space-4)",
                background: "var(--color-bg-subtle)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-small)",
                color: "var(--color-text-secondary)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div
        className="hidden md:flex items-center justify-center"
        style={{
          fontSize: "32px",
          color: "var(--color-text-tertiary)",
          lineHeight: 1,
          padding: "0 var(--space-3)",
        }}
      >
        →
      </div>
      <div
        className="md:hidden flex items-center justify-center"
        style={{
          fontSize: "24px",
          color: "var(--color-text-tertiary)",
          lineHeight: 1,
          padding: "var(--space-2) 0",
        }}
      >
        ↓
      </div>

      {/* After */}
      <div>
        <span
          className="uppercase block"
          style={{
            fontSize: "var(--text-caption)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-text-primary)",
            marginBottom: "var(--space-3)",
          }}
        >
          {afterLabel}
        </span>
        <div className="flex flex-col" style={{ gap: "var(--space-2)" }}>
          {afterItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: "var(--space-3) var(--space-4)",
                background: "var(--color-text-primary)",
                border: "1px solid var(--color-text-primary)",
                borderRadius: "var(--radius-sm)",
                fontSize: "var(--text-small)",
                color: "var(--color-bg)",
                lineHeight: "var(--leading-normal)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
