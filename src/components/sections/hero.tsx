import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { projects } from "@/lib/projects";

export function Hero() {
  return (
    <section id="start" className="relative pt-36 sm:pt-44">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
          <Star className="size-3.5 fill-accent text-accent" />
          Landing-Page-Studio
        </span>

        <h1 className="mt-6 font-display text-[13vw] leading-[0.95] sm:text-7xl md:text-8xl uppercase">
          Seiten, die
          <br />
          <span className="text-accent">verkaufen.</span>
        </h1>

        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto font-serif italic text-lg sm:text-2xl text-muted-foreground">
          Real 8 konzipiert, gestaltet und baut Landing Pages, die aus
          Klicks echte Anfragen machen — für Kund:innen, die online
          wachsen wollen.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
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

      <HeroParallax products={projects} />
    </section>
  );
}
