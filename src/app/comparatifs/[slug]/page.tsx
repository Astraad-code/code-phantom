import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { comparatifs } from "@/data/comparatifs";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return comparatifs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparatifs.find((c) => c.slug === slug);
  if (!comp) return {};
  return {
    title: comp.titre,
    description: comp.description,
    keywords: comp.keywords,
    alternates: { canonical: `${siteConfig.url}/comparatifs/${slug}` },
  };
}

const AVANTAGE_LABELS: Record<string, string> = { a: "→", b: "←", egal: "=" };

export default async function ComparatifPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const comp = comparatifs.find((c) => c.slug === slug);
  if (!comp) notFound();

  const [sujetA, sujetB] = comp.sujets;

  const scoreA = comp.tableauComparaison.filter((r) => r.avantage === "a").length;
  const scoreB = comp.tableauComparaison.filter((r) => r.avantage === "b").length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: comp.titre,
    description: comp.description,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comp.faq.map((f) => ({
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
            <Link href="/comparatifs" className="hover:text-[#c8a96e] transition-colors">Comparatifs</Link>
            <span>/</span>
            <span className="text-[#555555]">{sujetA} vs {sujetB}</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-gradient-gold">{sujetA}</span>
            <span className="text-[#333333] mx-4 text-3xl">vs</span>
            <span className="text-[#f5f5f0]">{sujetB}</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-2xl mb-12">{comp.description}</p>

          {/* Score header */}
          <div className="grid grid-cols-3 gap-0 mb-12 border border-[#1a1a1a]">
            <div className="p-6 bg-[#0a0a0a] text-center">
              <div className="text-3xl font-light text-[#c8a96e] mb-1">{scoreA}</div>
              <div className="text-xs text-[#444444] tracking-[0.1em] uppercase">{sujetA}</div>
            </div>
            <div className="p-6 bg-[#060606] text-center border-x border-[#1a1a1a]">
              <div className="text-lg font-light text-[#222222] mb-1">
                {comp.champion ? `→ ${comp.champion}` : "Égalité"}
              </div>
              <div className="text-[10px] text-[#333333] tracking-[0.1em] uppercase">
                {comp.tableauComparaison.filter((r) => r.avantage === "egal").length} ex aequo
              </div>
            </div>
            <div className="p-6 bg-[#0a0a0a] text-center">
              <div className="text-3xl font-light text-[#888888] mb-1">{scoreB}</div>
              <div className="text-xs text-[#444444] tracking-[0.1em] uppercase">{sujetB}</div>
            </div>
          </div>

          {/* Comparison table */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Tableau comparatif détaillé</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    <th className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase w-1/4">Critère</th>
                    <th className="text-left py-3 pr-6 text-[#c8a96e] font-normal tracking-[0.1em] uppercase w-1/3">{sujetA}</th>
                    <th className="text-left py-3 pr-6 text-[#888888] font-normal tracking-[0.1em] uppercase w-1/3">{sujetB}</th>
                    <th className="text-center py-3 text-[#444444] font-normal tracking-[0.1em] uppercase w-12">+</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.tableauComparaison.map((ligne) => (
                    <tr
                      key={ligne.critere}
                      className={`border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors ${ligne.poids === "critique" ? "bg-[#080808]" : ""}`}
                    >
                      <td className="py-3 pr-6">
                        <div className="text-[#888888]">{ligne.critere}</div>
                        {ligne.poids === "critique" && (
                          <div className="text-[9px] text-[#c8a96e] mt-0.5">Critique</div>
                        )}
                      </td>
                      <td className={`py-3 pr-6 ${ligne.avantage === "a" ? "text-[#c8a96e]" : "text-[#555555]"}`}>
                        {ligne.a}
                      </td>
                      <td className={`py-3 pr-6 ${ligne.avantage === "b" ? "text-[#f5f5f0]" : "text-[#444444]"}`}>
                        {ligne.b}
                      </td>
                      <td className="py-3 text-center">
                        <span className={`text-sm ${ligne.avantage === "a" ? "text-[#c8a96e]" : ligne.avantage === "b" ? "text-[#888888]" : "text-[#333333]"}`}>
                          {AVANTAGE_LABELS[ligne.avantage]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Use cases */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#0a0a0a] border border-[#c8a96e]/20 p-6">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-4">Choisir {sujetA} si…</div>
              <ul className="space-y-2">
                {comp.casUsageA.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#888888]">
                    <span className="text-[#c8a96e] mt-1 flex-shrink-0">·</span>{c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#888888] mb-4">Choisir {sujetB} si…</div>
              <ul className="space-y-2">
                {comp.casUsageB.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-sm text-[#666666]">
                    <span className="text-[#555555] mt-1 flex-shrink-0">·</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="border-l-2 border-[#c8a96e]/40 pl-6 mb-12">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-3">Notre conclusion</div>
            <p className="text-sm text-[#888888] leading-relaxed">{comp.conclusion}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">Questions fréquentes</h2>
          <div className="space-y-3 mb-10">
            {comp.faq.map((f, i) => (
              <details key={i} className="group border border-[#1a1a1a] bg-[#0a0a0a]">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-sm text-[#cccccc] group-open:text-[#f5f5f0] pr-4">{f.question}</span>
                  <span className="text-[#c8a96e] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#666666] leading-relaxed">{f.reponse}</div>
              </details>
            ))}
          </div>

          {/* Other comparisons */}
          <div>
            <h3 className="text-sm font-light text-[#f5f5f0] mb-4">Autres comparatifs</h3>
            <div className="flex flex-wrap gap-3">
              {comparatifs
                .filter((c) => c.slug !== comp.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/comparatifs/${c.slug}`}
                    className="text-xs border border-[#1a1a1a] px-4 py-2 text-[#555555] hover:border-[#c8a96e]/30 hover:text-[#888888] transition-all"
                  >
                    {c.sujets[0]} vs {c.sujets[1]}
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
