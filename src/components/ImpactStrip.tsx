type ImpactItem = {
  number: string;
  label: string;
};

const items: ImpactItem[] = [
  {
    number: "62% ↑",
    label: "Task completion\nSamsung.com",
  },
  {
    number: "33% ↑",
    label: "Customer satisfaction\nSamsung.com",
  },
  {
    number: "46%",
    label: "Live kiosk completion\nWinners Big Black Bag",
  },
  {
    number: "7 yrs",
    label: "Design practice\nbrand to product",
  },
];

export default function ImpactStrip() {
  return (
    <div
      className="mx-auto w-full grid grid-cols-2 md:grid-cols-4"
      style={{
        maxWidth: "var(--content-max-width)",
        padding: "var(--space-7) var(--content-padding-x)",
        borderBottom: "1px solid var(--color-border)",
        gap: "var(--space-6)",
      }}
    >
      {items.map((item, i) => (
        <div key={i}>
          <span
            className="block"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "var(--weight-light)",
              letterSpacing: "var(--tracking-tight)",
              color: "var(--color-text-primary)",
              lineHeight: 1,
            }}
          >
            {item.number}
          </span>
          <span
            className="block whitespace-pre-line"
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--text-small)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--leading-normal)",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
