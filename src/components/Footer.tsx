export default function Footer() {
  return (
    <footer
      className="mx-auto w-full flex items-center justify-between"
      style={{
        maxWidth: "var(--content-max-width)",
        padding: "var(--space-7) var(--content-padding-x)",
      }}
    >
      <span
        style={{
          fontSize: "var(--text-caption)",
          color: "var(--color-text-tertiary)",
        }}
      >
        © 2026 Judy Lee
      </span>
      <div className="flex" style={{ gap: "var(--space-5)" }}>
        <a
          href="https://www.linkedin.com/in/jihyun0719/"
          target="_blank"
          rel="noopener"
          className="transition-colors hover:text-[var(--color-text-primary)]"
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
          }}
        >
          LinkedIn ↗
        </a>
        <a
          href="mailto:jihyunlee719@gmail.com"
          className="transition-colors hover:text-[var(--color-text-primary)]"
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--color-text-tertiary)",
          }}
        >
          Email ↗
        </a>
      </div>
    </footer>
  );
}
