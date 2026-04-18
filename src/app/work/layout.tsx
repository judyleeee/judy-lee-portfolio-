import Link from "next/link";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding:
            "var(--space-8) var(--content-padding-x) var(--space-9)",
          borderTop: "1px solid var(--color-border)",
        }}
      >
        <Link
          href="/"
          className="inline-flex items-center transition-opacity hover:opacity-60"
          style={{
            gap: "var(--space-2)",
            fontSize: "var(--text-small)",
            fontWeight: "var(--weight-medium)",
            color: "var(--color-text-primary)",
          }}
        >
          ← Back to all projects
        </Link>
      </div>
    </>
  );
}
