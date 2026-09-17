const steps = [
  {
    number: "01",
    title: "Kickoff & Strategie",
    description:
      "Wir lernen dein Business, deine Zielgruppe und dein Angebot kennen und definieren gemeinsam das Ziel der Seite.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes und visuelles Design, abgestimmt auf deine Marke — mit Fokus auf Klarheit und Conversion.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Umsetzung als schnelle, moderne Website — getestet auf allen Geräten, bereit für den Launch.",
  },
  {
    number: "04",
    title: "Launch & Optimierung",
    description:
      "Wir gehen live, messen die Performance und optimieren laufend anhand echter Nutzerdaten.",
  },
];

export function Process() {
  return (
    <section id="prozess" className="py-24 sm:py-32 bg-muted/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Prozess
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl uppercase">
            So arbeiten wir
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <span className="font-display text-5xl sm:text-6xl text-accent/25">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 -right-4 h-px w-8 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
