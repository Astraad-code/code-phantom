import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import { glossaire } from "@/data/glossaire";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Glossaire éclairage architectural — Lux, Lumen, UGR, IRC, DALI, KNX",
  description:
    "Définitions complètes des termes techniques de l'éclairage architectural : lux, lumen, candela, UGR, IRC, R9, DALI, CASAMBI, KNX, facteur de maintenance, DIALux. Guide pour professionnels.",
  keywords: ["glossaire éclairage", "définition lux", "UGR définition", "IRC photométrie", "termes éclairage architectural"],
  alternates: { canonical: `${siteConfig.url}/glossaire` },
};

const categories = [...new Set(glossaire.map((t) => t.categorie))];

export default function GlossairePage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Glossaire</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Référentiel technique</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Glossaire</span>{" "}
          <span className="text-gradient-gold">Éclairage architectural</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          {glossaire.length} termes essentiels pour comprendre et concevoir des projets d&apos;éclairage
          architectural de qualité — photométrie, confort visuel, protocoles domotiques et outils de conception.
        </p>

        {categories.map((cat) => (
          <div key={cat} className="mb-12">
            <h2 className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#c8a96e]" />{cat}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {glossaire
                .filter((t) => t.categorie === cat)
                .map((terme) => (
                  <Link
                    key={terme.slug}
                    href={`/glossaire/${terme.slug}`}
                    className="group flex items-start gap-4 p-5 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-light text-[#f5f5f0] group-hover:text-white transition-colors">
                          {terme.terme}
                        </span>
                        {terme.uniteMesure && (
                          <span className="text-[9px] tracking-[0.1em] text-[#c8a96e] border border-[#c8a96e]/20 px-1.5 py-0.5">
                            {terme.uniteMesure}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#444444] leading-relaxed line-clamp-2">{terme.definition}</p>
                    </div>
                    <span className="text-[#333333] group-hover:text-[#c8a96e] transition-colors mt-1">→</span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      <CtaBanner />
    </div>
  );
}
