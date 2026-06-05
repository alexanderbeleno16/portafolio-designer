import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { aiWorkflow } from "@/content/landing";

export function ServicesSection() {
  return (
    <section id="ia" className="section-shell" aria-labelledby="ai-workflow-title">
      <SectionHeading
        align="center"
        eyebrow={aiWorkflow.eyebrow}
        title={aiWorkflow.title}
        titleId="ai-workflow-title"
        description={aiWorkflow.description}
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {aiWorkflow.pillars.map((pillar, index) => (
          <GlassPanel
            key={pillar.title}
            as="article"
            className={`reveal depth-card p-7 transition duration-300 hover:border-tertiary/30 md:p-8 ${
              index % 2 === 0 ? "reveal-left" : "reveal-right"
            } ${index === aiWorkflow.pillars.length - 1 ? "lg:col-span-2 lg:mx-auto lg:w-[min(100%,44rem)] reveal-center" : ""}`}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--accent-gold)]/30 bg-[var(--accent-gold)]/10 font-mono text-sm text-[var(--accent-gold)]">
              {pillar.icon}
            </span>
            <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em] md:text-3xl">
              {pillar.title}
            </h3>
            <p className="mt-4 leading-7 text-on-surface-variant">
              {pillar.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {pillar.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
