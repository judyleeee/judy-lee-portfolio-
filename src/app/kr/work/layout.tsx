import Link from "next/link";

export default function WorkLayoutKR({
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
          href="/kr"
          className="inline-flex items-center transition-opacity hover:opacity-60"
          style={{
            gap: "var(--space-2)",
            fontSize: "var(--text-small)",
            fontWeight: "var(--weight-medium)",
            color: "var(--color-text-primary)",
          }}
        >
          ← 모든 프로젝트로
        </Link>
      </div>
    </>
  );
}
