import { GlassPanel } from "@/components/ui/glass-panel";
import { stats } from "@/content/landing";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell" aria-labelledby="about-title">
      <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        <div className="reveal reveal-left">
          <p className="label-caps text-tertiary">Sobre mí</p>
          <h2 id="about-title" className="section-title mt-4 text-on-surface">
            Perfil profesional
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-[var(--accent-gold)]" />
          <div className="body-large mt-8 space-y-5 text-on-surface-variant">
            <p>
              Soy diseñador gráfico y digital con base técnica en programación de software.
              Desarrollo conceptos visuales y experiencias UI que combinan claridad
              corporativa con una capa creativa contemporanea.
            </p>
            <p>
              Mi formación incluye Técnico en Programación de Software, Tecnólogo en
              Diseño Gráfico y estudios en Marketing y Medios Digitales. Eso me permite
              moverme con soltura entre estrategia, ejecución visual y entrega digital.
            </p>
            <p>
              Trabajo branding, identidad visual, contenido para social media, motion
              graphics y diseño digital con foco en impacto comercial, consistencia y
              presentación profesional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <GlassPanel
              key={stat.label}
              className={`reveal depth-card p-6 text-center transition duration-300 hover:border-[var(--accent-gold)]/35 ${
                index % 2 === 0 ? "reveal-right" : "reveal-left"
              }`}
            >
              <p className="text-4xl font-black tracking-[-0.05em] text-[var(--accent-gold)] md:text-5xl">
                {stat.value}
              </p>
              <p className="label-caps mt-3 text-on-surface-variant">{stat.label}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
