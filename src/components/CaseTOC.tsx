"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Section = { id: string; label: string };

export default function CaseTOC() {
  const pathname = usePathname();
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState<string>("");

  // Re-discover H2 sections whenever the route changes
  useEffect(() => {
    setSections([]);
    setActive("");

    // Wait one frame so the new <article> from the child route is in the DOM
    const raf = requestAnimationFrame(() => {
      const article = document.querySelector("article");
      if (!article) return;

      const h2s = article.querySelectorAll("h2");
      const discovered: Section[] = Array.from(h2s)
        .filter((h) => h.id)
        .map((h) => ({
          id: h.id,
          label: h.textContent?.split("·")[0].trim() || h.textContent || "",
        }));

      setSections(discovered);
      if (discovered.length > 0) setActive(discovered[0].id);
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  // Observe scroll position and update active
  useEffect(() => {
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Scroll active section into view in the bar (mobile)
  useEffect(() => {
    if (!active) return;
    const activeEl = document.querySelector(
      `[data-toc-id="${active}"]`,
    ) as HTMLElement | null;
    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [active]);

  if (sections.length === 0) return null;

  return (
    <nav
      className="sticky bg-[var(--color-bg)]"
      style={{
        top: "var(--nav-height)",
        zIndex: 40,
        borderBottom: "1px solid var(--color-border)",
      }}
      aria-label="Case study sections"
    >
      <div
        className="mx-auto overflow-x-auto"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "var(--space-3) var(--content-padding-x)",
          scrollbarWidth: "none",
        }}
      >
        <ul
          className="flex items-center"
          style={{
            gap: "var(--space-5)",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {sections.map((s) => (
            <li key={s.id} data-toc-id={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(s.id);
                  if (el) {
                    const offset = 56 + 44; // nav + toc height
                    const top =
                      el.getBoundingClientRect().top +
                      window.scrollY -
                      offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
                style={{
                  display: "inline-block",
                  fontSize: "var(--text-small)",
                  fontWeight:
                    active === s.id
                      ? "var(--weight-semibold)"
                      : "var(--weight-medium)",
                  color:
                    active === s.id
                      ? "var(--color-text-primary)"
                      : "var(--color-text-secondary)",
                  whiteSpace: "nowrap",
                  transition: "color var(--transition-fast)",
                  borderBottom:
                    active === s.id
                      ? "2px solid var(--color-text-primary)"
                      : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
