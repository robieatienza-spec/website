"use client";

import { Home, Sparkles, LayoutGrid, Workflow, Mail } from "lucide-react";
import { ExpandableTabs } from "@/components/ui/expandable-tabs";

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
    <nav
      aria-label="Hauptnavigation"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4"
    >
      <ExpandableTabs tabs={tabs} />
    </nav>
  );
}
