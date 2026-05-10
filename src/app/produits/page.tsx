import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { partners, siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Produits — Luminaires architecturaux & domotique",
  description:
    "Découvrez notre gamme de luminaires architecturaux Modular, Kreon, iGuzzini, Luce & Light et nos solutions domotique HELVAR. Spots encastrés, luminaires linéaires, éclairage extérieur.",
  alternates: { canonical: `${siteConfig.url}/produits` },
};

const categories = [
  {
    id: "spots-encastres",
    title: "Spots encastrés",
    description: "Éclairage de précision intégré dans le plafond. Finitions invisibles, angles de faisceau précis, variation complète. La signature de l'éclairage architectural haut de gamme.",
    brands: ["Modular", "Kreon", "iGuzzini"],
    count: 40,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70&auto=format&fit=crop",
  },
  {
    id: "luminaires-lineaires",
    title: "Luminaires linéaires",
    description: "Profilés LED et luminaires linéaires pour continuité lumineuse parfaite. Intégrés dans les faux-plafonds, les cloisons ou en saillie selon l'architecture.",
    brands: ["Modular", "Luce & Light"],
    count: 25,
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=70&auto=format&fit=crop",
  },
  {
    id: "eclairage-indirect",
    title: "Éclairage indirect",
    description: "Lumière diffuse et douce pour ambiances résidentielles premium. Corniches lumineuses, niches éclairées, plafonds tendus lumineux.",
    brands: ["Prado", "Luce & Light"],
    count: 18,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=70&auto=format&fit=crop",
  },
  {
    id: "eclairage-tertiaire",
    title: "Éclairage tertiaire",
    description: "Solutions conformes EN 12464-1 pour bureaux, open spaces, salles de réunion. UGR maîtrisé, gestion DALI, efficacité énergétique maximale.",
    brands: ["iGuzzini", "Luce & Light", "Modular"],
    count: 35,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=70&auto=format&fit=crop",
  },
  {
    id: "eclairage-exterieur",
    title: "Éclairage extérieur",
    description: "Façades, jardins, allées, parkings — l'éclairage architectural en dehors de vos murs. IP65/IP67, résistance aux UV, finitions premium.",
    brands: ["Prado", "iGuzzini"],
    count: 22,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70&auto=format&fit=crop",
  },
  {
    id: "domotique-controle",
    title: "Domotique & contrôle",
    description: "Systèmes DALI, CASAMBI, KNX pour piloter intelligemment votre éclairage. Scénarios automatisés, détection présence, économies d'énergie.",
    brands: ["HELVAR"],
    count: 15,
    image: "https://images.unsplash.com/photo-1558002038-bb4237bb3cb5?w=600&q=70&auto=format&fit=crop",
  },
];

export default function ProductsPage() {
  return (
    <div className="pt-28">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <SectionLabel className="mb-8">Nos produits</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h1 className="text-5xl lg:text-6xl font-light tracking-tight">
            <span className="text-[#f5f5f0]">Les meilleures marques,</span>
            <br />
            <span className="text-gradient-gold">sélectionnées pour vous.</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xs">
            Code Phantom distribue une sélection exclusive de luminaires architecturaux
            des plus grandes marques mondiales, pour chaque type de projet.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-14">
        <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-5 flex items-start gap-4">
          <div className="w-1 h-full bg-[#c8a96e] flex-shrink-0 min-h-[2rem]" />
          <p className="text-xs text-[#555555] leading-relaxed">
            Nous ne vendons pas directement en ligne. Chaque projet fait l&apos;objet d&apos;une sélection
            personnalisée de luminaires adaptés à vos besoins, votre architecture et votre budget.
            <Link href="/contact" className="text-[#c8a96e] hover:text-[#e8c98e] ml-1 transition-colors">
              Contactez-nous pour un devis personnalisé →
            </Link>
          </p>
        </div>
      </div>

      {/* Categories grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href="/contact"
              className="group relative overflow-hidden bg-[#0a0a0a] border border-[#111111] hover:border-[#2a2a2a] transition-all duration-300"
            >
              <div
                className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${cat.image}')`, opacity: 0.4 }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-base font-light text-[#f5f5f0] tracking-tight group-hover:text-[#c8a96e]/90 transition-colors duration-300">
                    {cat.title}
                  </h2>
                  <span className="text-[10px] text-[#333333] flex-shrink-0">{cat.count}+ réf.</span>
                </div>
                <p className="text-xs text-[#555555] leading-relaxed mb-4 line-clamp-3">
                  {cat.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.brands.map((b) => (
                    <span key={b} className="text-[9px] tracking-[0.15em] uppercase border border-[#1a1a1a] px-2 py-1 text-[#444444]">
                      {b}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#444444] group-hover:text-[#c8a96e] transition-colors duration-300">
                  Demander un devis <ArrowRight size={11} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Partners section */}
      <section className="bg-[#060606] border-t border-[#111111] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionLabel className="mb-10">Nos marques partenaires</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#111111]">
            {partners.map((partner) => (
              <div key={partner.id} className="group bg-[#060606] hover:bg-[#0a0a0a] p-6 transition-colors duration-300">
                <div className="text-lg font-light tracking-[0.08em] uppercase text-[#333333] group-hover:text-[#888888] transition-colors duration-300 mb-2">
                  {partner.name}
                </div>
                <div className="text-[10px] text-[#2a2a2a] group-hover:text-[#444444] transition-colors duration-300">
                  {partner.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
