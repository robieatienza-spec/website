import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const featured = projects.slice(0, 4);

export function Work() {
  return (
    <section id="arbeiten" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Arbeiten
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase">
              Ausgewählte Projekte
            </h2>
          </div>
          <p className="max-w-sm text-sm sm:text-base text-muted-foreground">
            Platzhalter-Projekte — hier stehen bald echte Case Studies
            unserer Kund:innen.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className={`group relative flex h-72 sm:h-80 flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br p-6 sm:p-8 ${project.gradient}`}
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,0.3),transparent_50%)]" />
              <span className="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-5" />
              </span>
              <span className="relative text-[11px] uppercase tracking-[0.2em] text-white/80 font-sans">
                {project.category}
              </span>
              <h3 className="relative mt-1 font-display text-2xl sm:text-3xl text-white uppercase">
                {project.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
