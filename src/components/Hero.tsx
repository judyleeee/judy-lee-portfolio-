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
          maxWidth: "860px",
        }}
      >
        I spent 7 years designing what things look like.
        <br />
        <em style={{ fontStyle: "italic", fontWeight: "var(--weight-light)" }}>
          Now I design how they work.
        </em>
      </h1>

      <p
        style={{
          marginTop: "var(--space-5)",
          fontSize: "var(--text-body)",
          color: "var(--color-text-secondary)",
          lineHeight: "var(--leading-normal)",
          maxWidth: "560px",
        }}
      >
        Product designer with craft DNA from Samsung and Edelman · building
        AI-native product experiences with measurable impact.
      </p>
    </header>
  );
}
