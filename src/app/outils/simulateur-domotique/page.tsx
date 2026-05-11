import type { Metadata } from "next";
import SimulateurDomotique from "./SimulateurDomotique";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Simulateur domotique — KNX, DALI ou CASAMBI pour votre bâtiment ?",
  description:
    "Quel protocole domotique choisir pour votre projet ? KNX, DALI ou CASAMBI Bluetooth Mesh — notre simulateur analyse votre contexte et vous recommande la solution optimale avec estimation budgétaire.",
  keywords: ["simulateur domotique", "KNX vs DALI", "CASAMBI", "protocole éclairage connecté", "domotique tertiaire", "bâtiment connecté"],
  alternates: { canonical: `${siteConfig.url}/outils/simulateur-domotique` },
};

export default function SimulateurDomotiquePageWrapper() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/outils" className="hover:text-[#c8a96e] transition-colors">Outils</Link>
          <span>/</span>
          <span className="text-[#555555]">Simulateur domotique</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <SectionLabel className="mb-6">Questionnaire intelligent</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Choisir son</span>{" "}
          <span className="text-gradient-gold">Protocole domotique</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-12">
          KNX, DALI ou CASAMBI Bluetooth Mesh — chaque protocole répond à des besoins spécifiques.
          Répondez à 4 questions pour obtenir une recommandation personnalisée et une estimation budgétaire.
        </p>

        <div className="max-w-2xl">
          <SimulateurDomotique />
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-t border-[#111111] bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">
            Comparatif des protocoles domotiques
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#1a1a1a]">
                  {["Protocole", "Type", "Portée", "Éclairage", "Volets / HVAC", "Coût indicatif", "Idéal pour"].map((h) => (
                    <th key={h} className="text-left py-3 pr-6 text-[#444444] font-normal tracking-[0.1em] uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["CASAMBI", "Sans fil (BT Mesh)", "~30m", "✓", "Partiel", "~35 €/m²", "Rénovation résidentielle"],
                  ["DALI (IEC 62386)", "Filaire", "300m (bus)", "✓✓", "Non natif", "~55 €/m²", "Tertiaire, décret tertiaire"],
                  ["KNX", "Filaire (bus EIB)", "1000m+", "✓✓", "✓✓ complet", "~90 €/m²", "Neuf, bâtiment premium"],
                  ["EnOcean", "Sans fil (Energy Harvesting)", "~30m", "✓", "✓", "~40 €/m²", "Rénovation, zones techniques"],
                  ["Zigbee", "Sans fil (mesh)", "~10m", "✓", "Partiel", "~25 €/m²", "Résidentiel entrée de gamme"],
                ].map(([proto, type, portee, eclairage, hvac, cout, ideal]) => (
                  <tr key={proto} className="border-b border-[#0f0f0f] hover:bg-[#0a0a0a] transition-colors">
                    <td className="py-3 pr-6 text-[#c8a96e] font-medium">{proto}</td>
                    <td className="py-3 pr-6 text-[#888888]">{type}</td>
                    <td className="py-3 pr-6 text-[#666666]">{portee}</td>
                    <td className="py-3 pr-6 text-[#666666]">{eclairage}</td>
                    <td className="py-3 pr-6 text-[#666666]">{hvac}</td>
                    <td className="py-3 pr-6 text-[#888888]">{cout}</td>
                    <td className="py-3 text-[#555555]">{ideal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-light text-[#f5f5f0] mb-8 tracking-tight">Questions fréquentes</h2>
        <div className="space-y-3">
          {[
            {
              q: "Quelle différence entre KNX et DALI ?",
              r: "KNX est un protocole domotique complet qui gère éclairage, volets, HVAC, sécurité et énergie sur un bus unique. DALI est spécialisé dans le contrôle d'éclairage avec adressage individuel de chaque ballast. En pratique, KNX et DALI se combinent souvent : KNX gère l'architecture globale, DALI gère finement les circuits d'éclairage.",
            },
            {
              q: "CASAMBI fonctionne-t-il sans Wi-Fi ?",
              r: "Oui, CASAMBI utilise le Bluetooth Mesh (non le Wi-Fi). Les luminaires créent leur propre réseau maillé autonome. L'application mobile se connecte directement via Bluetooth. Une passerelle CASAMBI Gateway peut optionnellement connecter le réseau à Internet pour la télécommande à distance.",
            },
            {
              q: "La domotique est-elle obligatoire pour le décret tertiaire ?",
              r: "Le décret tertiaire impose une réduction des consommations énergétiques (-40% en 2030, -50% en 2040, -60% en 2050). La domotique n'est pas explicitement obligatoire, mais elle est le moyen le plus efficace d'atteindre ces objectifs. La norme BACS (EN 15232) est fortement recommandée et le KNX ou DALI avec reporting énergétique répondent à ces exigences.",
            },
            {
              q: "Peut-on ajouter la domotique à un bâtiment existant ?",
              r: "Absolument. CASAMBI est la solution sans fil idéale pour la rénovation — aucun câblage supplémentaire, installation en quelques heures. Pour plus de fonctionnalités, DALI filaire peut être ajouté en rénovation si l'accès aux faux-plafonds est possible. KNX en rénovation est faisable mais implique un câblage conséquent, souvent réservé aux rénovations lourdes.",
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
      </section>

      <CtaBanner />
    </div>
  );
}
