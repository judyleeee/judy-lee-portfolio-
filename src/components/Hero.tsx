export default function Hero() {
  return (
    <header
      className="mx-auto w-full"
      style={{
        maxWidth: "var(--content-max-width)",
        padding:
          "var(--space-10) var(--content-padding-x) var(--space-8)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
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
          Product Designer · Brand to Product · AI-Native
        </span>

        <h1
          style={{
            fontSize: "var(--text-display)",
            fontWeight: "var(--weight-light)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
            color: "var(--color-text-primary)",
          }}
        >
          7 years of moving from visual to UX, sense to data.
          <br />
          <em
            style={{ fontStyle: "italic", fontWeight: "var(--weight-light)" }}
          >
            Now AI-native, with AI as a partner.
          </em>
        </h1>

        <p
          style={{
            marginTop: "var(--space-5)",
            fontSize: "var(--text-body)",
            color: "var(--color-text-secondary)",
            lineHeight: "var(--leading-normal)",
            maxWidth: "640px",
          }}
        >
          Product designer with craft DNA from Samsung and Edelman · building
          AI-native product experiences with measurable impact.
        </p>
      </div>
    </header>
  );
}
