export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <span className="font-display text-base tracking-wide">
          Real<span className="text-accent">8</span>
        </span>
        <p>© {new Date().getFullYear()} Real 8. Alle Rechte vorbehalten.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            Impressum
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
