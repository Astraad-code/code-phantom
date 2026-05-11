import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { glossaire } from "@/data/glossaire";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return glossaire.map((t) => ({ terme: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ terme: string }> }): Promise<Metadata> {
  const { terme: termeSlug } = await params;
  const terme = glossaire.find((t) => t.slug === termeSlug);
  if (!terme) return {};
  return {
    title: `${terme.terme} — Définition éclairage architectural`,
    description: terme.definition + (terme.valeursTypiques ? ` Valeurs typiques : ${terme.valeursTypiques}.` : ""),
    alternates: { canonical: `${siteConfig.url}/glossaire/${termeSlug}` },
  };
}

export default async function TermePage({ params }: { params: Promise<{ terme: string }> }) {
  const { terme: termeSlug } = await params;
  const terme = glossaire.find((t) => t.slug === termeSlug);
  if (!terme) notFound();

  const relatedTermes = terme.voisins
    ? glossaire.filter((t) => terme.voisins!.includes(t.slug))
    : glossaire.filter((t) => t.categorie === terme.categorie && t.slug !== terme.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: terme.terme,
    description: terme.definition,
    inDefinedTermSet: `${siteConfig.url}/glossaire`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/glossaire" className="hover:text-[#c8a96e] transition-colors">Glossaire</Link>
            <span>/</span>
            <span className="text-[#555555]">{terme.terme}</span>
          </nav>
        </div>

        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#c8a96e] border border-[#c8a96e]/30 px-2 py-1">
              {terme.categorie}
            </span>
            {terme.uniteMesure && (
              <span className="text-[9px] tracking-[0.15em] text-[#555555] border border-[#1a1a1a] px-2 py-1">
                Unité : {terme.uniteMesure}
              </span>
            )}
          </div>

          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">
            <span className="text-gradient-gold">{terme.terme}</span>
          </h1>

          <p className="text-base text-[#f5f5f0] leading-relaxed mb-8 font-light">{terme.definition}</p>
          <p className="text-sm text-[#666666] leading-relaxed mb-10">{terme.explication}</p>

          {terme.valeursTypiques && (
            <div className="bg-[#0a0a0a] border border-[#c8a96e]/20 p-6 mb-10">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-3">Valeurs typiques</div>
              <p className="text-sm text-[#888888] leading-relaxed">{terme.valeursTypiques}</p>
            </div>
          )}

          {terme.exemple && (
            <div className="border-l-2 border-[#c8a96e]/30 pl-5 mb-10">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#444444] mb-2">Exemple concret</div>
              <p className="text-sm text-[#666666] leading-relaxed italic">{terme.exemple}</p>
            </div>
          )}

          {/* Related terms */}
          {relatedTermes.length > 0 && (
            <div>
              <h2 className="text-sm font-light text-[#f5f5f0] mb-4 tracking-tight">Termes associés</h2>
              <div className="flex flex-wrap gap-3">
                {relatedTermes.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossaire/${t.slug}`}
                    className="text-xs border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-2 text-[#666666] hover:border-[#c8a96e]/30 hover:text-[#888888] transition-all"
                  >
                    {t.terme}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Navigation within glossary */}
        <section className="border-t border-[#111111] bg-[#060606] py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-light text-[#f5f5f0]">Autres termes — {terme.categorie}</h2>
              <Link href="/glossaire" className="text-xs text-[#555555] hover:text-[#c8a96e] transition-colors">
                Voir tout le glossaire →
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {glossaire
                .filter((t) => t.categorie === terme.categorie && t.slug !== terme.slug)
                .map((t) => (
                  <Link
                    key={t.slug}
                    href={`/glossaire/${t.slug}`}
                    className="text-xs border border-[#1a1a1a] px-3 py-1.5 text-[#444444] hover:border-[#c8a96e]/30 hover:text-[#888888] transition-all"
                  >
                    {t.terme}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
