"use client";

import Hero from "@/components/ui/hero-banner";
import Main from "@/components/layout/main-layout";
import Nav from "@/components/common/nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200">
      <Nav show="hidden" />
      <Hero />
      <Main />
    </main>
  );
}
