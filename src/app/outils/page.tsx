import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Outils éclairage gratuits — Calculateurs & simulateurs architecturaux",
  description:
    "Calculateur lux, ROI LED, simulateur température de couleur, simulateur domotique KNX/DALI/CASAMBI. Outils gratuits pour professionnels de l'éclairage architectural.",
  keywords: ["calculateur lux", "simulateur éclairage", "ROI LED", "outils éclairage", "calculateur lumens", "simulateur domotique"],
  alternates: { canonical: `${siteConfig.url}/outils` },
};

const OUTILS = [
  {
    href: "/outils/calculateur-lux",
    label: "Calculateur Lux & Implantation",
    desc: "Calculez le nombre de luminaires nécessaires, leur espacement optimal et la conformité EN 12464-1 selon le type d'espace.",
    tags: ["EN 12464-1", "Flux lumineux", "Plan d'implantation"],
    badge: "Populaire",
  },
  {
    href: "/outils/calculateur-roi-led",
    label: "Calculateur ROI LED",
    desc: "Estimez vos économies annuelles, retour sur investissement et réduction CO₂ lors d'un passage à l'éclairage LED moderne.",
    tags: ["Économies énergie", "Décret tertiaire", "CO₂"],
    badge: null,
  },
  {
    href: "/outils/temperature-couleur",
    label: "Simulateur Température de couleur",
    desc: "Comparez visuellement 2 700K, 3 000K, 4 000K et 5 000K pour choisir la bonne ambiance lumineuse selon votre usage.",
    tags: ["2700K / 3000K", "Ambiance", "IRC"],
    badge: null,
  },
  {
    href: "/outils/simulateur-domotique",
    label: "Simulateur Domotique",
    desc: "KNX, DALI ou CASAMBI ? Répondez à 4 questions pour obtenir une recommandation de protocole adaptée à votre projet.",
    tags: ["KNX", "DALI", "CASAMBI"],
    badge: "Nouveau",
  },
];

export default function OutilsPage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Outils</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Ressources gratuites</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Outils</span>{" "}
          <span className="text-gradient-gold">Éclairage & Domotique</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          Calculateurs et simulateurs développés par nos ingénieurs pour aider les professionnels
          à dimensionner, comparer et optimiser leurs projets d&apos;éclairage architectural.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {OUTILS.map((outil) => (
            <Link
              key={outil.href}
              href={outil.href}
              className="group relative p-7 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-500"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(200,169,110,0.04) 0%, transparent 60%)" }} />

              {outil.badge && (
                <div className="inline-block text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-2 py-0.5 mb-4">
                  {outil.badge}
                </div>
              )}

              <h2 className="text-lg font-light text-[#f5f5f0] mb-3 group-hover:text-white transition-colors">
                {outil.label}
              </h2>
              <p className="text-sm text-[#555555] leading-relaxed mb-5">{outil.desc}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {outil.tags.map((tag) => (
                    <span key={tag} className="text-[9px] tracking-[0.1em] uppercase text-[#333333] border border-[#1a1a1a] px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[#c8a96e] text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-links to normes */}
      <section className="border-t border-[#111111] bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Normes & réglementations</h2>
              <div className="space-y-3">
                {[
                  { href: "/normes/en-12464-1", label: "EN 12464-1 — Éclairage intérieur", sub: "Valeurs d'éclairement par type de local" },
                  { href: "/normes/ugr", label: "UGR — Unified Glare Rating", sub: "Limites d'éblouissement EN 12464-1" },
                  { href: "/normes/irc", label: "IRC — Indice de Rendu des Couleurs", sub: "Ra minimum selon les espaces" },
                  { href: "/normes/decret-tertiaire", label: "Décret tertiaire", sub: "Objectifs -40% à -60% d'énergie" },
                  { href: "/normes/bacs", label: "BACS EN 15232", sub: "Automatisation du bâtiment — classes A à D" },
                ].map((n) => (
                  <Link key={n.href} href={n.href} className="flex items-start gap-3 group">
                    <span className="w-2 h-px bg-[#1a1a1a] group-hover:bg-[#c8a96e] mt-2.5 transition-colors flex-shrink-0" />
                    <div>
                      <div className="text-xs text-[#888888] group-hover:text-[#c8a96e] transition-colors">{n.label}</div>
                      <div className="text-[10px] text-[#333333]">{n.sub}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Glossaire éclairage</h2>
              <div className="flex flex-wrap gap-2">
                {["Lux", "Lumen", "Candela", "UGR", "IRC", "R9", "DALI", "CASAMBI", "KNX", "Facteur de maintenance", "DIALux EVO", "Efficacité lumineuse", "Température de couleur", "Flux lumineux", "Ballast DALI", "Détecteur DALI"].map((terme) => (
                  <Link
                    key={terme}
                    href={`/glossaire/${terme.toLowerCase().replace(/\s+/g, "-").replace(/[éè]/g, "e").replace(/[àâ]/g, "a")}`}
                    className="text-[10px] border border-[#1a1a1a] px-3 py-1.5 text-[#555555] hover:border-[#c8a96e]/30 hover:text-[#888888] transition-all"
                  >
                    {terme}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
