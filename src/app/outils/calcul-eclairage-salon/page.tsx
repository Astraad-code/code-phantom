import type { Metadata } from "next";
import Link from "next/link";
import CalculateurLux from "@/app/outils/calculateur-lux/CalculateurLux";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Calcul éclairage salon — Nombre de spots, lumens & ambiance",
  description:
    "Calculez l'éclairage idéal pour votre salon : nombre de spots, lumens nécessaires, température de couleur 2700K-3000K, espacement optimal. Outil gratuit pour résidentiel premium.",
  keywords: ["calcul éclairage salon", "combien de spots salon", "luminaires salon", "éclairage ambiance salon", "spots salon 2700K"],
  alternates: { canonical: `${siteConfig.url}/outils/calcul-eclairage-salon` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien de lux pour un salon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un salon résidentiel nécessite 100 à 200 lux pour l'éclairage d'ambiance général, et jusqu'à 400 lux en éclairage de lecture. La clé est de combiner plusieurs sources : éclairage général de fond (50-100 lux), éclairage d'accent sur les œuvres ou le mobilier (200-500 lux localement) et éclairage d'ambiance (lampes, appliques).",
      },
    },
    {
      "@type": "Question",
      name: "Quelle température de couleur pour un salon ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un salon résidentiel premium : 2700K (blanc très chaud, ambiance cosy) ou 3000K (blanc chaud, légèrement plus lumineux). Évitez le 4000K dans les pièces de vie — trop froid et clinique. L'idéal est un système à variation permettant de passer de 2700K le soir à 3000K en journée.",
      },
    },
  ],
};

export default function CalcEclairageSalonPage() {
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
            <span className="text-[#555555]">Calcul éclairage salon</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-2 py-1">Résidentiel</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#555555] border border-[#1a1a1a] px-2 py-1">2700K–3000K · IRC 90+</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Éclairage</span>{" "}
            <span className="text-gradient-gold">Salon</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
            Le salon est la pièce de vie par excellence. Son éclairage doit être polyvalent :
            ambiance chaleureuse le soir, fonctionnel en journée, et capable de créer des scénarios
            selon l&apos;usage — détente, réception, lecture. La clé : plusieurs sources, plusieurs hauteurs.
          </p>

          <CalculateurLux />
        </section>

        {/* Salon guide */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">
              Les 4 couches d&apos;éclairage d&apos;un salon premium
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {[
                {
                  num: "01",
                  titre: "Éclairage général",
                  desc: "Spots encastrés ou plafonnier central. Crée la base lumineuse de 80-150 lux. Dimmable, en fond de scène.",
                  ex: "Spots LED encastrés 2700K, 600 lm, espacement 1,5m",
                },
                {
                  num: "02",
                  titre: "Éclairage d'accent",
                  desc: "Spots orientables ou projecteurs sur tableau, meuble, architecture. Crée de la profondeur et du relief.",
                  ex: "Spots orientables sur rail ou spots encastrés orientables",
                },
                {
                  num: "03",
                  titre: "Éclairage de lecture",
                  desc: "Lumière directionnelle pour canapé ou fauteuil de lecture. 200-400 lux locaux sans éblouir l'espace.",
                  ex: "Lampe sur pied ou spot directionnel mural 3000K IRC90",
                },
                {
                  num: "04",
                  titre: "Éclairage d'ambiance",
                  desc: "Lampes de table, appliques, ruban LED indirect. Crée la chaleur et l'atmosphère du soir.",
                  ex: "Ruban LED indirect 2700K derrière meuble TV ou corniche",
                },
              ].map((c) => (
                <div key={c.num} className="bg-[#0a0a0a] border border-[#1a1a1a] p-5">
                  <div className="text-3xl font-light text-[#1a1a1a] mb-3">{c.num}</div>
                  <h3 className="text-sm font-light text-[#f5f5f0] mb-2">{c.titre}</h3>
                  <p className="text-xs text-[#555555] leading-relaxed mb-3">{c.desc}</p>
                  <p className="text-[10px] text-[#333333] italic">{c.ex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8">FAQ — Éclairage salon</h2>
          <div className="space-y-3">
            {[
              { q: "Combien de lux pour un salon ?", r: "Un salon résidentiel nécessite 100 à 200 lux pour l'éclairage d'ambiance général, et jusqu'à 400 lux localement pour la lecture. La clé est de combiner plusieurs sources : éclairage général (50-100 lux), accent sur les éléments décoratifs et éclairage d'ambiance." },
              { q: "Quelle température de couleur pour un salon ?", r: "Pour un salon premium : 2700K (très chaud, romantique) ou 3000K (chaud, polyvalent). Évitez le 4000K en pièce de vie. L'idéal est un système Tunable White (variation de 2700K à 4000K) ou deux circuits séparés pour créer des ambiances différentes selon l'heure." },
              { q: "Faut-il un variateur pour les spots salon ?", r: "Oui, le variateur est indispensable dans un salon de qualité. Il permet d'adapter l'intensité lumineuse selon l'usage (lecture à 70%, dîner à 30%, film à 10%). Choisissez des spots compatibles avec votre variateur (DALI, phase, 0-10V) pour éviter le scintillement." },
              { q: "Combien de spots pour un salon de 25 m² ?", r: "Pour un salon de 25 m² (plafond 2,5m) : 10 à 14 spots de 600-700 lm pour l'éclairage général, plus 4 à 6 spots orientables pour l'accent. L'espacement idéal est de 1,5m × 1,5m. Utilisez notre calculateur ci-dessus pour un résultat précis selon votre configuration." },
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
