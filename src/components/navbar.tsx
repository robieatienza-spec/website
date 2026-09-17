"use client";

import Link from "next/link";
import { Home, Sparkles, LayoutGrid, Workflow, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";
import { Button } from "@/components/ui/button";

const tabs = [
  { title: "Start", icon: Home, href: "#start" },
  { title: "Leistungen", icon: Sparkles, href: "#leistungen" },
  { title: "Arbeiten", icon: LayoutGrid, href: "#arbeiten" },
  { type: "separator" as const },
  { title: "Prozess", icon: Workflow, href: "#prozess" },
  { title: "Kontakt", icon: Mail, href: "#kontakt" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 pt-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between gap-3">
        <Link
          href="#start"
          className="font-display text-xl sm:text-2xl tracking-wide bg-card/90 backdrop-blur border border-border rounded-full px-4 py-2 shadow-sm shrink-0"
        >
          Real<span className="text-accent">8</span>
        </Link>

        <ExpandableTabs tabs={tabs} className="mx-auto" />

        <Button asChild size="sm" className="hidden sm:inline-flex shrink-0">
          <a href="#kontakt">Projekt starten</a>
        </Button>
      </div>
    </header>
  );
}
