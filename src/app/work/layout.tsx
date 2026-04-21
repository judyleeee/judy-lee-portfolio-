import Link from "next/link";
import NextCaseCard from "@/components/NextCaseCard";
import CaseTOC from "@/components/CaseTOC";

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CaseTOC />
      {children}
      <NextCaseCard />
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding:
            "var(--space-6) var(--content-padding-x) var(--space-9)",
        }}
      >
        <Link
          href="/"
          className="inline-flex items-center transition-opacity hover:opacity-60"
          style={{
            gap: "var(--space-2)",
            fontSize: "var(--text-small)",
            fontWeight: "var(--weight-medium)",
            color: "var(--color-text-secondary)",
          }}
        >
          ← Back to all projects
        </Link>
      </div>
    </>
  );
}
