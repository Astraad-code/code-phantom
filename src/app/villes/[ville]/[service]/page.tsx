import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { villes } from "@/data/villes";
import { servicesVilles } from "@/data/services-villes";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return villes.flatMap((v) =>
    servicesVilles.map((s) => ({ ville: v.slug, service: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string; service: string }>;
}): Promise<Metadata> {
  const { ville: villeSlug, service: serviceSlug } = await params;
  const ville = villes.find((v) => v.slug === villeSlug);
  const service = servicesVilles.find((s) => s.slug === serviceSlug);
  if (!ville || !service) return {};
  return {
    title: `${service.label} à ${ville.name} — Code Phantom`,
    description: `Code Phantom, expert en ${service.label.toLowerCase()} à ${ville.name}. ${service.description} Devis gratuit en 24h.`,
    keywords: [...service.keywords.map((k) => `${k} ${ville.name}`), ...service.keywords],
    alternates: { canonical: `${siteConfig.url}/villes/${villeSlug}/${serviceSlug}` },
  };
}

export default async function VilleServicePage({
  params,
}: {
  params: Promise<{ ville: string; service: string }>;
}) {
  const { ville: villeSlug, service: serviceSlug } = await params;
  const ville = villes.find((v) => v.slug === villeSlug);
  const service = servicesVilles.find((s) => s.slug === serviceSlug);
  if (!ville || !service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.label} à ${ville.name}`,
    description: service.description,
    provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed: { "@type": "City", name: ville.name },
    url: `${siteConfig.url}/villes/${villeSlug}/${serviceSlug}`,
  };

  const otherServices = servicesVilles.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href={`/villes/${villeSlug}`} className="hover:text-[#c8a96e] transition-colors">{ville.name}</Link>
            <span>/</span>
            <span className="text-[#555555]">{service.label}</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-4">{ville.region} · {ville.ensoleillement}</div>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-gradient-gold">{service.label}</span>
            <br />
            <span className="text-[#f5f5f0]">à {ville.name}</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-2xl mb-12">
            Code Phantom intervient à {ville.name} et en {ville.region} pour des projets d&apos;éclairage
            architectural premium. {service.description} Notre bureau d&apos;études traite chaque projet
            avec la même exigence de qualité, de la conception à la réception.
          </p>

          {/* Key selling points */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
            {[
              { titre: "Expertise locale", corps: `Connaissance du marché architectural de ${ville.name} : ${ville.styleArchi.split(",")[0]}, réglementations locales, réseau d'installateurs partenaires.` },
              { titre: "Réponse rapide", corps: "Devis sous 24h ouvrées. Première consultation téléphonique gratuite. Étude de faisabilité incluse dans chaque offre." },
              { titre: "Références locales", corps: `Projets réalisés à ${ville.name} : ${ville.projetsTypes.slice(0, 3).join(", ")} et plus. Disponibles sur demande avec accord client.` },
            ].map((p) => (
              <div key={p.titre} className="bg-[#0a0a0a] border border-[#1a1a1a] p-6">
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#c8a96e] mb-3">{p.titre}</div>
                <p className="text-sm text-[#666666] leading-relaxed">{p.corps}</p>
              </div>
            ))}
          </div>

          {/* Local context */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-5 tracking-tight">
                Spécificités de {ville.name}
              </h2>
              <p className="text-sm text-[#666666] leading-relaxed mb-4">{ville.description}</p>
              <ul className="space-y-2">
                {ville.particularites.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-[#555555]">
                    <span className="text-[#c8a96e] mt-1 flex-shrink-0">·</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-light text-[#f5f5f0] mb-5 tracking-tight">
                Types de projets traités à {ville.name}
              </h2>
              <div className="space-y-2">
                {ville.projetsTypes.map((p) => (
                  <div key={p} className="flex items-center gap-3 py-2.5 border-b border-[#0f0f0f]">
                    <span className="w-2 h-px bg-[#c8a96e]" />
                    <span className="text-sm text-[#888888]">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-[#0a0a0a] border border-[#c8a96e]/20 p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-2">Votre projet à {ville.name}</div>
              <h3 className="text-xl font-light text-[#f5f5f0]">Demandez votre étude gratuite</h3>
              <p className="text-xs text-[#444444] mt-1">Réponse sous 24h · Sans engagement · Déplacement possible</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 bg-[#c8a96e] hover:bg-[#e8c98e] text-[#050505] text-xs tracking-[0.2em] uppercase py-3 px-8 font-medium transition-all duration-300"
            >
              Étudier mon projet →
            </Link>
          </div>
        </section>

        {/* Other services in this city */}
        <section className="border-t border-[#111111] bg-[#060606] py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-lg font-light text-[#f5f5f0] mb-5 tracking-tight">
                  Autres services à {ville.name}
                </h2>
                <div className="space-y-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/villes/${villeSlug}/${s.slug}`}
                      className="flex items-center gap-2 text-xs text-[#555555] hover:text-[#c8a96e] transition-colors group"
                    >
                      <span className="w-2 h-px bg-[#333333] group-hover:bg-[#c8a96e] transition-colors" />
                      {s.label} à {ville.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-lg font-light text-[#f5f5f0] mb-5 tracking-tight">
                  {service.label} dans d&apos;autres villes
                </h2>
                <div className="flex flex-wrap gap-2">
                  {villes
                    .filter((v) => v.slug !== villeSlug)
                    .slice(0, 6)
                    .map((v) => (
                      <Link
                        key={v.slug}
                        href={`/villes/${v.slug}/${serviceSlug}`}
                        className="text-xs border border-[#1a1a1a] px-3 py-1.5 text-[#444444] hover:border-[#c8a96e]/30 hover:text-[#888888] transition-all"
                      >
                        {v.name}
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
