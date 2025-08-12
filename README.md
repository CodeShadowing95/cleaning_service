# 🧹 Service de Nettoyage Professionnel

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.14-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Une application web moderne et responsive pour une entreprise de services de nettoyage professionnel. Cette plateforme présente les services, équipements, et permet aux clients de prendre contact facilement.

## 🌟 Aperçu du Projet

Cette application web vitrine a été développée pour présenter une entreprise de nettoyage professionnel avec une interface utilisateur moderne, élégante et entièrement responsive. Elle offre une expérience utilisateur optimale sur tous les appareils.

### 🎯 Fonctionnalités Principales

- **🏠 Page d'accueil complète** avec bannière interactive
- **📋 Présentation des services** de nettoyage détaillés
- **🛠️ Catalogue d'équipements** et matériels utilisés
- **📞 Page de contact** dédiée avec formulaire
- **📱 Design responsive** adapté à tous les écrans
- **⚡ Performance optimisée** avec Vite
- **🎨 Interface moderne** avec TailwindCSS
- **🔄 Navigation fluide** avec React Router

## 🚀 Démo en Direct

[Voir la démo](https://rehobothnettoyage.com/)

## 📸 Captures d'Écran

### Page d'Accueil
![Bannière principale](./public/banner_bg.jpg)

### Services Proposés
- Nettoyage de bureaux
- Nettoyage de sols et entretien des murs
- Ménage et époussetage
- Gestion des déchets
- Nettoyage de surfaces vitrées
- Nettoyage de fin de chantier
- Fourniture de matériels sanitaires

## 🛠️ Technologies Utilisées

### Frontend
- **React 18.3.1** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite 5.4.10** - Outil de build rapide et serveur de développement
- **React Router DOM 7.0.1** - Gestion du routage côté client
- **TailwindCSS 3.4.14** - Framework CSS utilitaire
- **React Fast Marquee 1.6.5** - Composant de texte défilant

### Outils de Développement
- **ESLint** - Linter JavaScript avec configuration React
- **PostCSS** - Outil de transformation CSS
- **Autoprefixer** - Ajout automatique des préfixes CSS

## 📦 Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/cleaning_service.git
   cd cleaning_service
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 🎮 Scripts Disponibles

| Script | Description |
|--------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Construit l'application pour la production |
| `npm run preview` | Prévisualise la build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## 📁 Structure du Projet

```
cleaning_service/
├── public/                     # Assets statiques
│   ├── images/                # Images et illustrations
│   ├── services/              # Images des services
│   ├── equipments/            # Images des équipements
│   └── contact/               # Assets de contact
├── src/
│   ├── components/            # Composants React réutilisables
│   │   ├── AboutUs.jsx       # Section À propos
│   │   ├── Banner.jsx        # Bannière principale
│   │   ├── Contact.jsx       # Formulaire de contact
│   │   ├── Equipments.jsx    # Présentation équipements
│   │   ├── Footer.jsx        # Pied de page
│   │   ├── HowItWorks.jsx    # Comment ça marche
│   │   ├── Navbar.jsx        # Barre de navigation
│   │   ├── ScrollingMessage.jsx # Message défilant
│   │   ├── Services.jsx      # Services proposés
│   │   ├── WhyChooseUs.jsx   # Pourquoi nous choisir
│   │   └── sub-components/   # Sous-composants
│   ├── pages/                # Pages de l'application
│   │   ├── Home.jsx          # Page d'accueil
│   │   ├── ContactPage.jsx   # Page de contact
│   │   └── index.js          # Export des pages
│   ├── constants/            # Données et constantes
│   │   └── index.js          # Services et équipements
│   ├── App.jsx               # Composant principal
│   ├── main.jsx              # Point d'entrée
│   └── index.css             # Styles globaux
├── package.json              # Dépendances et scripts
├── vite.config.js            # Configuration Vite
├── tailwind.config.js        # Configuration TailwindCSS
├── postcss.config.js         # Configuration PostCSS
└── eslint.config.js          # Configuration ESLint
```

## 🎨 Composants Principaux

### 🏠 Banner
Bannière principale avec navigation et call-to-action animés.

### 📋 Services
Présentation détaillée des 7 services principaux :
- Nettoyage général
- Entretien spécialisé
- Gestion des déchets
- Fournitures

### 🛠️ Equipments
Catalogue complet des équipements organisé en 6 catégories :
- Outils de nettoyage général
- Produits de nettoyage
- Gestion des déchets
- Produits de désinfection
- Équipements de sécurité
- Autres essentiels

### 📞 Contact
Formulaire de contact intégré avec informations de l'entreprise.

## 🎯 Fonctionnalités Détaillées

### Navigation
- **Navbar responsive** avec menu mobile
- **Liens de navigation** vers toutes les sections
- **Logo et branding** de l'entreprise

### Animations et Interactions
- **Effets de survol** sur les boutons et cartes
- **Animations CSS** pour les éléments visuels
- **Transitions fluides** entre les sections
- **Message défilant** avec React Fast Marquee

### Responsive Design
- **Mobile First** approche
- **Breakpoints TailwindCSS** pour tous les écrans
- **Images optimisées** pour différentes résolutions
- **Navigation mobile** adaptée

## 🔧 Configuration

### TailwindCSS
Le projet utilise TailwindCSS avec une configuration personnalisée pour :
- Couleurs de marque
- Espacements spécifiques
- Animations personnalisées

### Vite
Configuration optimisée pour :
- Hot Module Replacement (HMR)
- Build de production optimisé
- Support des assets statiques

## 🚀 Déploiement

### Build de Production
```bash
npm run build
```

### Déploiement sur Netlify
1. Connecter votre repository GitHub
2. Configurer les paramètres de build :
   - Build command: `npm run build`
   - Publish directory: `dist`

### Déploiement sur Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Roadmap

- [ ] Ajout d'un système de réservation en ligne
- [ ] Intégration d'un chat en direct
- [ ] Galerie de réalisations
- [ ] Témoignages clients
- [ ] Blog/actualités
- [ ] Multilingue (FR/EN)
- [ ] Mode sombre
- [ ] PWA (Progressive Web App)

## 🐛 Signaler un Bug

Si vous trouvez un bug, veuillez [créer une issue](https://github.com/votre-username/cleaning_service/issues) avec :
- Description détaillée du problème
- Étapes pour reproduire
- Captures d'écran si applicable
- Informations sur votre environnement

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Développeur Principal** - [Votre Nom](https://github.com/votre-username)
- **Designer UI/UX** - [Nom du Designer]

## 📞 Contact

- **Email** : contact@votre-entreprise.com
- **Téléphone** : +33 X XX XX XX XX
- **Site Web** : [www.votre-site.com](https://www.votre-site.com)
- **LinkedIn** : [Votre LinkedIn](https://linkedin.com/in/votre-profil)

## 🙏 Remerciements

- [React](https://reactjs.org/) pour le framework
- [Vite](https://vitejs.dev/) pour l'outil de build
- [TailwindCSS](https://tailwindcss.com/) pour le framework CSS
- [Heroicons](https://heroicons.com/) pour les icônes
- Tous les contributeurs qui ont participé à ce projet

---

⭐ **N'hésitez pas à donner une étoile si ce projet vous a aidé !**
