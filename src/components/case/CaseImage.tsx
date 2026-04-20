import Image from "next/image";

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
