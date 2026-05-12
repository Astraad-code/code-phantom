import type { Metadata } from "next";
import Link from "next/link";
import CalculateurLux from "@/app/outils/calculateur-lux/CalculateurLux";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Calcul éclairage restaurant & gastronomie — 150-200 lux, IRC 90+",
  description:
    "Calculez l'éclairage idéal pour votre restaurant : nombre de spots, puissance, IRC 90+, température 2700K-3000K. Guide complet éclairage gastronomique, brasserie et restaurant.",
  keywords: ["calcul éclairage restaurant", "éclairage gastronomique", "lux restaurant", "IRC restaurant", "2700K restaurant", "spots restaurant"],
  alternates: { canonical: `${siteConfig.url}/outils/calcul-eclairage-restaurant` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de lux dans un restaurant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un restaurant gastronomique fonctionne à 100-200 lux sur les tables (ambiance). La cuisine professionnelle requiert 500 lux (EN 12464-1). En salle, l'accent éclairage des tables avec des spots directionnels crée une mise en valeur à 200-400 lux localement, avec un fond à 50-80 lux.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle température de couleur pour un restaurant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour la restauration gastronomique : 2700K à 3000K avec IRC ≥ 90 (idéalement Ra95). Cette combinaison valorise les couleurs des aliments, crée une ambiance chaleureuse et flatte le teint des convives. Évitez le 4000K en salle, réservé aux cuisines professionnelles.",
      },
    },
  ],
};

export default function CalcEclairaageRestaurantPage() {
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
            <span className="text-[#555555]">Éclairage restaurant</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-2 py-1">Gastronomie</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555] border border-[#1a1a1a] px-2 py-1">2700K · IRC 90+ · 150-200 lux</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Éclairage</span>{" "}
            <span className="text-gradient-gold">Restaurant</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
            L&apos;éclairage d&apos;un restaurant gastronomique est un art en soi. Il doit valoriser les assiettes,
            flatter le teint des convives et créer une ambiance cohérente avec le positionnement.
            IRC 90+, 2700K-3000K et scénarios de service sont les clés.
          </p>

          <CalculateurLux />
        </section>

        {/* Restaurant-specific guide */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="text-lg font-light text-[#f5f5f0] mb-5 tracking-tight">Éclairage par zone</h2>
                <div className="space-y-3">
                  {[
                    { zone: "Tables — ambiance", lux: "100-200 lux", note: "Accent directionnel 2700K" },
                    { zone: "Comptoir / bar", lux: "200-300 lux", note: "Luminaires techniques IRC 90+" },
                    { zone: "Cuisine ouverte", lux: "500 lux", note: "EN 12464-1, UGR<22" },
                    { zone: "Circulations", lux: "50-100 lux", note: "Ambiance, balisage" },
                    { zone: "Toilettes", lux: "200 lux", note: "IRC 80+ minimum" },
                  ].map((z) => (
                    <div key={z.zone} className="py-3 border-b border-[#1a1a1a]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-[#888888]">{z.zone}</span>
                        <span className="text-xs text-[#c8a96e]">{z.lux}</span>
                      </div>
                      <div className="text-[10px] text-[#333333]">{z.note}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-light text-[#f5f5f0] mb-5 tracking-tight">Marques références</h2>
                <div className="space-y-3 text-sm text-[#666666] leading-relaxed">
                  <p><strong className="text-[#888888]">Modular Lighting :</strong> Finition et précision pour la restauration premium. Série Track, Lotis.</p>
                  <p><strong className="text-[#888888]">Prado :</strong> Spots directionnels IRC 95+. Spécialiste gastronomie et hôtellerie.</p>
                  <p><strong className="text-[#888888]">Kreon :</strong> Lignes épurées, intégration architecturale discrète.</p>
                  <p><strong className="text-[#888888]">iGuzzini :</strong> Optiques précises pour l&apos;accent table. Palco, Laser Blade.</p>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-light text-[#f5f5f0] mb-5 tracking-tight">Scénarios domotiques</h2>
                <div className="space-y-2">
                  {[
                    { scenario: "Mise en place", detail: "70% — préparation salle" },
                    { scenario: "Service déjeuner", detail: "80% + naturel" },
                    { scenario: "Service dîner", detail: "50% — ambiance chaude" },
                    { scenario: "Privatif/événement", detail: "Variable selon besoin" },
                    { scenario: "Fermeture/nettoyage", detail: "100% — lumière pleine" },
                  ].map((s) => (
                    <div key={s.scenario} className="flex justify-between items-center py-2 border-b border-[#0f0f0f] text-xs">
                      <span className="text-[#888888]">{s.scenario}</span>
                      <span className="text-[#555555]">{s.detail}</span>
                    </div>
                  ))}
                </div>
                <Link href="/outils/simulateur-domotique" className="inline-block mt-4 text-xs text-[#c8a96e] hover:text-[#e8c98e] transition-colors">
                  Simulateur domotique →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8">FAQ — Éclairage restaurant</h2>
          <div className="space-y-3">
            {[
              { q: "Combien de lux dans un restaurant ?", r: "Un restaurant gastronomique fonctionne à 100-200 lux sur les tables. La cuisine professionnelle requiert 500 lux (EN 12464-1). L'accent éclairage des tables avec spots directionnels crée une mise en valeur locale à 200-400 lux, avec un fond à 50-80 lux pour l'ambiance." },
              { q: "Quelle température de couleur pour un restaurant ?", r: "Pour la restauration gastronomique : 2700K à 3000K avec IRC ≥ 90 (idéalement Ra95). Cette combinaison valorise les couleurs des aliments, crée une ambiance chaleureuse et flatte le teint des convives. Évitez le 4000K en salle, réservé aux cuisines professionnelles." },
              { q: "Faut-il des spots orientables ou des luminaires fixes en restaurant ?", r: "Les deux. Les spots orientables sur rail permettent d'ajuster l'accent selon la disposition des tables, très utile en configuration changeante. Les luminaires architecturaux encastrés fixes créent la structure lumineuse permanente. Les deux combinés constituent l'approche premium." },
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
