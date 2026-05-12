import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { comparatifs } from "@/data/comparatifs";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Comparatifs éclairage & domotique — KNX, DALI, CASAMBI, LED",
  description:
    "Comparatifs techniques détaillés : KNX vs DALI, CASAMBI vs DALI, LED vs fluorescent, DALI vs 0-10V. Tableaux, cas d'usage, recommandations expertes pour professionnels de l'éclairage.",
  keywords: ["comparatif éclairage", "KNX vs DALI", "CASAMBI vs DALI", "LED vs fluorescent", "comparatif protocole domotique"],
  alternates: { canonical: `${siteConfig.url}/comparatifs` },
};

export default function ComparatifsPage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Comparatifs</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Analyses techniques</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Comparatifs</span>{" "}
          <span className="text-gradient-gold">Éclairage & Domotique</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          Des analyses techniques indépendantes pour vous aider à choisir le bon protocole,
          la bonne technologie et la bonne solution pour votre projet.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {comparatifs.map((comp) => (
            <Link
              key={comp.slug}
              href={`/comparatifs/${comp.slug}`}
              className="group flex items-start gap-6 p-6 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-300"
            >
              <div className="flex-1">
                <h2 className="text-base font-light text-[#f5f5f0] group-hover:text-white transition-colors mb-2">
                  {comp.titre}
                </h2>
                <p className="text-xs text-[#444444] leading-relaxed mb-4">{comp.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs border border-[#c8a96e]/30 text-[#c8a96e] px-3 py-1">{comp.sujets[0]}</span>
                    <span className="text-[10px] text-[#333333]">vs</span>
                    <span className="text-xs border border-[#555555]/30 text-[#888888] px-3 py-1">{comp.sujets[1]}</span>
                  </div>
                  <span className="text-[10px] text-[#333333]">·</span>
                  <span className="text-[10px] text-[#333333]">{comp.tableauComparaison.length} critères analysés</span>
                </div>
              </div>
              <span className="text-[#333333] group-hover:text-[#c8a96e] transition-colors mt-1 flex-shrink-0">→</span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
