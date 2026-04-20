import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  width?: number;
  height?: number;
};

export default function CaseImage({
  src,
  alt,
  label,
  caption,
  width = 1400,
  height = 900,
}: Props) {
  return (
    <figure
      style={{
        margin: "var(--space-7) 0",
        maxWidth: 920,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "var(--color-bg-subtle)",
          borderRadius: "var(--radius-sm)",
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          sizes="(max-width: 920px) 100vw, 920px"
        />
      </div>
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
  );
}
