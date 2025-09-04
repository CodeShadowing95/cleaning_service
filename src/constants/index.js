
const servicesDesc = [
  {
    id: 1,
    title: "Nettoyage de vos bureaux",
    description: "Nous assurons un nettoyage complet et rigoureux de vos bureaux, pour offrir à vos collaborateurs un espace de travail sain propice à la productivité.",
    badge: "Propre",
  },
  {
    id: 2,
    title: "Nettoyage de sol et entretien des murs",
    description: "Qu’il s’agisse de moquettes, carrelages ou parquets, nous veillons à ce que vos surfaces soient impeccables, sans taches ni traces.",
    badge: "Clean",
  },
  {
    id: 3,
    title: "Ménage et époussetage",
    description: "Nous assurons un dépoussiérage minutieux et un ménage en profondeur de chaque recoin, en apportant une attention particulière aux zones souvent négligées.",
    badge: "Scintillant",
  },
  {
    id: 4,
    title: "Gestion des déchets",
    description: "Nous nous occupons de la collecte et du remplacement des sacs poubelles dans vos espaces de travail.",
    badge: "Débarras",
  },
  {
    id: 5,
    title: "Nettoyage de surfaces vitrées",
    description: "Nous vous assurons des surfaces vitrées éclatantes, sans traces ni résidus. Des techniques et produits adaptés pour chaque type de surface.",
    badge: "Luisant",
  },
  {
    id: 6,
    title: "Nettoyage de fin de chantier",
    description: "Nous intervenons après les travaux pour une remise en état complète de vos espaces. Dépoussiérage, élimination des résidus et des traces de chantier.",
    badge: "Impeccable",
  },
  {
    id: 7,
    title: "Fourniture de matériels sanitaires",
    description: "Nous assurons l’approvisionnement régulier de matériels sanitaires essentiels : papier hygiénique, savon, serviettes et autres produits indispensables.",
    badge: "Approvisionnement",
  }
];

const generalCleaningServices = [
  {
    id: 1,
    label: "Outils de nettoyage general",
    items: [
      { id: 1, name: "Serpillière (avec seau et presse)" },
      { id: 2, name: "Balai et pelle à poussière" },
      { id: 3, name: "Aspirateur (pour tapis et sols durs)" },
      { id: 4, name: "Chiffons en microfibre (pour les surfaces et le dépoussiérage)" },
      { id: 5, name: "Plumeau (télescopique pour les zones en hauteur)" },
      { id: 6, name: "Brosses de nettoyage (de différentes tailles pour les taches tenaces)" },
      { id: 7, name: "Éponges et tampons à récurer" },
      { id: 8, name: "Raclette (pour les vitres et surfaces vitrées)" },
      { id: 9, name: "Fournitures d'outils de nettoyage" },
    ],
  },
  {
    id: 2,
    label: "Produits de nettoyage",
    items: [
      { id: 1, name: "Nettoyant multi-usage" },
      { id: 2, name: "Nettoyant pour vitres" },
      { id: 3, name: "Désinfectants" },
      { id: 4, name: "Nettoyant pour sols (carrelages, bois, ou surfaces spécifiques)" },
      { id: 5, name: "Nettoyant pour salle de bains (lavabos, baignoires et toilettes)" },
      { id: 6, name: "Produits écologiques ou biodégradables" },
      { id: 7, name: "Fournitures de produits de nettoyage" },
    ],
  },
  {
    id: 3,
    label: "Gestion des déchets",
    items: [
      { id: 1, name: "Vidage et changement de poubelles (de différentes tailles)" },
      { id: 2, name: "Fournitures de sacs de poubelle" },
    ],
  },
  {
    id: 4,
    label: "Produits de désinfection",
    items: [
      { id: 1, name: "Gel désinfectant pour les mains" },
      { id: 2, name: "Lingettes désinfectantes" },
      { id: 3, name: "Pulvérisateurs (pour solutions personnalisées)" },
      { id: 4, name: "Fournitures de désinfectants" },
    ],
  },
  {
    id: 5,
    label: "Équipements de sécurité",
    items: [
      { id: 1, name: "Gants (jetables et réutilisables)" },
      { id: 2, name: "Masques" },
      { id: 3, name: "Lunettes de protection" },
      { id: 4, name: "Tablier ou uniforme" },
      { id: 7, name: "Fournitures d'équipements de protection" },
    ],
  },
  {
    id: 6,
    label: "Autres essentiels",
    items: [
      { id: 1, name: "Brosses pour toilettes" },
      { id: 2, name: "Essuie-tout" },
      { id: 3, name: "Pulvérisateur d’aérosol (pour parfumer ou désinfecter l’air)" },
      { id: 4, name: "Tapis de sol (pour,eviter de salir pendant le nettoyage)" },
      { id: 5, name: "Shampouineuse pour tapis" },
      { id: 6, name: "Escabeau (pour atteindre les endroits en hauteur)" },
      { id: 7, name: "Et bien d'autres ..." },
    ],
  },
];

export {
  servicesDesc,
  generalCleaningServices,
}