import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { aiStack, skillGroups } from "@/content/landing";

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="section-shell relative isolate z-10"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        titleId="skills-title"
        align="center"
        title="Capacidades clave"
        description="Un set profesional para proyectos de marca y producto digital: dirección visual, ejecución multimedia y soporte creative-tech."
      />

      <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <GlassPanel
            key={group.title}
            as="article"
            className={`reveal p-7 ${index % 2 === 0 ? "reveal-left" : "reveal-right"} depth-card ${
              skillGroups.length % 2 === 1 && index === skillGroups.length - 1
                ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[calc((100%-1.25rem)/2)] xl:col-span-1 xl:mx-0 xl:max-w-none"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-tertiary">{group.icon}</span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </GlassPanel>
        ))}

        <GlassPanel as="article" className="reveal reveal-left depth-card p-8">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-[var(--accent-gold)]">TOOL</span>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  Herramientas de diseño
                </h3>
              </div>
              <p className="mt-4 leading-7 text-on-surface-variant">
                Stack visual y de producción para branding, UI, contenido y motion con
                flujos modernos asistidos por IA.
              </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Figma",
                "Photoshop",
                "Illustrator",
                "Lightroom",
                "After Effects",
                "Filmora",
                "Canva Pro",
              ].map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </div>
        </GlassPanel>

        <GlassPanel
          as="article"
          className="reveal reveal-right depth-card bg-gradient-to-br from-secondary-container/25 via-transparent to-[var(--accent-gold)]/10 p-7"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-secondary">SPD</span>
            <h3 className="text-xl font-semibold tracking-[-0.03em]">Creative-tech + IA</h3>
          </div>
          <p className="mt-4 leading-7 text-on-surface-variant">
            Uso IA como copiloto creativo para investigar referencias, prototipar variaciones
            y acelerar entregas con mayor precision visual.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {aiStack.map((tag) => (
              <TechBadge key={tag} name={tag} tone="accent" />
            ))}
          </div>
        </GlassPanel>
      </div>
    </section>
  );
}
