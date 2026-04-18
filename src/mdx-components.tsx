import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props: ComponentPropsWithoutRef<"h1">) => (
      <h1
        style={{
          fontSize: "var(--text-display)",
          fontWeight: "var(--weight-light)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--color-text-primary)",
          marginTop: "var(--space-8)",
          marginBottom: "var(--space-5)",
          maxWidth: 860,
        }}
        {...props}
      />
    ),
    h2: (props: ComponentPropsWithoutRef<"h2">) => (
      <h2
        style={{
          fontSize: "var(--text-h1)",
          fontWeight: "var(--weight-light)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--color-text-primary)",
          marginTop: "var(--space-8)",
          marginBottom: "var(--space-4)",
        }}
        {...props}
      />
    ),
    h3: (props: ComponentPropsWithoutRef<"h3">) => (
      <h3
        style={{
          fontSize: "var(--text-h2)",
          fontWeight: "var(--weight-medium)",
          lineHeight: "var(--leading-tight)",
          color: "var(--color-text-primary)",
          marginTop: "var(--space-6)",
          marginBottom: "var(--space-3)",
        }}
        {...props}
      />
    ),
    p: (props: ComponentPropsWithoutRef<"p">) => (
      <p
        style={{
          fontSize: "var(--text-body)",
          lineHeight: "var(--leading-loose)",
          color: "var(--color-text-primary)",
          marginBottom: "var(--space-4)",
          maxWidth: 720,
        }}
        {...props}
      />
    ),
    ul: (props: ComponentPropsWithoutRef<"ul">) => (
      <ul
        style={{
          paddingLeft: "var(--space-5)",
          marginBottom: "var(--space-4)",
          color: "var(--color-text-primary)",
          lineHeight: "var(--leading-loose)",
          listStyle: "disc",
          maxWidth: 720,
        }}
        {...props}
      />
    ),
    ol: (props: ComponentPropsWithoutRef<"ol">) => (
      <ol
        style={{
          paddingLeft: "var(--space-5)",
          marginBottom: "var(--space-4)",
          color: "var(--color-text-primary)",
          lineHeight: "var(--leading-loose)",
          listStyle: "decimal",
          maxWidth: 720,
        }}
        {...props}
      />
    ),
    li: (props: ComponentPropsWithoutRef<"li">) => (
      <li style={{ marginBottom: "var(--space-2)" }} {...props} />
    ),
    strong: (props: ComponentPropsWithoutRef<"strong">) => (
      <strong style={{ fontWeight: "var(--weight-semibold)" }} {...props} />
    ),
    blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
      <blockquote
        style={{
          borderLeft: "2px solid var(--color-border-strong)",
          padding: "var(--space-2) 0 var(--space-2) var(--space-5)",
          margin: "var(--space-6) 0",
          fontSize: "var(--text-h2)",
          fontWeight: "var(--weight-light)",
          fontStyle: "italic",
          color: "var(--color-text-primary)",
          lineHeight: "var(--leading-normal)",
          maxWidth: 720,
        }}
        {...props}
      />
    ),
    hr: () => (
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--color-border)",
          margin: "var(--space-7) 0",
        }}
      />
    ),
    ...components,
  };
}
