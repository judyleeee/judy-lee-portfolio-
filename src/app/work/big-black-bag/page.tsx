import type { Metadata } from "next";
import CaseStudyHero from "@/components/CaseStudyHero";
import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Winners Big Black Bag — Judy Lee",
  description:
    "46% completion. No incentives. No e-commerce. A kiosk-based gift-giving quiz designed for a 2-day Christmas pop-up in Toronto.",
};

export default function Page() {
  return (
    <>
      <CaseStudyHero
        label="Case Study 02 · Interactive Quiz UX"
        title="Winners Big Black Bag: 46% completion. No incentives. No e-commerce."
        subtitle="A kiosk-based gift-giving quiz designed for a 2-day Christmas pop-up in Toronto. Voluntary engagement · no rewards · no purchase path · just UX earning the next tap."
        meta={[
          {
            label: "Role",
            value: "Strategy · Quiz UX/UI · Branding · Pop-up signage · end-to-end",
          },
          { label: "Client · Agency", value: "Winners (TJX Canada) · Edelman Toronto" },
          {
            label: "Context",
            value: "Kiosk + QR-to-mobile · Toronto · 2-day pop-up · Christmas 2024",
          },
          { label: "Tools", value: "Figma · On-site observation · Internal QA" },
        ]}
      />
      <article
        className="mx-auto w-full"
        style={{
          maxWidth: "var(--content-max-width)",
          padding: "var(--space-8) var(--content-padding-x) var(--space-9)",
        }}
      >
        <Content />
      </article>
    </>
  );
}
