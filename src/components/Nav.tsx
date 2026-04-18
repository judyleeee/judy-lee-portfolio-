import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-[var(--color-bg)]"
      style={{
        height: "var(--nav-height)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        className="h-full mx-auto flex items-center justify-between"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "0 var(--content-padding-x)",
        }}
      >
        <Link
          href="/"
          className="uppercase"
          style={{
            fontSize: "var(--text-small)",
            fontWeight: "var(--weight-semibold)",
            letterSpacing: "var(--tracking-wide)",
            color: "var(--color-text-primary)",
          }}
        >
          Judy Lee
        </Link>

        <div
          className="flex items-center"
          style={{ gap: "var(--space-6)" }}
        >
          <Link
            href="/about"
            className="transition-colors hover:text-[var(--color-text-primary)]"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-secondary)",
            }}
          >
            About
          </Link>
          <a
            href="mailto:jihyunlee719@gmail.com"
            className="transition-colors hover:text-[var(--color-text-primary)]"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-secondary)",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
