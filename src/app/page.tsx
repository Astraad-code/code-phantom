import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import PartnersSection from "@/components/sections/PartnersSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CtaBanner from "@/components/sections/CtaBanner";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — L'architecture de la lumière`,
  description:
    "Code Phantom, expert en éclairage architectural et domotique. Études d'éclairage DIALux EVO, plans d'implantation, luminaires Modular, Kreon, iGuzzini pour projets résidentiels et tertiaires.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExpertiseSection />
      <PhilosophySection />
      <ProjectsPreview />
      <PartnersSection />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
