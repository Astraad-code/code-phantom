import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Ressources éclairage — Guides, outils, normes & glossaire",
  description:
    "Hub de ressources techniques sur l'éclairage architectural : calculateurs gratuits, guides experts, normes EN 12464-1, glossaire photométrique, comparatifs protocoles. Tout pour les professionnels.",
  keywords: ["ressources éclairage", "guides éclairage architectural", "outils calcul lumière", "normes éclairage"],
  alternates: { canonical: `${siteConfig.url}/ressources` },
};

const RESSOURCES = [
  {
    categorie: "Outils interactifs",
    icon: "⚡",
    items: [
      { href: "/outils/calculateur-lux", label: "Calculateur Lux & Implantation", desc: "Spots, lumens, conformité EN 12464-1" },
      { href: "/outils/calculateur-roi-led", label: "Calculateur ROI LED", desc: "Économies, retour sur investissement, CO₂" },
      { href: "/outils/temperature-couleur", label: "Simulateur Température de couleur", desc: "2700K vs 3000K vs 4000K visuel" },
      { href: "/outils/simulateur-domotique", label: "Simulateur Domotique", desc: "KNX, DALI ou CASAMBI : lequel choisir" },
      { href: "/outils/combien-de-spots-par-m2", label: "Combien de spots par m² ?", desc: "Calcul express spots encastrés" },
      { href: "/outils/prix-domotique-maison", label: "Prix domotique maison", desc: "Estimatifs KNX, DALI, CASAMBI" },
    ],
  },
  {
    categorie: "Calculateurs par pièce",
    icon: "📐",
    items: [
      { href: "/outils/calcul-eclairage-bureau", label: "Éclairage bureau", desc: "500 lux, UGR<19, EN 12464-1" },
      { href: "/outils/calcul-eclairage-restaurant", label: "Éclairage restaurant", desc: "150-200 lux, IRC 90+, 2700K" },
      { href: "/outils/calcul-eclairage-salon", label: "Éclairage salon", desc: "Ambiance 100-200 lux, 2700K-3000K" },
      { href: "/outils/calcul-eclairage-cuisine", label: "Éclairage cuisine", desc: "Plan travail 500 lux, IRC 90+" },
    ],
  },
  {
    categorie: "Normes & réglementations",
    icon: "📋",
    items: [
      { href: "/normes/en-12464-1", label: "EN 12464-1", desc: "Éclairage intérieur lieux de travail" },
      { href: "/normes/ugr", label: "UGR — Glare Rating", desc: "Limites d'éblouissement" },
      { href: "/normes/irc", label: "IRC — Rendu des couleurs", desc: "Ra et R9 selon usage" },
      { href: "/normes/decret-tertiaire", label: "Décret tertiaire", desc: "-40% à -60% énergie tertiaire" },
      { href: "/normes/bacs", label: "BACS EN 15232", desc: "Automatisation bâtiment classes A-D" },
    ],
  },
  {
    categorie: "Comparatifs techniques",
    icon: "⚖️",
    items: [
      { href: "/comparatifs/knx-vs-dali", label: "KNX vs DALI", desc: "10 critères, cas d'usage, conclusion" },
      { href: "/comparatifs/casambi-vs-dali", label: "CASAMBI vs DALI", desc: "Sans fil ou filaire pour la rénovation" },
      { href: "/comparatifs/knx-vs-casambi", label: "KNX vs CASAMBI", desc: "Complet ou modulaire ?" },
      { href: "/comparatifs/dali-vs-0-10v", label: "DALI vs 0-10V", desc: "Variation numérique vs analogique" },
      { href: "/comparatifs/led-vs-fluorescent", label: "LED vs Fluorescent", desc: "Migration 2025 : ROI et réglementation" },
    ],
  },
  {
    categorie: "Glossaire éclairage",
    icon: "📖",
    items: [
      { href: "/glossaire/lux", label: "Lux — lm/m²", desc: "Mesure de l'éclairement" },
      { href: "/glossaire/lumen", label: "Lumen", desc: "Flux lumineux total" },
      { href: "/glossaire/ugr", label: "UGR", desc: "Glare rating éblouissement" },
      { href: "/glossaire/irc", label: "IRC — Ra", desc: "Indice de rendu des couleurs" },
      { href: "/glossaire/dali", label: "DALI IEC 62386", desc: "Protocole éclairage filaire" },
      { href: "/glossaire/casambi", label: "CASAMBI", desc: "Bluetooth Mesh éclairage" },
    ],
  },
  {
    categorie: "Par secteur d'activité",
    icon: "🏛️",
    items: [
      { href: "/secteurs/hotellerie", label: "Hôtellerie", desc: "IRC 90+, 2700K, scénarios DALI" },
      { href: "/secteurs/restauration", label: "Restauration", desc: "Gastronomie, accent, 2700K-3000K" },
      { href: "/secteurs/bureaux", label: "Bureaux", desc: "500 lux, UGR<19, décret tertiaire" },
      { href: "/secteurs/musee", label: "Musée & galerie", desc: "IRC 98+, UV, fibres optiques" },
      { href: "/secteurs/retail", label: "Retail & boutique", desc: "Mise en valeur produit, 1000 lux accent" },
    ],
  },
];

export default function RessourcesPage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Ressources</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Hub de ressources</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Toutes les</span>{" "}
          <span className="text-gradient-gold">Ressources</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          Calculateurs interactifs, guides techniques, normes commentées, comparatifs indépendants
          et glossaire — toutes les ressources pour concevoir et réaliser des projets d&apos;éclairage
          architectural de qualité.
        </p>

        <div className="space-y-16">
          {RESSOURCES.map((section) => (
            <div key={section.categorie}>
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-6 flex items-center gap-3">
                <span className="text-base">{section.icon}</span>
                <span className="w-6 h-px bg-[#c8a96e]" />
                {section.categorie}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-4 p-4 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="text-xs font-light text-[#f5f5f0] group-hover:text-[#c8a96e] transition-colors mb-1">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-[#444444]">{item.desc}</div>
                    </div>
                    <span className="text-[#333333] group-hover:text-[#c8a96e] text-sm transition-colors flex-shrink-0 mt-0.5">→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
