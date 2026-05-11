import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { normes } from "@/data/normes";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return normes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const norme = normes.find((n) => n.slug === slug);
  if (!norme) return {};
  return {
    title: `${norme.acronyme ?? norme.titre} — Guide complet & valeurs de référence`,
    description: norme.description.slice(0, 160),
    alternates: { canonical: `${siteConfig.url}/normes/${slug}` },
  };
}

export default async function NormePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const norme = normes.find((n) => n.slug === slug);
  if (!norme) notFound();

  const obligationColor = norme.obligation === "obligatoire" ? "#c8a96e" : norme.obligation === "réglementaire" ? "#888" : "#555";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: norme.titre,
    description: norme.description,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/normes/${slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: norme.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.reponse },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/normes" className="hover:text-[#c8a96e] transition-colors">Normes</Link>
            <span>/</span>
            <span className="text-[#555555]">{norme.acronyme ?? norme.titre}</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-[0.2em] uppercase px-2 py-1 border" style={{ color: obligationColor, borderColor: obligationColor + "40" }}>
              {norme.obligation}
            </span>
            <span className="text-[10px] text-[#333333] tracking-[0.1em] uppercase">{norme.categorie}</span>
            {norme.dateApplication && (
              <span className="text-[10px] text-[#333333]">— Version {norme.dateApplication}</span>
            )}
          </div>

          <h1 className="text-4xl lg:text-5xl font-light tracking-tight text-[#f5f5f0] mb-4">
            {norme.acronyme && <span className="text-gradient-gold">{norme.acronyme} — </span>}
            {norme.titre}
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-2xl mb-12">{norme.description}</p>

          {/* Key values */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {norme.valeursCles.map((v) => (
              <div key={v.label} className="bg-[#0a0a0a] border border-[#1a1a1a] p-5">
                <div className="text-[10px] tracking-[0.1em] uppercase text-[#444444] mb-2">{v.label}</div>
                <div className="text-2xl font-light text-[#c8a96e]">
                  {v.valeur}{v.unite && <span className="text-base ml-1 text-[#888888]">{v.unite}</span>}
                </div>
                {v.description && <div className="text-[10px] text-[#333333] mt-1">{v.description}</div>}
              </div>
            ))}
          </div>

          {/* Application domains */}
          <div className="mb-12">
            <h2 className="text-lg font-light text-[#f5f5f0] mb-4 tracking-tight">Domaines d&apos;application</h2>
            <div className="flex flex-wrap gap-2">
              {norme.applicable.map((a) => (
                <span key={a} className="text-xs border border-[#1a1a1a] bg-[#0a0a0a] px-4 py-2 text-[#888888]">{a}</span>
              ))}
            </div>
          </div>

          {/* Tables */}
          {norme.tableaux && norme.tableaux.length > 0 && (
            <div className="mb-12 space-y-8">
              {norme.tableaux.map((tableau) => (
                <div key={tableau.titre}>
                  <h2 className="text-lg font-light text-[#f5f5f0] mb-4 tracking-tight">{tableau.titre}</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="border-b border-[#1a1a1a]">
                          {["Type de local / tâche", "Em (lux)", "UGR max", "IRC min"].map((h) => (
                            <th key={h} className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableau.lignes.map((ligne) => (
                          <tr key={ligne.local} className="border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors">
                            <td className="py-3 pr-6 text-[#888888]">{ligne.local}</td>
                            <td className="py-3 pr-6 text-[#c8a96e] font-medium">{ligne.lux}</td>
                            <td className="py-3 pr-6 text-[#666666]">{ligne.ugr}</td>
                            <td className="py-3 text-[#666666]">{ligne.irc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Common mistakes */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Erreurs courantes à éviter</h2>
                <ul className="space-y-3">
                  {norme.erreursCourantes.map((e) => (
                    <li key={e} className="flex items-start gap-3 text-sm text-[#666666]">
                      <span className="text-red-800 mt-1 flex-shrink-0">·</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Outils liés</h2>
                <div className="space-y-3">
                  {[
                    { href: "/outils/calculateur-lux", label: "Calculateur Lux & Implantation" },
                    { href: "/outils/calculateur-roi-led", label: "Calculateur ROI LED" },
                    { href: "/outils/simulateur-domotique", label: "Simulateur domotique" },
                  ].map((o) => (
                    <Link key={o.href} href={o.href} className="flex items-center gap-2 text-xs text-[#555555] hover:text-[#c8a96e] transition-colors group">
                      <span className="w-2 h-px bg-[#333333] group-hover:bg-[#c8a96e] transition-colors" />
                      {o.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">
            Questions fréquentes — {norme.acronyme ?? norme.titre}
          </h2>
          <div className="space-y-3">
            {norme.faq.map((f, i) => (
              <details key={i} className="group border border-[#1a1a1a] bg-[#0a0a0a]">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-sm text-[#cccccc] group-open:text-[#f5f5f0] pr-4">{f.question}</span>
                  <span className="text-[#c8a96e] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#666666] leading-relaxed">{f.reponse}</div>
              </details>
            ))}
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
