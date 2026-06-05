import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon } from "@/components/ui/icons";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { externalLinks, projects } from "@/content/landing";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="section-shell relative isolate z-10 scroll-mt-24"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        titleId="projects-title"
        title="Casos seleccionados"
        description="Proyectos donde branding, interfaz y ejecucion digital trabajan juntos para dar una percepcion premium y resultados claros."
      />

      <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2 lg:auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="relative z-10 mt-14 flex flex-col items-center justify-center gap-3 sm:mt-16 sm:flex-row lg:mt-20">
        <ButtonLink
          href={externalLinks.githubRepositories}
          target="_blank"
          variant="secondary"
          className="attention-cta gap-3 rounded-full px-8"
        >
          <GitHubIcon className="h-5 w-5" />
          Ver mas
        </ButtonLink>
        <ButtonLink
          href={externalLinks.behance}
          target="_blank"
          variant="secondary"
          ariaLabel="Ver portafolio en Behance"
          className="attention-cta gap-3 rounded-full px-8"
        >
          Behance
        </ButtonLink>
      </div>
    </section>
  );
}
