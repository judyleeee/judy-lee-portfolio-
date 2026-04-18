type Props = {
  label: string;
  title: string;
  subtitle?: string;
  meta: Array<{ label: string; value: string }>;
};

export default function CaseStudyHero({
  label,
  title,
  subtitle,
  meta,
}: Props) {
  return (
    <header
      className="mx-auto w-full"
      style={{
        maxWidth: "var(--content-max-width)",
        padding:
          "var(--space-9) var(--content-padding-x) var(--space-7)",
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
        {label}
      </span>

      <h1
        style={{
          fontSize: "var(--text-display)",
          fontWeight: "var(--weight-light)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--color-text-primary)",
          maxWidth: 920,
        }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          style={{
            marginTop: "var(--space-5)",
            fontSize: "var(--text-body)",
            color: "var(--color-text-secondary)",
            lineHeight: "var(--leading-loose)",
            maxWidth: 720,
          }}
        >
          {subtitle}
        </p>
      )}

      <dl
        className="grid grid-cols-2 md:grid-cols-4"
        style={{
          marginTop: "var(--space-7)",
          gap: "var(--space-5)",
        }}
      >
        {meta.map((m, i) => (
          <div key={i}>
            <dt
              className="uppercase"
              style={{
                fontSize: "var(--text-caption)",
                fontWeight: "var(--weight-medium)",
                letterSpacing: "var(--tracking-wide)",
                color: "var(--color-text-tertiary)",
                marginBottom: "var(--space-2)",
              }}
            >
              {m.label}
            </dt>
            <dd
              style={{
                fontSize: "var(--text-small)",
                color: "var(--color-text-primary)",
                lineHeight: "var(--leading-normal)",
              }}
            >
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
