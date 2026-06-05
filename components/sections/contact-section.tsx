import { ContactEmailForm } from "@/components/sections/contact-email-form";
import { GlassPanel } from "@/components/ui/glass-panel";
import { contact } from "@/content/landing";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-shell relative isolate z-20 mt-6 pb-[clamp(5rem,8vw,8rem)] sm:mt-8"
      aria-labelledby="contact-title"
    >
      <GlassPanel className="reveal reveal-center depth-card relative isolate overflow-hidden px-4 py-10 text-center sm:px-6 md:px-16 md:py-16">
        <div className="parallax-layer absolute -right-44 -top-44 -z-10 h-96 w-96 rounded-full bg-tertiary/10 blur-[100px]" />
        <div className="parallax-layer absolute -bottom-52 left-12 -z-10 h-80 w-80 rounded-full bg-secondary-container/10 blur-[100px]" />

        <h2
          id="contact-title"
          className="display-heading mx-auto max-w-[14ch] text-balance text-[clamp(2rem,9.2vw,5.4rem)] leading-[1.02] tracking-[-0.05em] text-on-surface sm:max-w-[16ch] sm:tracking-[-0.06em]"
        >
          ¿Tienes un proyecto? <br />
          <span className="text-tertiary [overflow-wrap:anywhere]">Diseñémoslo bien.</span>
        </h2>
        <p className="body-large mx-auto mt-7 max-w-2xl text-on-surface-variant">
          Disponible para proyectos de branding, UI y contenido digital para marcas,
          empresas y equipos que buscan una imagen premium y resultados concretos.
        </p>
        <ContactEmailForm email={contact.email} />
      </GlassPanel>
    </section>
  );
}
