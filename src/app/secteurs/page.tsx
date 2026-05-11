import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { secteurs } from "@/data/secteurs";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Éclairage par secteur — Hôtellerie, bureaux, restauration, musée, retail",
  description:
    "Normes, solutions et recommandations d'éclairage architectural par secteur d'activité : hôtellerie, restauration, bureaux, villa de luxe, musée, retail, santé et éducation.",
  keywords: ["éclairage hôtellerie", "éclairage bureau", "éclairage restauration", "éclairage musée", "normes éclairage par secteur"],
  alternates: { canonical: `${siteConfig.url}/secteurs` },
};

export default function SecteursPage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Secteurs</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Expertise sectorielle</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Éclairage</span>{" "}
          <span className="text-gradient-gold">par secteur</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          Chaque secteur d&apos;activité a ses propres contraintes normatives, ses températures de couleur
          idéales et ses défis techniques. Retrouvez nos recommandations spécialisées.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {secteurs.map((secteur) => (
            <Link
              key={secteur.slug}
              href={`/secteurs/${secteur.slug}`}
              className="group relative p-7 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.04) 0%, transparent 60%)" }} />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{secteur.icon}</span>
                  <h2 className="text-lg font-light text-[#f5f5f0] group-hover:text-white transition-colors">
                    {secteur.name}
                  </h2>
                </div>
                <span className="text-[#333333] group-hover:text-[#c8a96e] transition-colors mt-1">→</span>
              </div>

              <p className="text-xs text-[#555555] leading-relaxed mb-5">{secteur.description}</p>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#050505] border border-[#111111] p-3">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-1">Lux recommandé</div>
                  <div className="text-sm text-[#c8a96e]">{secteur.luxRecommande}</div>
                </div>
                <div className="bg-[#050505] border border-[#111111] p-3">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-1">UGR max</div>
                  <div className="text-sm text-[#888888]">&lt;{secteur.ugrMax}</div>
                </div>
                <div className="bg-[#050505] border border-[#111111] p-3">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-1">IRC min</div>
                  <div className="text-sm text-[#888888]">{secteur.ircMin}+</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
