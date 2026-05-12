import type { Metadata } from "next";
import Link from "next/link";
import CalculateurLux from "@/app/outils/calculateur-lux/CalculateurLux";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Calcul éclairage cuisine — Plan de travail, îlot & ambiance",
  description:
    "Calculez l'éclairage de votre cuisine : plan de travail 500 lux, îlot central, crédence. Spots encastrés, sous-meuble LED, IRC 90+. Outil gratuit cuisine ouverte et fermée.",
  keywords: ["calcul éclairage cuisine", "spots cuisine combien", "éclairage plan travail cuisine", "lumière sous meuble cuisine", "lux cuisine"],
  alternates: { canonical: `${siteConfig.url}/outils/calcul-eclairage-cuisine` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de lux pour une cuisine ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La cuisine nécessite différents niveaux selon les zones : plan de travail 500 lux (activité précise), îlot central 300-500 lux, éclairage général 200-300 lux, zone repas 150-200 lux. L'éclairage sous-meuble est essentiel pour le plan de travail — il évite l'ombre portée du corps.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle température de couleur pour une cuisine ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour une cuisine fermée ou professionnelle : 4000K (blanc neutre, fonctionnel, excellente visibilité). Pour une cuisine ouverte sur salon : 3000K pour maintenir la cohérence avec la pièce de vie. L'IRC doit être ≥ 90 pour bien distinguer les couleurs des aliments.",
      },
    },
  ],
};

export default function CalcEclairageCuisinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/outils" className="hover:text-[#c8a96e] transition-colors">Outils</Link>
            <span>/</span>
            <span className="text-[#555555]">Éclairage cuisine</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-2 py-1">Résidentiel</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555] border border-[#1a1a1a] px-2 py-1">3000K–4000K · IRC 90+ · 300-500 lux</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Éclairage</span>{" "}
            <span className="text-gradient-gold">Cuisine</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
            La cuisine cumule plusieurs usages : cuisine précise, repas, convivialité.
            Chaque zone a ses exigences propres. Le plan de travail réclame 500 lux fonctionnels,
            tandis que la zone repas préfère 150-200 lux d&apos;ambiance. L&apos;éclairage sous-meuble
            est non négociable pour la sécurité et le confort.
          </p>

          <CalculateurLux />
        </section>

        {/* Zones guide */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">
              Éclairage par zone — cuisine de référence
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    {["Zone", "Lux recommandés", "Température", "IRC", "Type luminaire"].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Plan de travail", "500 lux", "3000K–4000K", "90+", "LED sous-meuble + spots plafond"],
                    ["Îlot central", "400 lux", "3000K–4000K", "90+", "Suspensions LED ou spots orientables"],
                    ["Zone de cuisson", "500 lux", "4000K", "80+", "Hotte avec éclairage intégré"],
                    ["Éclairage général", "200-300 lux", "3000K–4000K", "80+", "Spots encastrés plafond"],
                    ["Zone repas ouverte", "150-200 lux", "3000K", "80+", "Suspension, spots orientables"],
                    ["Crédence / niche", "Accent", "2700K–3000K", "90+", "Ruban LED ou mini-spots"],
                    ["Intérieur placards", "100 lux min", "4000K", "80+", "Détection automatique"],
                  ].map(([zone, lux, temp, irc, type]) => (
                    <tr key={zone} className="border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors">
                      <td className="py-3 pr-6 text-[#888888]">{zone}</td>
                      <td className="py-3 pr-6 text-[#c8a96e] font-medium">{lux}</td>
                      <td className="py-3 pr-6 text-[#666666]">{temp}</td>
                      <td className="py-3 pr-6 text-[#666666]">{irc}</td>
                      <td className="py-3 text-[#555555]">{type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8">FAQ — Éclairage cuisine</h2>
          <div className="space-y-3">
            {[
              { q: "Combien de lux pour une cuisine ?", r: "La cuisine nécessite différents niveaux selon les zones : plan de travail 500 lux (activité précise), îlot central 300-500 lux, éclairage général 200-300 lux, zone repas 150-200 lux. L'éclairage sous-meuble est essentiel pour le plan de travail — il évite l'ombre portée du corps." },
              { q: "Quelle température de couleur pour une cuisine ?", r: "Pour une cuisine fermée : 4000K (blanc neutre, fonctionnel). Pour une cuisine ouverte sur salon : 3000K pour la cohérence avec la pièce de vie. L'IRC doit être ≥ 90 pour bien distinguer les couleurs des aliments lors de la préparation." },
              { q: "L'éclairage sous-meuble est-il obligatoire ?", r: "Non obligatoire mais vivement recommandé. Sans éclairage sous-meuble, le corps fait de l'ombre sur le plan de travail lors de la découpe — dangereux et fatigant. Des rubans LED 500 lm/m ou des linéaires LED fins (30mm) sous les meubles hauts sont la solution standard premium." },
              { q: "Combien de spots pour une cuisine de 12 m² ?", r: "Pour une cuisine de 12 m² (plafond 2,5m) : 8 à 12 spots de 600-700 lm pour l'éclairage général, plus des spots orientables sur l'îlot. Ajoutez l'éclairage sous-meuble (ruban LED ou linéaires). Total conseillé : 12-16 points lumineux selon la disposition." },
            ].map((f, i) => (
              <details key={i} className="group border border-[#1a1a1a] bg-[#0a0a0a]">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-sm text-[#cccccc] group-open:text-[#f5f5f0] pr-4">{f.q}</span>
                  <span className="text-[#c8a96e] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#666666] leading-relaxed">{f.r}</div>
              </details>
            ))}
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
