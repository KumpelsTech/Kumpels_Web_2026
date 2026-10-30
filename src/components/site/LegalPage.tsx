import type { Lang } from "@/i18n/types";
import type { LegalDocument, LegalItem } from "@/content/legal/types.ts";

export function LegalPage({ lang, document }: { lang: Lang; document: LegalDocument }) {
  return (
    <section className="hero-bg">
      <div className="container-page section-y">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-primary">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--gradient-brand)" }} />
          {lang === "es" ? "Legal" : "Legal"}
        </span>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold md:text-[52px]">{document.title}</h1>
        <p className="mt-4 text-sm text-text-muted">
          {lang === "es" ? "Última actualización" : "Last updated"}: {document.updated}
        </p>
        <article className="mt-10 max-w-4xl space-y-10 text-text-secondary">
          {document.sections.map((section, index) => (
            <section key={index} aria-labelledby={`legal-section-${index}`}>
              <h2 id={`legal-section-${index}`} className="mb-4 font-display text-xl font-bold text-foreground md:text-2xl">
                {section.heading}
              </h2>
              <LegalItems items={section.items} />
            </section>
          ))}
          {document.closing && <p className="border-t border-border pt-6 text-sm text-text-muted">{document.closing}</p>}
        </article>
      </div>
    </section>
  );
}

function LegalItems({ items }: { items: LegalItem[] }) {
  const blocks: Array<{ type: "bullet"; texts: string[] } | { type: "paragraph" | "subheading"; text: string }> = [];
  for (const item of items) {
    const last = blocks[blocks.length - 1];
    if (item.type === "bullet") {
      if (last?.type === "bullet") last.texts.push(item.text);
      else blocks.push({ type: "bullet", texts: [item.text] });
    } else blocks.push({ type: item.type, text: item.text });
  }
  return (
    <div className="space-y-4 text-sm leading-7 md:text-base md:leading-8">
      {blocks.map((block, index) => block.type === "bullet" ? (
        <ul key={index} className="list-disc space-y-1 pl-6">
          {block.texts.map((text, i) => <li key={i}>{text}</li>)}
        </ul>
      ) : block.type === "subheading" ? (
        <h3 key={index} className="font-semibold text-foreground">{block.text}</h3>
      ) : (
        <p key={index}>{block.text}</p>
      ))}
    </div>
  );
}
