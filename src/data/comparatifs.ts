export interface Comparatif {
  slug: string;
  titre: string;
  sujets: [string, string];
  description: string;
  keywords: string[];
  champion?: string; // slug of winner, or null if tie
  tableauComparaison: {
    critere: string;
    poids: "critique" | "important" | "mineur";
    a: string;
    b: string;
    avantage: "a" | "b" | "egal";
  }[];
  casUsageA: string[];
  casUsageB: string[];
  conclusion: string;
  faq: { question: string; reponse: string }[];
}

export const comparatifs: Comparatif[] = [
  {
    slug: "knx-vs-dali",
    titre: "KNX vs DALI — Quel protocole choisir pour votre bâtiment ?",
    sujets: ["KNX", "DALI"],
    description:
      "KNX et DALI sont souvent présentés comme concurrents, mais ils répondent à des besoins différents. Ce comparatif technique vous aide à choisir — ou à comprendre pourquoi vous devriez combiner les deux.",
    keywords: ["KNX vs DALI", "différence KNX DALI", "choisir KNX DALI", "protocole domotique bâtiment"],
    champion: undefined,
    tableauComparaison: [
      { critere: "Périmètre fonctionnel", poids: "critique", a: "Éclairage, volets, HVAC, sécurité, énergie", b: "Éclairage uniquement (+ RGB/Tunable White)", avantage: "a" },
      { critere: "Adressage individuel", poids: "critique", a: "Par zone/groupe", b: "Par luminaire (0-255)", avantage: "b" },
      { critere: "Reporting énergétique", poids: "important", a: "Via passerelle dédiée", b: "Natif (DALI-2 Power Reporting)", avantage: "b" },
      { critere: "Coût d'installation", poids: "critique", a: "~80-120 €/m²", b: "~40-70 €/m²", avantage: "b" },
      { critere: "Câblage requis", poids: "important", a: "Bus KNX 2×2×0,8 mm²", b: "Bus DALI 2 fils non polarisés", avantage: "b" },
      { critere: "Interopérabilité", poids: "critique", a: "Tous fabricants certifiés KNX", b: "DALI-2 IEC 62386 (certifié DiiA)", avantage: "egal" },
      { critere: "Programmation", poids: "important", a: "ETS (logiciel KNX, programmeur requis)", b: "Via GTB, HELVAR, simplecue", avantage: "b" },
      { critere: "Compatibilité BMS/GTB", poids: "critique", a: "Natif — KNX est l'interface BMS de référence", b: "Via passerelle KNX-DALI", avantage: "a" },
      { critere: "Conformité décret tertiaire", poids: "critique", a: "Oui via compteurs énergie KNX", b: "Oui natif DALI-2 (mesure par ballast)", avantage: "egal" },
      { critere: "Scalabilité", poids: "important", a: "Jusqu'à 64 appareils/ligne, 255 lignes", b: "Jusqu'à 64 ballasts/bus, multi-master", avantage: "a" },
    ],
    casUsageA: [
      "Bâtiment neuf complet (volets + HVAC + éclairage centralisés)",
      "Grand tertiaire avec salle technique GTB",
      "Hôtel 4-5 étoiles (chambres + communs + back-of-house)",
      "Siège social avec exigences BACS niveau A",
    ],
    casUsageB: [
      "Rénovation éclairage seul dans tertiaire existant",
      "Espace avec nombreux luminaires à contrôler individuellement",
      "Conformité décret tertiaire sur l'éclairage uniquement",
      "Showroom, musée ou retail avec scènes complexes",
    ],
    conclusion:
      "KNX et DALI ne s'opposent pas — ils se complètent. La combinaison optimale pour les grands tertiaires est KNX pour l'architecture globale du bâtiment et DALI pour le contrôle fin de chaque circuit d'éclairage. Pour les projets mono-usage éclairage, DALI seul offre un meilleur rapport performance/coût.",
    faq: [
      {
        question: "Peut-on connecter DALI dans un système KNX ?",
        reponse: "Oui, les passerelles KNX-DALI (ex. HELVAR, Tridonic) permettent d'intégrer un bus DALI complet comme objet KNX. C'est la configuration la plus courante dans les grands bâtiments : KNX supervise l'ensemble, DALI gère l'éclairage avec précision.",
      },
      {
        question: "KNX est-il toujours obligatoire pour le décret tertiaire ?",
        reponse: "Non. DALI-2 permet le reporting énergétique au niveau de chaque ballast, ce qui est suffisant pour la conformité décret tertiaire. KNX est nécessaire si vous souhaitez une supervision centralisée multi-systèmes (éclairage + CVC + stores).",
      },
      {
        question: "Quel est le coût d'un système KNX vs DALI pour 500 m² ?",
        reponse: "Pour 500 m² de bureaux : KNX complet (éclairage + volets + HVAC) représente environ 40 000-60 000 €. DALI éclairage seul : 20 000-35 000 €. Ces estimations incluent matériel, câblage et programmation, hors luminaires.",
      },
      {
        question: "KNX ou DALI pour une rénovation ?",
        reponse: "En rénovation légère (remplacement luminaires seul), DALI s'impose : un bus 2 fils suffit, souvent glissé dans les chemins de câbles existants. KNX en rénovation nécessite un câblage bus dédié — faisable en rénovation lourde avec accès aux faux-plafonds, mais coûteux.",
      },
    ],
  },
  {
    slug: "casambi-vs-dali",
    titre: "CASAMBI vs DALI — Sans fil ou filaire pour l'éclairage connecté ?",
    sujets: ["CASAMBI", "DALI"],
    description:
      "CASAMBI Bluetooth Mesh révolutionne la rénovation éclairage. Mais DALI reste la référence tertiaire. Ce comparatif vous aide à choisir selon votre contexte : bâtiment neuf, rénovation, résidentiel ou tertiaire.",
    keywords: ["CASAMBI vs DALI", "éclairage sans fil vs filaire", "Bluetooth Mesh éclairage", "DALI rénovation"],
    champion: undefined,
    tableauComparaison: [
      { critere: "Type de réseau", poids: "critique", a: "Sans fil Bluetooth Mesh (2,4 GHz)", b: "Filaire bus 2 fils", avantage: "egal" },
      { critere: "Facilité d'installation", poids: "critique", a: "Aucun câblage supplémentaire", b: "Bus DALI dédié requis", avantage: "a" },
      { critere: "Fiabilité réseau", poids: "critique", a: "Très bonne (mesh auto-réparant)", b: "Excellente (filaire)", avantage: "b" },
      { critere: "Portée", poids: "important", a: "~30m (mesh étend la portée)", b: "300m sur bus principal", avantage: "b" },
      { critere: "Adressage", poids: "critique", a: "Par nœud (luminaire individuel)", b: "Par ballast (individuel)", avantage: "egal" },
      { critere: "Coût matériel", poids: "critique", a: "Modules CASAMBI : 30-60 €/luminaire", b: "Ballast DALI : 15-40 €/luminaire", avantage: "b" },
      { critere: "Pilotage mobile", poids: "important", a: "App iOS/Android native intuitive", b: "Via passerelle IP ou panel", avantage: "a" },
      { critere: "Reporting énergétique", poids: "important", a: "Via CASAMBI Energy (partiel)", b: "Natif DALI-2 (précis)", avantage: "b" },
      { critere: "Intégration GTB/BMS", poids: "critique", a: "CASAMBI Gateway (API cloud)", b: "Natif KNX/BACnet/Modbus", avantage: "b" },
      { critere: "Idéal pour", poids: "critique", a: "Rénovation, résidentiel, hôtellerie boutique", b: "Tertiaire neuf, décret, grandes surfaces", avantage: "egal" },
    ],
    casUsageA: [
      "Rénovation d'appartement ou maison sans nouveau câblage",
      "Hôtel boutique ou restaurant gastronomique",
      "Espace retail ou showroom avec mobilité du mobilier",
      "Projets où l'installation rapide est critique (mise en service 1 jour)",
    ],
    casUsageB: [
      "Bureaux tertiaires soumis au décret tertiaire",
      "Bâtiment neuf avec GTB centralisée",
      "Grande surface (>500 m²) avec nombreux circuits",
      "Projet avec exigence de reporting BACS",
    ],
    conclusion:
      "CASAMBI gagne clairement en rénovation et dans les projets où la simplicité d'installation prime. DALI reste incontournable en tertiaire neuf dès lors qu'une GTB ou un reporting énergétique précis est requis. La combinaison CASAMBI + passerelle peut être un compromis viable en rénovation tertiaire de taille moyenne.",
    faq: [
      {
        question: "CASAMBI fonctionne-t-il sans connexion internet ?",
        reponse: "Oui. Le réseau CASAMBI Bluetooth Mesh fonctionne en autonomie complète. L'application mobile se connecte directement en Bluetooth. Internet est uniquement nécessaire pour la télécommande à distance via CASAMBI Gateway.",
      },
      {
        question: "Quelles marques de luminaires supportent CASAMBI ?",
        reponse: "La plupart des grands fabricants proposent des modules CASAMBI intégrés ou en retrofit : Modular, Kreon, Prado, Reggiani, iGuzzini, Zumtobel, Delta Light, et des centaines d'autres. Le module CASAMBI CBU-ASD peut retrofiter tout luminaire DALI ou 0-10V.",
      },
      {
        question: "CASAMBI est-il compatible avec le décret tertiaire ?",
        reponse: "CASAMBI peut contribuer à la conformité décret tertiaire via sa fonction CASAMBI Energy. Cependant, la précision de mesure est inférieure à DALI-2 (mesure par ballast). Pour des obligations strictes de reporting, DALI reste recommandé ou un compteur énergétique dédié doit être ajouté.",
      },
    ],
  },
  {
    slug: "knx-vs-casambi",
    titre: "KNX vs CASAMBI — Le tout-en-un filaire ou le sans fil modulaire ?",
    sujets: ["KNX", "CASAMBI"],
    description:
      "KNX, standard européen de la domotique complète, face à CASAMBI, le challenger sans fil de la rénovation. Ce comparatif couvre coûts, fonctionnalités, cas d'usage et recommandations pratiques.",
    keywords: ["KNX vs CASAMBI", "domotique filaire vs sans fil", "KNX rénovation", "CASAMBI tertiaire"],
    champion: undefined,
    tableauComparaison: [
      { critere: "Éclairage", poids: "critique", a: "Oui (via DALI ou direct)", b: "Oui (spécialité)", avantage: "b" },
      { critere: "Volets / stores", poids: "important", a: "Oui, natif", b: "Non (non supporté)", avantage: "a" },
      { critere: "Chauffage / CVC", poids: "important", a: "Oui, natif (thermostats KNX)", b: "Non", avantage: "a" },
      { critere: "Complexité d'installation", poids: "critique", a: "Élevée (ETS, programmeur certifié)", b: "Faible (app mobile, auto-config)", avantage: "b" },
      { critere: "Coût global", poids: "critique", a: "~80-120 €/m²", b: "~30-50 €/m² (éclairage seul)", avantage: "b" },
      { critere: "Évolutivité", poids: "important", a: "Très haute (255 lignes, tout type)", b: "Bonne (2047 nœuds max par réseau)", avantage: "a" },
      { critere: "Rénovation", poids: "critique", a: "Difficile (câblage bus obligatoire)", b: "Très facile (sans fil)", avantage: "b" },
      { critere: "Bâtiment neuf", poids: "critique", a: "Excellent (câblage natif)", b: "Possible (mais sous-optimisé)", avantage: "a" },
    ],
    casUsageA: [
      "Maison neuve haut de gamme avec domotique complète",
      "Bâtiment tertiaire avec supervision multi-systèmes",
      "Projet où volets + HVAC + éclairage + sécurité sont intégrés",
    ],
    casUsageB: [
      "Rénovation résidentielle ou hôtelière",
      "Projet éclairage seul sans besoin volets/HVAC",
      "Installation rapide avec budget maîtrisé",
    ],
    conclusion:
      "KNX est la solution la plus complète mais aussi la plus complexe et coûteuse. CASAMBI brille en rénovation éclairage. Pour une maison neuve intégrant volets et HVAC, KNX reste difficile à concurrencer. Pour la rénovation ou les projets éclairage-seulement, CASAMBI offre un ratio valeur/coût imbattable.",
    faq: [
      {
        question: "Peut-on migrer de CASAMBI vers KNX plus tard ?",
        reponse: "Partiellement. Les luminaires DALI compatibles CASAMBI peuvent être reprogrammés sur bus DALI KNX. Cependant, les modules CASAMBI deviennent redondants et les économies réalisées initialement sont partiellement annulées par la migration. Il est conseillé de choisir la solution finale dès le départ.",
      },
      {
        question: "KNX peut-il contrôler des luminaires CASAMBI ?",
        reponse: "Oui, via la passerelle CASAMBI-KNX (ex. de Casambi Technologies ou de fabricants tiers). Les scènes CASAMBI sont alors déclenchables depuis le système KNX, permettant une intégration hybride dans les projets de rénovation KNX existants.",
      },
    ],
  },
  {
    slug: "dali-vs-0-10v",
    titre: "DALI vs 0-10V — Quelle interface de variation choisir ?",
    sujets: ["DALI", "0-10V"],
    description:
      "DALI et 0-10V (ou 1-10V) sont les deux interfaces de variation les plus répandues en éclairage professionnel. Ce comparatif détaille les différences techniques et les cas d'usage de chaque solution.",
    keywords: ["DALI vs 0-10V", "interface variation éclairage", "DALI 1-10V différence", "ballast variation"],
    champion: "DALI",
    tableauComparaison: [
      { critere: "Type de signal", poids: "critique", a: "Numérique (protocole)", b: "Analogique (tension 0-10V)", avantage: "a" },
      { critere: "Adressage individuel", poids: "critique", a: "Oui (0-255 par bus)", b: "Non (une ligne = un groupe)", avantage: "a" },
      { critere: "Feedback ballast", poids: "critique", a: "Oui (défauts, durée de vie, watts)", b: "Non", avantage: "a" },
      { critere: "Câblage", poids: "important", a: "Bus 2 fils non polarisés", b: "2 fils de commande + alimentation", avantage: "egal" },
      { critere: "Coût matériel", poids: "critique", a: "Ballast DALI : +5-15 € vs standard", b: "Driver 0-10V : +2-5 € vs standard", avantage: "b" },
      { critere: "Scènes et programmes", poids: "important", a: "16 scènes programmables en mémoire", b: "Aucun (signal seul)", avantage: "a" },
      { critere: "Interopérabilité", poids: "critique", a: "Standard IEC 62386 certifié", b: "Standard propriétaire selon fabricant", avantage: "a" },
      { critere: "Utilisation actuelle", poids: "important", a: "Standard tertiaire haut de gamme", b: "Tertiaire entrée de gamme, résidentiel", avantage: "egal" },
    ],
    casUsageA: [
      "Tertiaire avec exigence de reporting énergétique",
      "Espace avec luminaires individuellement adressables",
      "Projet avec scènes complexes et conformité normative",
    ],
    casUsageB: [
      "Projet budget réduit sans besoin d'adressage individuel",
      "Variation simple par zone dans résidentiel",
      "Remplacement d'installation existante 0-10V",
    ],
    conclusion:
      "DALI est techniquement supérieur sur tous les critères fonctionnels. Le surcoût par ballast est marginal face aux bénéfices (diagnostic, reporting, adressage). En 2024, DALI est le standard recommandé pour tout projet tertiaire. Le 0-10V reste pertinent uniquement pour des projets à très budget limité ou en remplacement d'équipements existants.",
    faq: [
      {
        question: "Un driver DALI peut-il être utilisé en 0-10V ?",
        reponse: "Non directement. Un driver DALI utilise une interface numérique incompatible avec le signal analogique 0-10V. Des passerelles 0-10V vers DALI existent (ex. Tridonic, OSRAM) pour migrer une installation 0-10V existante vers DALI, mais le pilotage reste approximatif.",
      },
      {
        question: "DALI-2 est-il rétrocompatible avec DALI 1 ?",
        reponse: "Oui. DALI-2 (IEC 62386 edition 2) est rétrocompatible avec les équipements DALI 1. Les nouvelles fonctionnalités de DALI-2 (Power Reporting, Application Controllers) nécessitent du matériel DALI-2 certifié, mais un bus mixte est parfaitement fonctionnel.",
      },
    ],
  },
  {
    slug: "led-vs-fluorescent",
    titre: "LED vs Tubes fluorescents T8 — Faut-il encore rénover en 2025 ?",
    sujets: ["LED", "Tubes fluorescents"],
    description:
      "Les tubes fluorescents T8 sont progressivement interdits en Europe. Ce comparatif technique justifie la migration LED avec des chiffres précis : ROI, qualité de lumière, maintenance et conformité réglementaire.",
    keywords: ["LED vs fluorescent", "remplacement tube T8 LED", "migration LED bureau", "ROI remplacement LED"],
    champion: "LED",
    tableauComparaison: [
      { critere: "Efficacité lumineuse", poids: "critique", a: "120-160 lm/W", b: "80-100 lm/W", avantage: "a" },
      { critere: "Durée de vie", poids: "critique", a: "50 000 à 100 000 h (L80)", b: "10 000 à 15 000 h", avantage: "a" },
      { critere: "IRC", poids: "important", a: "Ra80 à Ra95 selon qualité", b: "Ra85 typique (T8 triphosphore)", avantage: "egal" },
      { critere: "Disponibilité DALI", poids: "important", a: "100% des gammes tertiaires", b: "Disponible mais en fin de production", avantage: "a" },
      { critere: "Coût lampe", poids: "critique", a: "15-60 € (tube LED 60-120 cm)", b: "5-15 € (tube T8)", avantage: "b" },
      { critere: "Maintenance (5 ans)", poids: "critique", a: "Très faible (pas de remplacement)", b: "2-3 remplacements par tube", avantage: "a" },
      { critere: "Réglementation EU 2023", poids: "critique", a: "Conforme (en cours d'évolution)", b: "Interdit à la vente (règl. EU 2019/2020)", avantage: "a" },
      { critere: "ROI migration", poids: "critique", a: "—", b: "ROI < 3 ans dans la plupart des cas", avantage: "a" },
    ],
    casUsageA: ["Tout bâtiment neuf ou en rénovation"],
    casUsageB: ["Maintien d'existant jusqu'à fin de vie (non recommandé après 2023)"],
    conclusion:
      "La migration LED n'est plus optionnelle. Les tubes T8 fluorescents sont interdits à la vente en Europe depuis 2023 (règlement EU 2019/2020). Le ROI moyen d'une migration LED est inférieur à 3 ans dans les bureaux éclairés 2 500 h/an. Le coût de l'inaction (maintenance, énergie, non-conformité) dépasse largement le coût de migration.",
    faq: [
      {
        question: "Les tubes T8 fluorescents sont-ils vraiment interdits ?",
        reponse: "Oui. Le règlement EU 2019/2020 a supprimé la mise sur le marché des lampes fluorescentes T8 en Europe à partir du 25 août 2023. Les stocks existants peuvent être écoulés, mais aucun nouveau tube ne peut être importé ou fabriqué pour le marché européen.",
      },
      {
        question: "Peut-on remplacer un tube T8 par un tube LED sans changer le ballast ?",
        reponse: "Cela dépend du tube LED : les tubes 'Type A' fonctionnent sur le ballast existant (compatibilité variable selon fabricant). Les tubes 'Type B' nécessitent de déposer le ballast (connexion directe secteur). Pour une installation fiable et conforme, le remplacement du luminaire complet (Type C avec driver DALI) est recommandé.",
      },
    ],
  },
];
