const LINE_1 = "7 years of moving from visual to UX, sense to data.";
const LINE_2 = "Now AI-native, with AI as a partner.";

const WORD_BASE_DELAY = 0.25;
const WORD_STEP = 0.045;
const LINE_GAP = 0.1;

function splitWords(text: string, baseDelay: number) {
  return text.split(" ").map((word, i) => (
    <span
      key={i}
      className="hero-anim-word"
      style={{ animationDelay: `${baseDelay + i * WORD_STEP}s` }}
    >
      {word}
      {"\u00A0"}
    </span>
  ));
}

export default function Hero() {
  const line1 = splitWords(LINE_1, WORD_BASE_DELAY);
  const line2BaseDelay =
    WORD_BASE_DELAY + LINE_1.split(" ").length * WORD_STEP + LINE_GAP;
  const line2 = splitWords(LINE_2, line2BaseDelay);

  return (
    <header
      className="mx-auto w-full"
      style={{
        position: "relative",
        maxWidth: "var(--content-max-width)",
        padding:
          "var(--space-10) var(--content-padding-x) var(--space-8)",
      }}
    >
      <span
        className="hero-anim-cap block uppercase"
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
          maxWidth: "880px",
        }}
      >
        {line1}
        <br />
        <em style={{ fontStyle: "italic", fontWeight: "var(--weight-light)" }}>
          {line2}
        </em>
      </h1>

      <p
        className="hero-anim-body"
        style={{
          marginTop: "var(--space-5)",
          fontSize: "var(--text-body)",
          color: "var(--color-text-secondary)",
          lineHeight: "var(--leading-normal)",
          maxWidth: "600px",
        }}
      >
        Product designer with craft DNA from enterprise UX and global brand
        work · building AI-native product experiences with measurable impact.
      </p>

      <div
        className="hero-anim-line"
        style={{
          position: "absolute",
          left: "var(--content-padding-x)",
          right: "var(--content-padding-x)",
          bottom: 0,
          height: 1,
          background: "var(--color-border)",
        }}
      />
    </header>
  );
}
