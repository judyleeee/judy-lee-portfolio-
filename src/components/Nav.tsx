"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isKR = pathname?.startsWith("/kr") ?? false;

  const t = {
    about: isKR ? "어바웃" : "About",
    contact: isKR ? "연락" : "Contact",
  };

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
          href={isKR ? "/kr" : "/"}
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
          style={{ gap: "var(--space-5)" }}
        >
          {/* Language toggle hidden — KR temporarily disabled */}

          <Link
            href={isKR ? "/kr/about" : "/about"}
            className="transition-colors hover:text-[var(--color-text-primary)]"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-secondary)",
            }}
          >
            {t.about}
          </Link>
          <a
            href="https://www.linkedin.com/in/jihyun0719/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-text-primary)]"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-medium)",
              color: "var(--color-text-secondary)",
            }}
          >
            {t.contact}
          </a>
        </div>
      </div>
    </nav>
  );
}
