import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Prix domotique maison 2025 — KNX, CASAMBI, DALI : combien ça coûte ?",
  description:
    "Quel est le prix d'une installation domotique ? KNX : 80-120 €/m², CASAMBI : 30-50 €/m², DALI : 40-70 €/m². Estimations détaillées par protocole et par type de projet en 2025.",
  keywords: ["prix domotique maison", "coût installation KNX", "tarif CASAMBI", "prix DALI", "budget domotique", "combien coûte domotique"],
  alternates: { canonical: `${siteConfig.url}/outils/prix-domotique-maison` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le prix d'une installation domotique maison ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le prix d'une installation domotique varie de 3 000 € (CASAMBI éclairage seul, 80 m²) à 80 000 € (KNX complet, 300 m², éclairage + volets + HVAC). En moyenne, comptez : CASAMBI 30-50 €/m², DALI éclairage 40-70 €/m², KNX complet 80-120 €/m².",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le prix d'un système KNX ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un système KNX coûte en moyenne 80 à 120 €/m² pour un projet complet (éclairage + volets + chauffage), pose et programmation incluses. Pour une maison de 150 m², prévoyez 12 000 à 18 000 € pour l'installation KNX. Le coût de programmation ETS représente 20-30% du total.",
      },
    },
  ],
};

export default function PrixDomotiquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="pt-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
            <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/outils" className="hover:text-[#c8a96e] transition-colors">Outils</Link>
            <span>/</span>
            <span className="text-[#555555]">Prix domotique maison</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
            <span className="text-[#f5f5f0]">Prix domotique</span>{" "}
            <span className="text-gradient-gold">2025</span>
          </h1>
          <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
            Le coût d&apos;une installation domotique dépend du protocole choisi, de la surface et du périmètre
            fonctionnel. Voici les prix réels du marché en 2025, établis à partir de nos projets.
          </p>

          {/* Price comparison cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
            {[
              {
                protocole: "CASAMBI",
                type: "Sans fil Bluetooth Mesh",
                prixM2: "30–50 €/m²",
                exemple: "~4 500 € pour 120 m²",
                inclus: ["Modules CASAMBI par luminaire", "Application mobile", "Mise en service", "Formation"],
                exclut: ["Luminaires", "Câblage électrique standard"],
                ideal: "Rénovation, résidentiel, hôtellerie boutique",
                couleur: "#c8a96e",
              },
              {
                protocole: "DALI",
                type: "Filaire IEC 62386",
                prixM2: "40–70 €/m²",
                exemple: "~7 500 € pour 150 m²",
                inclus: ["Ballasts DALI", "Bus DALI câblé", "Contrôleur DALI", "Programmation scènes"],
                exclut: ["Luminaires", "Câblage électrique standard"],
                ideal: "Tertiaire, décret tertiaire, reporting énergétique",
                couleur: "#888888",
              },
              {
                protocole: "KNX",
                type: "Bus filaire EIB",
                prixM2: "80–120 €/m²",
                exemple: "~15 000 € pour 150 m²",
                inclus: ["Bus KNX complet", "Actionneurs multi-fonctions", "Programmation ETS", "Documentation"],
                exclut: ["Luminaires", "Câblage énergie"],
                ideal: "Neuf premium, bâtiment complet, HVAC + stores + éclairage",
                couleur: "#555555",
              },
            ].map((p) => (
              <div key={p.protocole} className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 flex flex-col">
                <div className="text-[9px] tracking-[0.2em] uppercase mb-3" style={{ color: p.couleur }}>{p.type}</div>
                <h2 className="text-xl font-light mb-2" style={{ color: p.couleur }}>{p.protocole}</h2>
                <div className="text-3xl font-light text-[#f5f5f0] mb-1">{p.prixM2}</div>
                <div className="text-xs text-[#333333] mb-6">{p.exemple}</div>

                <div className="flex-1 space-y-4">
                  <div>
                    <div className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-2">Inclus</div>
                    <ul className="space-y-1">
                      {p.inclus.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#666666]">
                          <span style={{ color: p.couleur }} className="mt-1 flex-shrink-0">·</span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[9px] tracking-[0.15em] uppercase text-[#444444] mb-2">Non inclus</div>
                    <ul className="space-y-1">
                      {p.exclut.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#444444]">
                          <span className="text-[#333333] mt-1 flex-shrink-0">·</span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1a1a1a]">
                  <div className="text-[9px] tracking-[0.1em] uppercase text-[#333333] mb-1">Idéal pour</div>
                  <div className="text-xs text-[#555555]">{p.ideal}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed cost table */}
          <div className="mb-12">
            <h2 className="text-xl font-light text-[#f5f5f0] mb-6 tracking-tight">
              Détail des coûts par composant
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-[#1a1a1a]">
                    {["Composant", "CASAMBI", "DALI", "KNX", "Note"].map((h) => (
                      <th key={h} className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Module par luminaire", "30-60 €", "15-40 € (ballast)", "60-120 € (actionneur)", "Hors luminaire"],
                    ["Câblage bus", "0 €", "0,5-1 €/ml", "1,5-3 €/ml", "Hors câblage énergie"],
                    ["Contrôleur / passerelle", "200-500 €", "300-800 €", "500-2 000 €", "Selon taille projet"],
                    ["Programmation", "300-1 000 €", "500-2 000 €", "1 500-5 000 €", "ETS pour KNX"],
                    ["Application mobile", "Inclus", "Via GTB", "Via GTB ou app dédiée", "—"],
                    ["Mise en service", "1/2 jour", "1-2 jours", "2-5 jours", "Selon complexité"],
                  ].map(([composant, casambi, dali, knx, note]) => (
                    <tr key={composant} className="border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors">
                      <td className="py-3 pr-6 text-[#888888]">{composant}</td>
                      <td className="py-3 pr-6 text-[#c8a96e]">{casambi}</td>
                      <td className="py-3 pr-6 text-[#888888]">{dali}</td>
                      <td className="py-3 pr-6 text-[#666666]">{knx}</td>
                      <td className="py-3 text-[#444444]">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">FAQ — Prix domotique</h2>
          <div className="space-y-3">
            {[
              {
                q: "Quel est le prix d'une installation domotique maison ?",
                r: "Le prix varie de 3 000 € (CASAMBI éclairage seul, 80 m²) à 80 000 € (KNX complet, 300 m², éclairage + volets + HVAC). En moyenne : CASAMBI 30-50 €/m², DALI éclairage 40-70 €/m², KNX complet 80-120 €/m².",
              },
              {
                q: "La domotique est-elle éligible aux aides de l'État ?",
                r: "Partiellement. Les systèmes de gestion active de l'énergie (BACS) dans le tertiaire peuvent bénéficier des Certificats d'Économies d'Énergie (CEE). En résidentiel, les primes Anah et MaPrimeRénov' ne couvrent pas directement la domotique, mais la combinaison isolation + domotique peut ouvrir des droits spécifiques.",
              },
              {
                q: "Quel est le ROI d'une installation domotique éclairage ?",
                r: "Pour le tertiaire, une installation DALI avec variation lumière du jour et présence se rembourse en 2 à 4 ans via les économies d'énergie (30-50% sur l'éclairage). En résidentiel, le ROI financier pur est plus long (8-15 ans), mais la valeur patrimoniale et le confort justifient l'investissement.",
              },
              {
                q: "CASAMBI ou KNX pour une maison neuve ?",
                r: "Pour une maison neuve avec câblage possible, KNX reste la solution la plus complète et évolutive pour intégrer éclairage + volets + chauffage. CASAMBI est excellent pour l'éclairage seul ou si le câblage est contraint. En construction neuve premium, la combinaison KNX (bus général) + CASAMBI (zones spécifiques) est de plus en plus courante.",
              },
            ].map((f, i) => (
              <details key={i} className="group border border-[#1a1a1a] bg-[#0a0a0a]">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-sm text-[#cccccc] group-open:text-[#f5f5f0] pr-4">{f.q}</span>
                  <span className="text-[#c8a96e] flex-shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#666666] leading-relaxed">{f.r}</div>
              </details>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col lg:flex-row gap-4">
            <Link href="/outils/simulateur-domotique" className="flex-1 text-center border border-[#c8a96e]/30 text-[#c8a96e] text-xs tracking-[0.15em] uppercase py-3 hover:bg-[#c8a96e]/5 transition-all">
              Simulateur domotique →
            </Link>
            <Link href="/comparatifs/knx-vs-casambi" className="flex-1 text-center border border-[#1a1a1a] text-[#555555] text-xs tracking-[0.15em] uppercase py-3 hover:border-[#333333] transition-all">
              KNX vs CASAMBI →
            </Link>
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
}
