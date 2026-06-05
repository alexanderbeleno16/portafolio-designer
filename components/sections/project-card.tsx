"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon } from "@/components/ui/icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { ProjectPhotoSlider } from "@/components/sections/project-photo-slider";
import { TechBadge } from "@/components/ui/tech-badge";
import type { projects } from "@/content/landing";
import { cn } from "@/lib/cn";

type Project = (typeof projects)[number];

const actionButtonClassName =
  "h-12 w-full min-w-0 rounded-xl px-4 text-center sm:w-auto sm:min-w-[8rem] sm:px-5";
const repositoryButtonClassName =
  "h-12 w-full min-w-0 rounded-xl px-4 text-center sm:w-auto sm:min-w-[8rem] sm:px-5";
const secondaryButtonClassName =
  "label-caps inline-flex h-12 w-full min-w-0 items-center justify-center rounded-xl border border-white/15 px-4 text-on-surface text-center transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-gold)]/35 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary sm:w-auto sm:min-w-[8rem] sm:px-5";

function ProjectDemoAction({ project }: { project: Project }) {
  if ("demoStatus" in project && project.demoStatus === "offline") {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={`Demo de ${project.title} no disponible`}
        className={cn(
          "label-caps relative inline-flex h-12 w-full min-w-0 items-center justify-center rounded-xl px-4 text-center sm:w-auto sm:min-w-[8rem] sm:px-5",
          "border border-white/15 bg-white/[0.08] text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        )}
      >
        {project.primaryAction}
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-surface shadow-[0_0_14px_rgba(239,68,68,0.85)]"
        />
      </span>
    );
  }

  return (
    <ButtonLink
      href={"demoHref" in project ? project.demoHref : "#contacto"}
      target={"demoHref" in project ? "_blank" : undefined}
      ariaLabel={`Abrir demo de ${project.title}`}
      className={actionButtonClassName}
    >
      {project.primaryAction}
    </ButtonLink>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const showContactAction = project.title === "DuoLuxe Essence";

  return (
    <>
      <GlassPanel
        as="article"
        className="reveal reveal-right depth-card group flex h-full flex-col overflow-hidden transition duration-300 hover:border-tertiary/30"
      >
        <ProjectPhotoSlider
          gallery={project.gallery}
          alt={project.alt}
          title={project.title}
          onOpenDetail={() => setIsDetailOpen(true)}
        />

          <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
            <h3 className="text-[1.65rem] font-bold tracking-[-0.05em] text-on-surface sm:text-3xl">
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              aria-label={`Ver detalle de ${project.title}`}
              className="text-left transition hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
            >
              {project.title}
            </button>
          </h3>
            <p className="mt-4 leading-7 text-on-surface-variant">
            {project.description}
          </p>
            <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechBadge
                key={tag}
                name={tag}
                className="font-mono text-[0.65rem]"
              />
            ))}
          </div>
            <div className="mt-6 grid grid-cols-1 gap-2.5 pt-4 sm:mt-auto sm:flex sm:min-h-[4.5rem] sm:flex-wrap sm:items-center sm:gap-3 sm:pt-7 md:gap-4">
            <ProjectDemoAction project={project} />
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              className={secondaryButtonClassName}
              aria-label={`Ver detalle de ${project.title}`}
            >
              Detalle
            </button>
            {showContactAction ? (
              <ButtonLink
                href="#contacto"
                variant="secondary"
                ariaLabel={`Solicitar información de ${project.title}`}
                className={cn("gap-2", repositoryButtonClassName)}
              >
                <GitHubIcon className="h-4 w-4" />
                Solicitar
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </GlassPanel>

      <ProjectDetailModal
        project={project}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
}
