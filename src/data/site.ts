export const siteConfig = {
  name: "Code Phantom",
  tagline: "L'architecture de la lumière.",
  description:
    "Solutions d'éclairage architectural et domotique pour espaces résidentiels et tertiaires haut de gamme. Études d'éclairage, DIALux EVO, plans d'implantation.",
  url: "https://www.code-phantom.com",
  phone: "+33 1 XX XX XX XX",
  email: "contact@code-phantom.com",
  address: "Paris, France",
  socialMedia: {
    linkedin: "https://linkedin.com/company/code-phantom",
    instagram: "https://instagram.com/codephantom",
  },
};

export const partners = [
  {
    id: "modular",
    name: "Modular",
    description:
      "Leader belge de l'éclairage architectural sur-mesure. Luminaires encastrés de précision pour espaces résidentiels et tertiaires.",
    url: "https://www.supermodular.com",
    specialty: "Éclairage encastré de précision",
  },
  {
    id: "kreon",
    name: "Kreon",
    description:
      "Esthétique minimaliste et maîtrise technique. Systèmes d'éclairage architectural intégrés pour architectes et designers.",
    url: "https://www.kreon.com",
    specialty: "Architecture lumineuse minimaliste",
  },
  {
    id: "luce-light",
    name: "Luce & Light",
    description:
      "Excellence italienne dans l'éclairage décoratif et architectural. Collections haut de gamme pour espaces premium.",
    url: "https://www.lucelight.it",
    specialty: "Design lumineux haut de gamme",
  },
  {
    id: "iguzzini",
    name: "iGuzzini",
    description:
      "Innovation technologique et durabilité. Solutions d'éclairage professionnel pour musées, hôtels et espaces tertiaires.",
    url: "https://www.iguzzini.com",
    specialty: "Innovation & performance",
  },
  {
    id: "prado",
    name: "Prado",
    description:
      "Spécialiste français de l'éclairage d'ambiance et de l'éclairage d'accentuation pour projets résidentiels et commerciaux.",
    url: "https://www.prado-light.com",
    specialty: "Ambiances lumineuses",
  },
  {
    id: "helvar",
    name: "HELVAR",
    description:
      "Systèmes de contrôle d'éclairage intelligents. DALI, CASAMBI, gestion centralisée pour bâtiments tertiaires.",
    url: "https://www.helvar.com",
    specialty: "Domotique & contrôle intelligent",
  },
];

export const services = [
  {
    id: "etude-eclairage",
    title: "Étude d'éclairage",
    description:
      "Analyse complète de vos besoins lumineux avec simulations DIALux EVO. Calculs d'éclairement, uniformité, éblouissement — tout est mesuré pour garantir le confort visuel et la conformité aux normes.",
    icon: "lightbulb",
  },
  {
    id: "implantation",
    title: "Plan d'implantation",
    description:
      "Plans techniques précis de positionnement des luminaires sur vos plans d'architecte. Calepinage optimisé, zones éclairées, puissances installées — une vision claire avant tout chantier.",
    icon: "layout",
  },
  {
    id: "dialux",
    title: "Simulation DIALux EVO",
    description:
      "Rendu photométrique réaliste de votre projet avant réalisation. Visualisez vos espaces éclairés, ajustez les ambiances, validez les normes — tout cela en amont du chantier.",
    icon: "monitor",
  },
  {
    id: "domotique",
    title: "Domotique & contrôle",
    description:
      "Intégration HELVAR, CASAMBI, DALI pour piloter intelligemment votre éclairage. Scénarios automatisés, détection de présence, variation de lumière — l'éclairage qui s'adapte.",
    icon: "settings",
  },
  {
    id: "conseil",
    title: "Accompagnement projet",
    description:
      "De la conception à la livraison, nos ingénieurs lumière vous accompagnent. Sélection des luminaires, coordination avec les corps d'état, suivi de chantier — votre partenaire de confiance.",
    icon: "users",
  },
  {
    id: "normes",
    title: "Conformité tertiaire",
    description:
      "Maîtrise des normes EN 12464-1, décret tertiaire BACS, RT2020. Nous garantissons la conformité réglementaire de votre installation tout en optimisant les performances énergétiques.",
    icon: "shield",
  },
];

export const projects = [
  {
    id: "villa-cap-ferret",
    title: "Villa Contemporaine",
    location: "Cap Ferret",
    type: "Résidentiel",
    description:
      "Conception lumineuse intégrale d'une villa 400m² face à l'océan. Éclairage architectural encastré Modular, scénarios domotiques CASAMBI, zéro pollution lumineuse.",
    challenge:
      "Créer une ambiance résidentielle premium en harmonie avec les couchers de soleil, sans perturber la vue.",
    solution:
      "Luminaires Modular Focus encastrés, variation 0-100% par zones, scénarios automatiques selon l'heure et la saison.",
    brands: ["Modular", "HELVAR"],
    tags: ["Villa", "Résidentiel", "Domotique", "Plage"],
    imageQuery: "modern villa interior lighting architecture",
    year: "2024",
  },
  {
    id: "restaurant-paris",
    title: "Restaurant Gastronomique",
    location: "Paris 8e",
    type: "Restauration",
    description:
      "Mise en scène lumineuse d'un restaurant étoilé. Éclairage d'accentuation des tableaux, ambiances modulables par service, respect du travail des chefs.",
    challenge:
      "Équilibrer l'éclairage des assiettes, des œuvres d'art et l'ambiance générale sur 3 services différents.",
    solution:
      "iGuzzini Laser Blade pour l'accentuation, Kreon Pista pour les tables, scénarios HELVAR automatiques.",
    brands: ["iGuzzini", "Kreon", "HELVAR"],
    tags: ["Restaurant", "Gastronomique", "Paris", "Ambiance"],
    imageQuery: "luxury restaurant interior lighting design",
    year: "2024",
  },
  {
    id: "bureaux-tech",
    title: "Campus Tertiaire",
    location: "La Défense",
    type: "Tertiaire",
    description:
      "Éclairage 3 000m² de bureaux open space selon norme EN 12464-1. Gestion DALI centralisée, détection présence, optimisation énergétique — conformité décret tertiaire.",
    challenge:
      "Répondre aux normes d'éclairage bureaux (500 lux, UGR<19) tout en réduisant la consommation de 40%.",
    solution:
      "Luce & Light Oikos LED 4000K, détecteurs HELVAR, programmation horaire — économie de 43% vérifiée.",
    brands: ["Luce & Light", "HELVAR"],
    tags: ["Bureaux", "Tertiaire", "La Défense", "BACS", "Normes"],
    imageQuery: "modern office open space lighting",
    year: "2023",
  },
  {
    id: "hotel-boutique",
    title: "Hôtel Boutique",
    location: "Lyon",
    type: "Hôtellerie",
    description:
      "Identité lumineuse complète d'un hôtel 5 étoiles : hall, restaurant, 42 chambres, spa. Chaque espace possède sa propre signature lumineuse.",
    challenge:
      "Créer une cohérence lumineuse sur l'ensemble de l'hôtel tout en personnalisant chaque espace.",
    solution:
      "Prado Aura pour le hall, Modular Puri pour les chambres, iGuzzini pour le spa — unifiés par HELVAR DALI.",
    brands: ["Prado", "Modular", "iGuzzini", "HELVAR"],
    tags: ["Hôtel", "Luxe", "Lyon", "Hôtellerie"],
    imageQuery: "luxury boutique hotel lobby lighting",
    year: "2023",
  },
  {
    id: "showroom-design",
    title: "Showroom Design",
    location: "Bordeaux",
    type: "Commercial",
    description:
      "Mise en valeur d'un showroom de mobilier haut de gamme. Éclairage accent pour chaque pièce exposée, ambiances changeantes, système de présentation automatisé.",
    challenge:
      "Valoriser chaque meuble de manière optimale tout en créant une atmosphère de boutique de luxe.",
    solution:
      "Kreon Multispot sur rail magnétique, variation individuelle par spot, scénarios de présentation clients.",
    brands: ["Kreon"],
    tags: ["Showroom", "Commercial", "Design", "Bordeaux"],
    imageQuery: "luxury furniture showroom lighting",
    year: "2024",
  },
  {
    id: "residence-privee",
    title: "Résidence Privée",
    location: "Megève",
    type: "Résidentiel",
    description:
      "Chalet alpin contemporain 600m². Éclairage architectural intégré dans les boiseries, éclairage extérieur paysager, automatisation complète par scénarios.",
    challenge:
      "Intégrer la lumière de façon invisible dans une architecture alpine contemporaine aux finitions bois.",
    solution:
      "Profilés LED Modular encastrés dans boiseries, Prado Outdoor pour jardins, CASAMBI pour contrôle tablette.",
    brands: ["Modular", "Prado", "HELVAR"],
    tags: ["Chalet", "Montagne", "Résidentiel", "Luxe"],
    imageQuery: "mountain chalet interior modern lighting",
    year: "2025",
  },
];

export const blogPosts = [
  {
    id: "etude-eclairage-tertiaire",
    slug: "pourquoi-etude-eclairage-essentielle-projet-tertiaire",
    title: "Pourquoi une étude d'éclairage est essentielle dans un projet tertiaire",
    excerpt:
      "Norme EN 12464-1, décret tertiaire, conformité BACS — l'éclairage tertiaire n'est plus une option. Découvrez pourquoi une étude d'éclairage est incontournable avant tout aménagement.",
    category: "Éclairage Tertiaire",
    readTime: "8 min",
    date: "2025-03-15",
    tags: ["étude d'éclairage", "tertiaire", "normes", "EN 12464-1"],
  },
  {
    id: "domotique-economies-energie",
    slug: "reduire-consommation-energetique-domotique-eclairage",
    title: "Comment réduire sa consommation énergétique grâce à la domotique",
    excerpt:
      "DALI, CASAMBI, détection de présence, variation automatique — les solutions domotiques modernes permettent de réduire jusqu'à 60% la consommation d'éclairage. Mode d'emploi.",
    category: "Domotique",
    readTime: "6 min",
    date: "2025-02-28",
    tags: ["domotique", "économies d'énergie", "DALI", "CASAMBI"],
  },
  {
    id: "normes-eclairage-bureaux",
    slug: "normes-eclairage-bureaux-en-12464",
    title: "Les normes d'éclairage dans les bureaux : guide complet 2025",
    excerpt:
      "500 lux, UGR inférieur à 19, IRC supérieur à 80 — les normes d'éclairage pour bureaux sont précises. Voici tout ce que vous devez savoir pour être en conformité.",
    category: "Normes",
    readTime: "10 min",
    date: "2025-02-10",
    tags: ["normes", "bureaux", "EN 12464-1", "UGR", "lux"],
  },
  {
    id: "choisir-luminaire-architectural",
    slug: "comment-choisir-luminaire-architectural",
    title: "Comment choisir un luminaire architectural pour votre projet",
    excerpt:
      "Rendu de couleur, température de couleur, angle de faisceau, IP — les critères de sélection d'un luminaire architectural sont nombreux. Voici la méthode des experts.",
    category: "Éclairage Architectural",
    readTime: "7 min",
    date: "2025-01-20",
    tags: ["luminaire", "IRC", "température couleur", "architectural"],
  },
  {
    id: "dialux-evo-simulation",
    slug: "dialux-evo-comprendre-simulations-eclairage",
    title: "DIALux EVO : comprendre les simulations d'éclairage",
    excerpt:
      "Rendu photométrique, calcul d'uniformité, courbes isocandela — DIALux EVO est le logiciel de référence pour simuler l'éclairage avant réalisation. Démystifions-le.",
    category: "DIALux EVO",
    readTime: "9 min",
    date: "2025-01-05",
    tags: ["DIALux EVO", "simulation", "photométrie", "calcul éclairage"],
  },
  {
    id: "tendances-eclairage-2026",
    slug: "eclairage-architectural-tendances-2026",
    title: "Éclairage architectural : tendances 2026",
    excerpt:
      "Lumière humaine HCL, contrôle circadien, intégration IA, bioluminescence architecturale — les tendances 2026 redéfinissent l'éclairage architectural. Notre analyse.",
    category: "Éclairage Architectural",
    readTime: "8 min",
    date: "2024-12-15",
    tags: ["tendances", "2026", "HCL", "innovation", "lumière circadienne"],
  },
  {
    id: "lumiere-bien-etre",
    slug: "pourquoi-lumiere-influence-bien-etre",
    title: "Pourquoi la lumière influence le bien-être et la productivité",
    excerpt:
      "Cortisol, mélatonine, rythme circadien — la lumière agit directement sur notre biologie. Comprendre ces mécanismes permet de concevoir des espaces qui boostent bien-être et performance.",
    category: "Bien-être",
    readTime: "7 min",
    date: "2024-11-30",
    tags: ["bien-être", "productivité", "lumière", "circadien", "santé"],
  },
  {
    id: "eclairage-decoratif-vs-technique",
    slug: "difference-eclairage-decoratif-technique",
    title: "Différence entre éclairage décoratif et éclairage technique",
    excerpt:
      "Éclairage d'ambiance, d'accentuation, de tâche — les couches de lumière d'un espace. Comprendre la différence entre décoratif et technique pour mieux composer vos espaces.",
    category: "Éclairage Architectural",
    readTime: "6 min",
    date: "2024-11-10",
    tags: ["éclairage", "décoratif", "technique", "ambiance", "accentuation"],
  },
];

export const productCategories = [
  {
    id: "spots-encastres",
    title: "Spots encastrés",
    description: "Éclairage de précision intégré dans le plafond pour une finition architecturale parfaite.",
    parent: "eclairage-architectural",
  },
  {
    id: "luminaires-lineaires",
    title: "Luminaires linéaires",
    description: "Profilés LED et luminaires linéaires pour continuité lumineuse et esthétique épurée.",
    parent: "eclairage-architectural",
  },
  {
    id: "eclairage-indirect",
    title: "Éclairage indirect",
    description: "Lumière diffuse et douce pour ambiances résidentielles et tertiaires premium.",
    parent: "eclairage-architectural",
  },
  {
    id: "eclairage-exterieur",
    title: "Éclairage extérieur",
    description: "Façades, jardins, allées — l'éclairage architectural en dehors de vos murs.",
    parent: "eclairage-architectural",
  },
  {
    id: "gestion-eclairage",
    title: "Gestion d'éclairage",
    description: "Systèmes DALI, DMX, CASAMBI pour contrôle intelligent de l'ensemble de votre parc lumineux.",
    parent: "domotique",
  },
  {
    id: "scenarios-lumineux",
    title: "Scénarios lumineux",
    description: "Programmation d'ambiances automatiques selon l'heure, la présence ou vos préférences.",
    parent: "domotique",
  },
];
