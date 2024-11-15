const servicesDesc = [
  {
    id: 1,
    title: "Nettoyage professionnel",
    backtitle: "",
    description: "Des prestations de nettoyage de haute qualité, adaptées à vos besoins. Offrez-vous un environnement éclatant sans lever le petit doigt.",
    image: "",
    hbarColor: "bg-sky-200",
    link: "#"
  },
];

// For Marquee starts
const generalCleaningServices = [
  {
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
    ],
    className: "flex justify-center items-center w-[200px] h-[150px] bg-rose-800 rounded-xl shadow-lg overflow-hidden m-2",
  },
  {
    label: "Produits de nettoyage",
    items: [
      { id: 1, name: "Nettoyant multi-usage" },
      { id: 2, name: "Nettoyant pour vitres" },
      { id: 3, name: "Désinfectants" },
      { id: 4, name: "Nettoyant pour sols (carrelages, bois, ou surfaces spécifiques)" },
      { id: 5, name: "Nettoyant pour salle de bains (lavabos, baignoires et toilettes)" },
      { id: 6, name: "Produits écologiques ou biodégradables" },
    ],
    className: "flex justify-center items-center w-[200px] h-[150px] bg-cyan-800 rounded-xl shadow-lg overflow-hidden m-2",
  },
  {
    label: "Gestion des déchets",
    items: [
      { id: 1, name: "Vidage et changement de poubelles (de différentes tailles)" },
      { id: 2, name: "Fournitures de sacs de poubelle" },
    ],
    className: "flex justify-center items-center w-[200px] h-[150px] bg-amber-800 rounded-xl shadow-lg overflow-hidden m-2",
  },
  {
    label: "Fournitures de désinfection",
    items: [
      { id: 1, name: "Gel désinfectant pour les mains" },
      { id: 2, name: "Lingettes désinfectantes" },
      { id: 3, name: "Pulvérisateurs (pour solutions personnalisées)" },
    ],
    className: "flex justify-center items-center w-[200px] h-[150px] bg-green-800 rounded-xl shadow-lg overflow-hidden m-2",
  },
  {
    label: "Équipements de sécurité",
    items: [
      { id: 1, name: "Gants (jetables et réutilisables)" },
      { id: 2, name: "Masques" },
      { id: 3, name: "Lunettes de protection" },
      { id: 4, name: "Tablier ou uniforme" },
    ],
    className: "flex justify-center items-center w-[200px] h-[150px] bg-orange-800 rounded-xl shadow-lg overflow-hidden m-2",
  },
  {
    label: "Autres essentiels",
    items: [
      { id: 1, name: "Brosses pour toilettes" },
      { id: 2, name: "Essuie-tout" },
      { id: 3, name: "Pulvérisateur d’aérosol (pour parfumer ou désinfecter l’air)" },
      { id: 4, name: "Tapis de sol (pour,eviter de salir pendant le nettoyage)" },
      { id: 5, name: "Shampouineuse pour tapis" },
      { id: 6, name: "Escabeau (pour atteindre les endroits en hauteur)" },
    ],
    className: "flex justify-center items-center w-[200px] h-[150px] bg-indigo-800 rounded-xl shadow-lg overflow-hidden m-2",
  },
];

// For Marquee ends

export {
  servicesDesc,
  generalCleaningServices,
}