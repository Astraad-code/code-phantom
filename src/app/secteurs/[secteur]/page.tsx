import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { secteurs } from "@/data/secteurs";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return secteurs.map((s) => ({ secteur: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ secteur: string }> }): Promise<Metadata> {
  const { secteur: secteurSlug } = await params;
  const secteur = secteurs.find((s) => s.slug === secteurSlug);
  if (!secteur) return {};
  return {
    title: `Éclairage ${secteur.name} — Normes, solutions & recommandations`,
    description: `${secteur.description} Éclairage recommandé : ${secteur.luxRecommande} lux, UGR<${secteur.ugrMax}, IRC>${secteur.ircMin}. Marques : ${secteur.marques.join(", ")}.`,
    alternates: { canonical: `${siteConfig.url}/secteurs/${secteurSlug}` },
  };
}

export default async function SecteurPage({ params }: { params: Promise<{ secteur: string }> }) {
  const { secteur: secteurSlug } = await params;
  const secteur = secteurs.find((s) => s.slug === secteurSlug);
  if (!secteur) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Éclairage architectural ${secteur.name} — Guide complet`,
    description: secteur.description,
    author: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-[#555555]">Secteurs</span>
            <span>/</span>
            <span className="text-[#555555]">{secteur.name}</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-2xl mb-4">{secteur.icon}</div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Éclairage</span>{" "}
            <span className="text-gradient-gold">{secteur.name}</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-2xl mb-12">{secteur.description}</p>

          {/* Normes values */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mb-16">
            {[
              { label: "Éclairement min", value: `${secteur.luxMin} lux` },
              { label: "Éclairement max", value: `${secteur.luxMax} lux` },
              { label: "Recommandé", value: `${secteur.luxRecommande} lux`, highlight: true },
              { label: "UGR max", value: `< ${secteur.ugrMax}` },
              { label: "IRC min", value: `${secteur.ircMin}+` },
            ].map((s) => (
              <div key={s.label} className={`p-5 border ${s.highlight ? "border-[#c8a96e]/30 bg-[#c8a96e]/5" : "border-[#1a1a1a] bg-[#0a0a0a]"}`}>
                <div className="text-[10px] tracking-[0.1em] uppercase text-[#444444] mb-2">{s.label}</div>
                <div className={`text-xl font-light ${s.highlight ? "text-[#c8a96e]" : "text-[#f5f5f0]"}`}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Températures & normes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-5 tracking-tight">Températures de couleur</h2>
              <div className="flex flex-wrap gap-3">
                {secteur.temperaturesCouleur.map((t) => (
                  <div key={t} className="text-sm border border-[#c8a96e]/20 bg-[#c8a96e]/5 px-5 py-3 text-[#c8a96e]">
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-5 tracking-tight">Normes applicables</h2>
              <div className="flex flex-wrap gap-3">
                {secteur.normes.map((n) => (
                  <div key={n} className="text-sm border border-[#1a1a1a] bg-[#0a0a0a] px-5 py-3 text-[#888888]">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Défis spécifiques</h2>
              <ul className="space-y-3">
                {secteur.defis.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-[#666666]">
                    <span className="text-[#c8a96e] mt-1 flex-shrink-0">·</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Solutions recommandées</h2>
              <ul className="space-y-3">
                {secteur.solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-[#666666]">
                    <span className="text-[#888888] mt-1 flex-shrink-0">→</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Example project */}
          <div className="bg-[#0a0a0a] border border-[#c8a96e]/20 p-6 mb-12">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-3">Exemple de projet</div>
            <p className="text-sm text-[#666666] leading-relaxed italic">&ldquo;{secteur.exempleProjet}&rdquo;</p>
          </div>

          {/* Brands */}
          <div>
            <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Marques recommandées</h2>
            <div className="flex flex-wrap gap-3">
              {secteur.marques.map((m) => (
                <div key={m} className="text-sm border border-[#c8a96e]/20 px-5 py-3 text-[#c8a96e]">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools section */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
                  Outils pour votre projet {secteur.name.toLowerCase()}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {[
                    { href: "/outils/calculateur-lux", label: "Calculateur Lux", desc: `Vérifiez la conformité EN 12464-1 pour ${secteur.luxRecommande} lux` },
                    { href: "/outils/temperature-couleur", label: "Température de couleur", desc: `Comparez ${secteur.temperaturesCouleur.join(" vs ")}` },
                    { href: "/outils/calculateur-roi-led", label: "ROI LED", desc: "Calculez le retour sur investissement" },
                    { href: "/outils/simulateur-domotique", label: "Simulateur domotique", desc: "Choisissez le bon protocole" },
                  ].map((o) => (
                    <Link key={o.href} href={o.href} className="group p-4 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/20 transition-all">
                      <div className="text-xs text-[#f5f5f0] mb-1 group-hover:text-[#c8a96e] transition-colors">{o.label} →</div>
                      <div className="text-[10px] text-[#444444]">{o.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Autres secteurs</h2>
                <div className="space-y-2">
                  {secteurs
                    .filter((s) => s.slug !== secteur.slug)
                    .map((s) => (
                      <Link key={s.slug} href={`/secteurs/${s.slug}`} className="flex items-center gap-2 text-xs text-[#555555] hover:text-[#c8a96e] transition-colors group">
                        <span className="w-2 h-px bg-[#333333] group-hover:bg-[#c8a96e] transition-colors" />
                        {s.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
