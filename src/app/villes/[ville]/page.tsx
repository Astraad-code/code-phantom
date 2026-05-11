import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { villes } from "@/data/villes";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville: villeSlug } = await params;
  const ville = villes.find((v) => v.slug === villeSlug);
  if (!ville) return {};
  return {
    title: `Éclairage architectural ${ville.name} — Bureau d'études & installation LED`,
    description: `Code Phantom, expert en éclairage architectural à ${ville.name}. Conception, étude DIALux, installation LED et domotique pour hôtels, bureaux et résidences en ${ville.region}.`,
    keywords: [`éclairage architectural ${ville.name}`, `bureau études éclairage ${ville.name}`, `installation LED ${ville.name}`, `domotique ${ville.name}`],
    alternates: { canonical: `${siteConfig.url}/villes/${villeSlug}` },
  };
}

export default async function VillePage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville: villeSlug } = await params;
  const ville = villes.find((v) => v.slug === villeSlug);
  if (!ville) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Code Phantom — Éclairage architectural ${ville.name}`,
    description: ville.description,
    url: `${siteConfig.url}/villes/${villeSlug}`,
    areaServed: { "@type": "City", name: ville.name },
    address: { "@type": "PostalAddress", addressLocality: ville.name, addressRegion: ville.region, addressCountry: "FR" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <span className="text-[#555555]">Villes</span>
            <span>/</span>
            <span className="text-[#555555]">{ville.name}</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-4">{ville.region}</div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Éclairage architectural</span>
            <br />
            <span className="text-gradient-gold">{ville.name}</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-2xl mb-12">{ville.description}</p>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {[
              { label: "Ensoleillement", value: ville.ensoleillement },
              { label: "Population", value: ville.population },
              { label: "Style architectural", value: ville.styleArchi.split(",")[0] },
              { label: "Coordonnées", value: ville.coordonnees },
            ].map((s) => (
              <div key={s.label} className="bg-[#0a0a0a] border border-[#1a1a1a] p-4">
                <div className="text-[10px] tracking-[0.1em] uppercase text-[#444444] mb-1">{s.label}</div>
                <div className="text-sm font-light text-[#f5f5f0]">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Types de projets */}
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
                Types de projets à {ville.name}
              </h2>
              <div className="space-y-2">
                {ville.projetsTypes.map((p) => (
                  <div key={p} className="flex items-center gap-3 py-3 border-b border-[#0f0f0f]">
                    <span className="w-2 h-px bg-[#c8a96e]" />
                    <span className="text-sm text-[#888888]">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Particularités */}
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
                Spécificités du marché local
              </h2>
              <ul className="space-y-3">
                {ville.particularites.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-[#666666]">
                    <span className="text-[#c8a96e] mt-1 flex-shrink-0">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quartiers premium */}
          <div className="mb-16">
            <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
              Quartiers & zones premium à {ville.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {ville.quartiersPremium.map((q) => (
                <div key={q} className="text-sm border border-[#1a1a1a] bg-[#0a0a0a] px-5 py-3 text-[#888888]">
                  {q}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Code Phantom in this city */}
        <section className="border-t border-[#111111] bg-[#060606] py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-light text-[#f5f5f0] mb-6 tracking-tight">
                  Notre expertise éclairage à {ville.name}
                </h2>
                <div className="space-y-4 text-sm text-[#666666] leading-relaxed">
                  <p>
                    Code Phantom intervient sur l&apos;ensemble du territoire français pour des projets
                    d&apos;éclairage architectural exigeants. À {ville.name}, notre expertise couvre la
                    conception lumineuse, le calcul DIALux EVO, la sélection des équipements et la
                    supervision d&apos;installation pour tous types de bâtiments.
                  </p>
                  <p>
                    La spécificité architecturale de {ville.name} — {ville.styleArchi} — demande
                    une approche sur-mesure qui valorise les matières et les volumes sans trahir
                    l&apos;identité du lieu. Avec {ville.ensoleillement} d&apos;ensoleillement annuel,
                    la gestion de la lumière naturelle et la variation automatique sont des composantes
                    essentielles de chaque étude.
                  </p>
                  <p>
                    Nos interventions à {ville.name} s&apos;appuient sur un réseau de partenaires
                    installateurs locaux qualifiés et sur notre bureau d&apos;études centralisé pour
                    garantir la cohérence entre conception et réalisation.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-[#f5f5f0]">Nos outils gratuits</h3>
                {[
                  { href: "/outils/calculateur-lux", label: "Calculateur Lux" },
                  { href: "/outils/calculateur-roi-led", label: "ROI LED" },
                  { href: "/outils/temperature-couleur", label: "Température de couleur" },
                  { href: "/outils/simulateur-domotique", label: "Simulateur domotique" },
                ].map((o) => (
                  <Link key={o.href} href={o.href} className="flex items-center gap-2 text-xs text-[#555555] hover:text-[#c8a96e] transition-colors group">
                    <span className="w-2 h-px bg-[#333333] group-hover:bg-[#c8a96e] transition-colors" />
                    {o.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-[#1a1a1a]">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.2em] uppercase py-3 px-6 font-medium transition-all duration-300"
                  >
                    Devis à {ville.name} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other cities */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">Autres villes</h2>
          <div className="flex flex-wrap gap-3">
            {villes
              .filter((v) => v.slug !== ville.slug)
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`/villes/${v.slug}`}
                  className="text-xs border border-[#1a1a1a] px-4 py-2 text-[#555555] hover:border-[#c8a96e]/30 hover:text-[#888888] transition-all"
                >
                  {v.name}
                </Link>
              ))}
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
