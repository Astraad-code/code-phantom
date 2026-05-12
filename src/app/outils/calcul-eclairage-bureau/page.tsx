import type { Metadata } from "next";
import Link from "next/link";
import CalculateurLux from "@/app/outils/calculateur-lux/CalculateurLux";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Calcul éclairage bureau — 500 lux, UGR<19, EN 12464-1",
  description:
    "Calculez l'éclairage de votre bureau selon la norme EN 12464-1 : 500 lux maintenus, UGR<19, IRC≥80. Nombre de luminaires, espacement, puissance et conformité. Outil gratuit.",
  keywords: ["calcul éclairage bureau", "500 lux bureau", "norme éclairage bureau EN 12464-1", "UGR bureau", "luminaires bureau open space"],
  alternates: { canonical: `${siteConfig.url}/outils/calcul-eclairage-bureau` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de lux faut-il dans un bureau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La norme EN 12464-1 impose 500 lux maintenus (Em) sur le plan de travail (0,85m) dans les bureaux et espaces de travail sur écran. L'uniformité minimum est U0 = 0,60 et l'UGR doit rester inférieur à 19.",
      },
    },
    {
      "@type": "Question",
      name: "Quel éclairage choisir pour un bureau open space ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un bureau open space : luminaires LED en grille UGR<19 (dalles LED ou linéaires suspendus), 3000K ou 4000K, IRC≥80. La solution optimale est un système DALI avec variation lumière du jour et détection de présence, permettant 40-60% d'économies d'énergie.",
      },
    },
  ],
};

export default function CalcEclairageBureauPage() {
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
            <span className="text-[#555555]">Calcul éclairage bureau</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-2 py-1">EN 12464-1</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555] border border-[#1a1a1a] px-2 py-1">500 lux · UGR&lt;19 · IRC80+</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Calcul éclairage</span>{" "}
            <span className="text-gradient-gold">Bureau</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
            La norme EN 12464-1 impose 500 lux maintenus sur le plan de travail, UGR inférieur à 19 et IRC
            minimum de 80 dans les bureaux. Calculez votre installation et vérifiez la conformité.
          </p>

          <CalculateurLux />
        </section>

        {/* Bureau-specific content */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
                  Exigences EN 12464-1 pour les bureaux
                </h2>
                <div className="space-y-4">
                  {[
                    { label: "Éclairement maintenu (Em)", valeur: "500 lux", note: "Sur plan de travail à 0,85m" },
                    { label: "Uniformité (U0)", valeur: "≥ 0,60", note: "Emin/Em sur la zone de tâche" },
                    { label: "UGR (éblouissement)", valeur: "< 19", note: "Inconfort psychologique" },
                    { label: "IRC", valeur: "≥ 80", note: "Ra minimum" },
                    { label: "Zone environnante", valeur: "300 lux min", note: "0,5m autour de la zone de tâche" },
                    { label: "Zone de fond", valeur: "100 lux min", note: "Reste du local" },
                  ].map((e) => (
                    <div key={e.label} className="flex items-start gap-4 py-3 border-b border-[#0f0f0f]">
                      <div className="flex-1">
                        <div className="text-xs text-[#888888]">{e.label}</div>
                        <div className="text-[10px] text-[#444444]">{e.note}</div>
                      </div>
                      <div className="text-sm text-[#c8a96e] font-light">{e.valeur}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
                  Économies avec la domotique éclairage
                </h2>
                <div className="space-y-4 text-sm text-[#666666] leading-relaxed">
                  <p>
                    Un bureau éclairé 2 500 h/an peut réduire sa consommation de 40 à 60% en combinant
                    LED performantes (130 lm/W+) avec un système DALI :
                  </p>
                  <ul className="space-y-2 mt-3">
                    {[
                      "Remplacement LED : -30% à -50% vs fluorescent",
                      "Détection de présence : -20% à -35% supplémentaires",
                      "Variation lumière du jour : -15% à -25% supplémentaires",
                      "Scénarios automatiques : -5% à -10%",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-[#c8a96e] mt-1">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#1a1a1a]">
                    <Link href="/outils/calculateur-roi-led" className="text-xs text-[#c8a96e] hover:text-[#e8c98e] transition-colors">
                      Calculer votre ROI LED →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">FAQ — Éclairage bureau</h2>
          <div className="space-y-3">
            {[
              {
                q: "Combien de lux faut-il dans un bureau ?",
                r: "La norme EN 12464-1 impose 500 lux maintenus (Em) sur le plan de travail (0,85m) dans les bureaux. L'uniformité minimum est U0 = 0,60 et l'UGR doit rester inférieur à 19 pour le confort visuel sur écran.",
              },
              {
                q: "Quel éclairage choisir pour un bureau open space ?",
                r: "Pour un bureau open space : luminaires LED en grille UGR<19 (dalles LED 60×60 ou linéaires LED suspendus), 3000K ou 4000K, IRC≥80. La solution optimale est un système DALI avec variation lumière du jour et détection de présence.",
              },
              {
                q: "L'éclairage de bureau est-il soumis au décret tertiaire ?",
                r: "Oui. Les bâtiments tertiaires >1000 m² sont soumis au décret tertiaire (ordonnance 2019-771). L'éclairage représente 30-40% de la consommation électrique totale. La mise en place d'un système DALI avec reporting est la solution recommandée pour atteindre les objectifs -40% à -60%.",
              },
              {
                q: "Dalle LED ou luminaire suspendu pour un bureau ?",
                r: "Les dalles LED encastrées sont adaptées aux plafonds modulaires tertiaires classiques (600×600mm). Les linéaires LED suspendus offrent un meilleur confort visuel (UGR plus bas), une esthétique premium et permettent d'économiser sur le plénum. En rénovation, les dalles sont plus rapides à installer.",
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
