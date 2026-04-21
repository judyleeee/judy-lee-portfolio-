"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  /** 컨테이너 고정 종횡비. 기본 16/10. 같은 페이지의 모든 이미지 높이를 통일하기 위함 */
  ratio?: string;
  /** 이미지가 잘리지 않도록 contain(기본) · 화면 꽉 채우되 잘릴 수 있음은 cover */
  fit?: "contain" | "cover";
};

export default function CaseImage({
  src,
  alt,
  label,
  caption,
  ratio = "16 / 10",
  fit = "contain",
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll + ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      <figure
        style={{
          margin: "var(--space-7) 0",
          maxWidth: 920,
        }}
      >
        <button
          onClick={() => setIsOpen(true)}
          aria-label={`Enlarge image · ${alt}`}
          style={{
            all: "unset",
            display: "block",
            cursor: "zoom-in",
            width: "100%",
            position: "relative",
            aspectRatio: ratio,
            background: "var(--color-bg-subtle)",
            borderRadius: "var(--radius-sm)",
            overflow: "hidden",
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{
              objectFit: fit,
            }}
            sizes="(max-width: 920px) 100vw, 920px"
          />
        </button>
        {(label || caption) && (
          <figcaption
            className="flex flex-col"
            style={{
              marginTop: "var(--space-3)",
              gap: "var(--space-1)",
            }}
          >
            {label && (
              <span
                className="uppercase"
                style={{
                  fontSize: "var(--text-caption)",
                  fontWeight: "var(--weight-medium)",
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--color-text-tertiary)",
                }}
              >
                {label}
              </span>
            )}
            {caption && (
              <span
                style={{
                  fontSize: "var(--text-small)",
                  color: "var(--color-text-secondary)",
                  lineHeight: "var(--leading-normal)",
                }}
              >
                {caption}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {/* Lightbox modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: "rgba(0, 0, 0, 0.88)",
            padding: "var(--space-7)",
            cursor: "zoom-out",
            backdropFilter: "blur(8px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "var(--space-5)",
              right: "var(--space-5)",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "var(--radius-full)",
              color: "#fff",
              fontSize: 20,
              lineHeight: 1,
              border: "none",
              cursor: "pointer",
              transition: "background var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255, 255, 255, 0.1)";
            }}
          >
            ✕
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1600px",
              maxHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={src}
              alt={alt}
              width={2400}
              height={1800}
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
              sizes="(max-width: 1600px) 100vw, 1600px"
              priority
            />
          </div>

          {(label || caption) && (
            <div
              style={{
                position: "absolute",
                bottom: "var(--space-5)",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "var(--text-small)",
                pointerEvents: "none",
              }}
            >
              {label && (
                <div
                  className="uppercase"
                  style={{
                    fontSize: "var(--text-caption)",
                    letterSpacing: "var(--tracking-wide)",
                    color: "rgba(255, 255, 255, 0.6)",
                    marginBottom: "var(--space-1)",
                  }}
                >
                  {label}
                </div>
              )}
              {caption && <div>{caption}</div>}
            </div>
          )}
        </div>
      )}
    </>
  );
}
