import type { Metadata } from "next";
import ProjectsGrid from "./ProjectsGrid";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Projets d'éclairage architectural — Réalisations",
  description:
    "Découvrez les projets d'éclairage architectural de Code Phantom : villas, restaurants, bureaux, hôtels, showrooms. Études d'éclairage DIALux EVO, luminaires premium.",
  alternates: { canonical: `${siteConfig.url}/projets` },
};

export default function ProjectsPage() {
  return <ProjectsGrid />;
}
