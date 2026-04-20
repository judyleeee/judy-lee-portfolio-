"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isKR = pathname?.startsWith("/kr") ?? false;

  // Generate the counterpart path for the language toggle
  const enPath = isKR
    ? pathname === "/kr"
      ? "/"
      : pathname.replace(/^\/kr/, "")
    : pathname;
  const krPath = isKR
    ? pathname
    : pathname === "/"
      ? "/kr"
      : `/kr${pathname}`;

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
          {/* Language toggle */}
          <div
            className="inline-flex items-center"
            style={{ gap: "var(--space-2)" }}
          >
            <Link
              href={enPath || "/"}
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--weight-medium)",
                color: !isKR
                  ? "var(--color-text-primary)"
                  : "var(--color-text-tertiary)",
                transition: "color var(--transition-fast)",
              }}
            >
              EN
            </Link>
            <span
              style={{
                fontSize: "var(--text-small)",
                color: "var(--color-text-tertiary)",
                userSelect: "none",
              }}
            >
              ·
            </span>
            <Link
              href={krPath}
              style={{
                fontSize: "var(--text-small)",
                fontWeight: "var(--weight-medium)",
                color: isKR
                  ? "var(--color-text-primary)"
                  : "var(--color-text-tertiary)",
                transition: "color var(--transition-fast)",
              }}
            >
              KR
            </Link>
          </div>

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
            href="mailto:jihyunlee719@gmail.com"
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
