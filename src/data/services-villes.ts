export interface ServiceVille {
  slug: string;
  label: string;
  description: string;
  keywords: string[];
}

export const servicesVilles: ServiceVille[] = [
  {
    slug: "etude-eclairage",
    label: "Étude d'éclairage",
    description: "Bureau d'études éclairage architectural — conception, calcul DIALux EVO, plans d'implantation et spécifications techniques.",
    keywords: ["étude éclairage", "bureau études éclairage", "DIALux", "plan implantation luminaires"],
  },
  {
    slug: "domotique",
    label: "Domotique",
    description: "Installation et programmation KNX, DALI et CASAMBI pour bâtiments résidentiels et tertiaires.",
    keywords: ["domotique", "KNX", "DALI", "CASAMBI", "éclairage connecté"],
  },
  {
    slug: "eclairage-tertiaire",
    label: "Éclairage tertiaire",
    description: "Conception et installation d'éclairage pour bureaux, commerces et établissements tertiaires. Conformité décret tertiaire.",
    keywords: ["éclairage tertiaire", "éclairage bureau", "décret tertiaire", "BACS éclairage"],
  },
  {
    slug: "renovation-led",
    label: "Rénovation LED",
    description: "Migration LED clé en main : audit, remplacement luminaires, système DALI, ROI garanti. Éligible CEE.",
    keywords: ["rénovation LED", "remplacement luminaires LED", "migration LED", "ROI LED"],
  },
];
