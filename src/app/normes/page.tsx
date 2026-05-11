import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { normes } from "@/data/normes";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Normes éclairage — EN 12464-1, UGR, IRC, décret tertiaire, BACS",
  description:
    "Guide complet des normes éclairage en vigueur en France : EN 12464-1, UGR, IRC, décret tertiaire 2019, norme BACS EN 15232. Tableaux de valeurs, exigences et conseils d'application.",
  keywords: ["normes éclairage", "EN 12464-1", "UGR", "IRC", "décret tertiaire", "BACS", "réglementation éclairage"],
  alternates: { canonical: `${siteConfig.url}/normes` },
};

export default function NormesPage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Normes</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Référentiel technique</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Normes &</span>{" "}
          <span className="text-gradient-gold">Réglementations</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          Maîtriser les normes en vigueur est indispensable pour concevoir des installations conformes,
          performantes et durables. Retrouvez ici l&apos;ensemble des référentiels qui encadrent l&apos;éclairage
          architectural en France et en Europe.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {normes.map((norme) => (
            <Link
              key={norme.slug}
              href={`/normes/${norme.slug}`}
              className="group flex items-start gap-6 p-6 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 border border-[#1a1a1a] group-hover:border-[#c8a96e]/20 flex items-center justify-center transition-all">
                <span className="text-[10px] tracking-[0.1em] text-[#c8a96e] text-center leading-tight px-1">
                  {norme.acronyme}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-base font-light text-[#f5f5f0] group-hover:text-white transition-colors mb-1">
                  {norme.titre}
                </h2>
                <p className="text-xs text-[#444444] leading-relaxed mb-3">{norme.description}</p>
                <div className="flex flex-wrap gap-2">
                  {norme.valeursCles.slice(0, 3).map((v) => (
                    <span key={v.label} className="text-[9px] tracking-[0.1em] text-[#333333] border border-[#1a1a1a] px-2 py-1">
                      {v.label} : {v.valeur}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[#c8a96e] text-sm flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300 mt-1">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick reference table */}
      <section className="border-t border-[#111111] bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">
            Valeurs d&apos;éclairement de référence (EN 12464-1)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  {["Type de local", "Éclairement (lux)", "UGR max", "IRC min", "Application"].map((h) => (
                    <th key={h} className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bureau individuel / paysager", "500 lux", "19", "80", "Travail sur écran"],
                  ["Salle de réunion", "500 lux", "19", "80", "Conférence, présentation"],
                  ["Hall d'accueil", "200 lux", "22", "80", "Circulation principale"],
                  ["Restaurant / cafétéria", "200 lux", "22", "80", "Restauration collective"],
                  ["Couloir / circulation", "100 lux", "28", "40", "Passage"],
                  ["Chambre hôtel", "100 lux", "19", "80", "Ambiance détente"],
                  ["Salle de classe", "500 lux", "19", "80", "Enseignement"],
                  ["Bloc opératoire", "1000 lux", "19", "90", "Chirurgie (EN 12464-1 Annexe B)"],
                  ["Atelier précision", "1000 lux", "16", "80", "Travail minutieux"],
                  ["Commerce alimentaire", "500 lux", "22", "90", "Mise en valeur produits"],
                ].map(([local, lux, ugr, irc, app]) => (
                  <tr key={local} className="border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors">
                    <td className="py-3 pr-6 text-[#888888]">{local}</td>
                    <td className="py-3 pr-6 text-[#c8a96e] font-medium">{lux}</td>
                    <td className="py-3 pr-6 text-[#666666]">{ugr}</td>
                    <td className="py-3 pr-6 text-[#666666]">{irc}</td>
                    <td className="py-3 text-[#555555]">{app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-[#333333] mt-4">Source : NF EN 12464-1:2021 — Lumière et éclairage — Éclairage des lieux de travail intérieurs</p>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
