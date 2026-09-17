import { ArrowRight, AtSign, Globe, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Kontakt
        </span>
        <h2 className="mt-3 font-display text-4xl sm:text-6xl uppercase">
          Lass uns deine
          <br />
          Landing Page bauen.
        </h2>
        <p className="mt-5 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
          Schreib uns kurz, worum es geht — wir melden uns innerhalb von
          1–2 Werktagen mit den nächsten Schritten.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="mailto:hallo@real8.studio">
              hallo@real8.studio
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4 text-muted-foreground">
          <a
            href="mailto:hallo@real8.studio"
            aria-label="E-Mail"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border hover:text-accent hover:border-accent/40 transition-colors"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border hover:text-accent hover:border-accent/40 transition-colors"
          >
            <AtSign className="size-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border hover:text-accent hover:border-accent/40 transition-colors"
          >
            <Globe className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
