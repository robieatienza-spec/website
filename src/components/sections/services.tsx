import {
  PenTool,
  LayoutTemplate,
  Code2,
  LineChart,
  Gauge,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Strategie & Copy",
    description:
      "Zielgruppe, Angebot und Botschaft klar auf den Punkt — bevor wir ein einziges Pixel gestalten.",
  },
  {
    icon: LayoutTemplate,
    title: "UI/UX Design",
    description:
      "Individuelles Design, das zur Marke passt und Besucher:innen ohne Umwege zum Call-to-Action führt.",
  },
  {
    icon: Code2,
    title: "Entwicklung",
    description:
      "Schnelle, sauber gebaute Seiten — responsive, barrierearm und startklar für jede Kampagne.",
  },
  {
    icon: LineChart,
    title: "Conversion-Optimierung",
    description:
      "A/B-Tests und Datenauswertung, damit deine Landing Page mit der Zeit immer besser konvertiert.",
  },
  {
    icon: Gauge,
    title: "Tracking & Analytics",
    description:
      "Saubere Messung von Events und Leads, damit du genau weißt, was funktioniert.",
  },
  {
    icon: Wrench,
    title: "Hosting & Wartung",
    description:
      "Zuverlässiges Hosting, Updates und Support — deine Seite läuft, wir kümmern uns.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Leistungen
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">
            Von der ersten Idee bis zur laufenden Optimierung — wir begleiten
            deine Landing Page durch den gesamten Lebenszyklus.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 sm:p-7 transition-transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center size-11 rounded-xl bg-accent/10 text-accent">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 font-display text-xl uppercase">{title}</h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
