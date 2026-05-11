import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/site";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Guides éclairage architectural — Tutoriels & bonnes pratiques",
  description:
    "Guides pratiques sur l'éclairage architectural : choisir ses luminaires, concevoir un plan lumière, respecter les normes EN 12464-1, calculer le ROI LED, intégrer la domotique.",
  keywords: ["guide éclairage", "tutoriel éclairage architectural", "conception lumière", "choix luminaires LED", "plan lumière"],
  alternates: { canonical: `${siteConfig.url}/guides` },
};

const GUIDES = [
  {
    categorie: "Conception",
    articles: [
      {
        titre: "Comment concevoir un plan lumière pour un bureau open space",
        desc: "Méthodologie complète : du relevé architectural au calcul DIALux, sélection des luminaires, vérification EN 12464-1 et spécifications techniques.",
        tags: ["EN 12464-1", "DIALux", "Open space"],
        temps: "12 min",
        href: "#",
      },
      {
        titre: "Éclairage hôtelier : créer une signature lumineuse par espace",
        desc: "Différencier hall, chambres, restaurant et spa par la lumière. Températures de couleur, scénarios, domotique HELVAR DALI et cohérence de marque.",
        tags: ["Hôtellerie", "DALI", "Scénarios"],
        temps: "15 min",
        href: "#",
      },
      {
        titre: "La loi des 1/3 en éclairage : équilibrer les plans lumineux",
        desc: "Principe fondamental pour créer de la profondeur lumineuse : éclairage général, accent et ambiance. Application pratique sur des projets résidentiels.",
        tags: ["Résidentiel", "Éclairage d'accent", "Conception"],
        temps: "8 min",
        href: "#",
      },
    ],
  },
  {
    categorie: "Normes & Conformité",
    articles: [
      {
        titre: "Décret tertiaire : atteindre les -40% de consommation en éclairage",
        desc: "Stratégie complète pour répondre aux exigences du décret tertiaire : audit de l'existant, LED + DALI + variation, mesure et reporting BACS.",
        tags: ["Décret tertiaire", "BACS", "ROI"],
        temps: "10 min",
        href: "/normes/decret-tertiaire",
      },
      {
        titre: "Guide UGR : comprendre et respecter les exigences d'éblouissement",
        desc: "UGR<19 pour les bureaux, UGR<22 pour les halls. Méthode de calcul, luminaires conformes et erreurs à éviter pour le confort visuel au travail.",
        tags: ["UGR", "EN 12464-1", "Confort visuel"],
        temps: "9 min",
        href: "/normes/ugr",
      },
      {
        titre: "IRC Ra et R9 : choisir les LED pour un rendu couleur optimal",
        desc: "Ra80 ou Ra90+ ? R9 positif obligatoire ? Selon l'usage — gastronomie, médical, retail — les exigences sont radicalement différentes.",
        tags: ["IRC", "R9", "Qualité LED"],
        temps: "7 min",
        href: "/normes/irc",
      },
    ],
  },
  {
    categorie: "Protocoles & Domotique",
    articles: [
      {
        titre: "KNX vs DALI vs CASAMBI : le guide de choix complet",
        desc: "Comparatif détaillé des trois principaux protocoles domotiques éclairage. Coûts, compatibilités, cas d'usage et recommandations selon le type de bâtiment.",
        tags: ["KNX", "DALI", "CASAMBI"],
        temps: "14 min",
        href: "/outils/simulateur-domotique",
      },
      {
        titre: "DALI IEC 62386 : programmation et adressage des luminaires",
        desc: "Guide technique pour l'installation et la programmation d'un système DALI : topologie, adressage, groupes et scènes, intégration GTB.",
        tags: ["DALI", "GTB", "Tertiaire"],
        temps: "18 min",
        href: "#",
      },
    ],
  },
  {
    categorie: "Outils & Calcul",
    articles: [
      {
        titre: "DIALux EVO : réaliser une étude d'éclairage professionnelle",
        desc: "Prise en main de DIALux EVO pour les professionnels : import IFC, placement de luminaires, calcul photométrique, génération des livrables.",
        tags: ["DIALux EVO", "Calcul", "Livrables"],
        temps: "20 min",
        href: "#",
      },
      {
        titre: "Calculer le nombre de spots encastrés pour un espace",
        desc: "Méthode des lumens, facteur de maintenance, espacement optimal et vérification de l'uniformité. Application directe avec notre calculateur gratuit.",
        tags: ["Spots", "Calcul lux", "EN 12464-1"],
        temps: "6 min",
        href: "/outils/calculateur-lux",
      },
    ],
  },
];

export default function GuidesPage() {
  return (
    <div className="pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-[#333333]">
          <Link href="/" className="hover:text-[#c8a96e] transition-colors">Accueil</Link>
          <span>/</span>
          <span className="text-[#555555]">Guides</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <SectionLabel className="mb-6">Expertise</SectionLabel>
        <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-4">
          <span className="text-[#f5f5f0]">Guides</span>{" "}
          <span className="text-gradient-gold">Éclairage architectural</span>
        </h1>
        <p className="text-sm text-[#555555] leading-relaxed max-w-xl mb-16">
          Méthodologies, bonnes pratiques et références techniques pour concevoir des projets
          d&apos;éclairage conformes, performants et esthétiquement cohérents.
        </p>

        <div className="space-y-16">
          {GUIDES.map((section) => (
            <div key={section.categorie}>
              <h2 className="text-xs tracking-[0.2em] uppercase text-[#c8a96e] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#c8a96e]" />{section.categorie}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {section.articles.map((article) => (
                  <Link
                    key={article.titre}
                    href={article.href}
                    className="group p-6 border border-[#1a1a1a] bg-[#0a0a0a] hover:border-[#c8a96e]/30 transition-all duration-300 flex flex-col"
                  >
                    <h3 className="text-sm font-light text-[#f5f5f0] group-hover:text-white transition-colors mb-3 leading-snug">
                      {article.titre}
                    </h3>
                    <p className="text-xs text-[#444444] leading-relaxed mb-5 flex-1">{article.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.map((tag) => (
                          <span key={tag} className="text-[9px] tracking-[0.1em] text-[#333333] border border-[#1a1a1a] px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-[10px] text-[#333333] flex-shrink-0 ml-2">{article.temps}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
