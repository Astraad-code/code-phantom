import type { Metadata } from "next";
import Link from "next/link";
import CalculateurLux from "@/app/outils/calculateur-lux/CalculateurLux";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Combien de spots par m² ? Calculateur & règle des 3 spots",
  description:
    "Calculez le nombre exact de spots encastrés pour votre pièce : salon, cuisine, bureau, chambre. Règle des spots, espacement optimal, puissance LED recommandée. Calcul gratuit selon EN 12464-1.",
  keywords: ["combien de spots par m2", "nombre de spots plafond", "calculer spots encastrés", "combien de spots cuisine", "spots led par m2"],
  alternates: { canonical: `${siteConfig.url}/outils/combien-de-spots-par-m2` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de spots par m2 pour un salon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un salon résidentiel, comptez 1 spot de 500-700 lm pour 2 à 3 m². Soit environ 8 à 12 spots pour 25 m². La règle empirique donne 20-25 lm/m² pour l'éclairage de fond, mais notre calculateur permet un résultat précis selon votre configuration.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle puissance LED pour des spots encastrés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un spot LED encastré de qualité de 6 à 9W produit 500 à 900 lumens — équivalent à un spot halogène 50W. Pour les espaces de travail, préférez des spots LED 8-12W avec IRC ≥ 90 et température 3000K-4000K.",
      },
    },
    {
      "@type": "Question",
      name: "Quel espacement entre les spots encastrés ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La règle générale : distance entre spots = 1 à 1,5 × la hauteur sous plafond. Pour un plafond à 2,5m, espacez les spots de 2,5 à 3m. Distance des murs : moitié de l'espacement entre spots (1 à 1,5m).",
      },
    },
  ],
};

export default function CombienSpotsPage() {
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
            <span className="text-[#555555]">Combien de spots par m²</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Combien de spots</span>
            <br />
            <span className="text-gradient-gold">par m² ?</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
            La réponse dépend de votre hauteur de plafond, du type de pièce et de l&apos;ambiance souhaitée.
            Notre calculateur vous donne le nombre exact de spots, l&apos;espacement optimal et la puissance totale.
          </p>

          <CalculateurLux />
        </section>

        {/* Reference table */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">
              Référence rapide — Spots par pièce type
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    {["Pièce", "Surface type", "Nb spots", "Flux par spot", "Espacement", "Puissance totale"].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Salon", "25 m²", "10–14", "600 lm", "~1,5m × 1,5m", "80–130W"],
                    ["Cuisine ouverte", "15 m²", "8–12", "700 lm", "~1,2m × 1,2m", "56–96W"],
                    ["Chambre", "16 m²", "6–8", "500 lm", "~1,8m × 1,8m", "36–56W"],
                    ["Bureau individuel", "15 m²", "6–9", "800 lm", "~1,3m × 1,3m", "48–81W"],
                    ["Couloir (3m largeur)", "12 m²", "4–6", "600 lm", "~1,5m axial", "24–48W"],
                    ["Salle de bain", "8 m²", "4–6", "700 lm", "~1,3m × 1,3m", "28–54W"],
                    ["Restaurant (table)", "60 m²", "20–30", "600 lm", "~1,5m × 1,5m", "120–210W"],
                    ["Boutique retail", "80 m²", "30–50", "900 lm", "~1,2m × 1,2m", "240–500W"],
                  ].map(([piece, surface, spots, flux, espacement, puissance]) => (
                    <tr key={piece} className="border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors">
                      <td className="py-3 pr-6 text-[#888888]">{piece}</td>
                      <td className="py-3 pr-6 text-[#666666]">{surface}</td>
                      <td className="py-3 pr-6 text-[#c8a96e] font-medium">{spots}</td>
                      <td className="py-3 pr-6 text-[#666666]">{flux}</td>
                      <td className="py-3 pr-6 text-[#666666]">{espacement}</td>
                      <td className="py-3 text-[#555555]">{puissance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[10px] text-[#333333] mt-4">
              Valeurs calculées pour plafond 2,5m, murs clairs (60%), coefficient d&apos;utilisation 0,75, facteur de maintenance 0,80.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">Questions fréquentes</h2>
          <div className="space-y-3">
            {[
              {
                q: "Combien de spots par m2 pour un salon ?",
                r: "Pour un salon résidentiel, comptez 1 spot de 500-700 lm pour 2 à 3 m². Soit environ 8 à 12 spots pour 25 m². La règle empirique donne 20-25 lm/m² pour l'éclairage de fond, mais notre calculateur permet un résultat précis selon votre configuration.",
              },
              {
                q: "Quelle est la règle des spots encastrés ?",
                r: "La règle pratique : espacement entre spots = 1 à 1,5 × hauteur de plafond. Pour 2,5m de plafond → espacement de 2,5 à 3m. Distance du mur : moitié de l'espacement. Cette règle garantit une uniformité d'éclairage correcte (U0 ≥ 0,60 selon EN 12464-1).",
              },
              {
                q: "Quelle puissance LED pour des spots encastrés ?",
                r: "Un spot LED encastré de qualité de 6 à 9W produit 500 à 900 lumens — équivalent à un spot halogène 50W. Pour les espaces de travail, préférez des spots LED 8-12W avec IRC ≥ 90 et température 3000K-4000K.",
              },
              {
                q: "Peut-on mettre trop de spots au plafond ?",
                r: "Oui. Trop de spots créent un plafond étoilé disgracieux, une consommation inutile et parfois de l'éblouissement (UGR élevé). En résidentiel, 1 spot pour 2-3 m² est souvent suffisant en combinant avec des éclairages d'ambiance (appliques, lampes) pour créer de la profondeur lumineuse.",
              },
              {
                q: "Faut-il des spots orientables ou fixes ?",
                r: "Les spots fixes sont recommandés pour l'éclairage général uniforme. Les spots orientables (GU10 ou LEDs orientables) sont idéaux pour l'accent : éclairer un tableau, une cuisine ouverte, un mur en pierre. Dans un projet premium, on combine les deux types pour créer de la profondeur.",
              },
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
