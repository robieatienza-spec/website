import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projects } from "@/lib/projects";

export function Hero() {
  return (
    <section id="start" className="relative">
      <HeroParallax products={projects} />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-4 pt-10 sm:px-8 sm:pt-16">
        <div className="pointer-events-auto max-w-xl">
          <h1 className="font-display text-[15vw] leading-[0.95] uppercase sm:text-6xl md:text-7xl">
            Seiten, die
            <br />
            <span className="text-accent">verkaufen.</span>
          </h1>

          <p className="mt-6 max-w-md font-serif text-lg italic text-muted-foreground sm:text-xl">
            Real 8 konzipiert, gestaltet und baut Landing Pages, die aus
            Klicks echte Anfragen machen — für Kund:innen, die online
            wachsen wollen.
          </p>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#kontakt">
                Projekt starten
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#arbeiten">Arbeiten ansehen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
