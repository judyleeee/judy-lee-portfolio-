import Link from "next/link";
import NextCaseCard from "@/components/NextCaseCard";

export default function WorkLayoutKR({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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
          href="/kr"
          className="inline-flex items-center transition-opacity hover:opacity-60"
          style={{
            gap: "var(--space-2)",
            fontSize: "var(--text-small)",
            fontWeight: "var(--weight-medium)",
            color: "var(--color-text-secondary)",
          }}
        >
          ← 모든 프로젝트로
        </Link>
      </div>
    </>
  );
}
