import { useEffect } from 'react';
import { setPageMeta } from '../seo';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Star, Clock, Shield, Users, Sparkles, Home, Building, Car, Sofa, Monitor, MessageSquareHeart } from 'lucide-react';
import Footer from '../components/Footer';

const ServicesPage = () => {
  // Scroll vers le haut au chargement de la page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPageMeta({
      title: 'Nos services — REHOBOTH Nettoyage',
      description: "Découvrez nos services de nettoyage: résidentiel, commercial, vitres, après travaux. Qualité garantie.",
      canonical: 'https://rehobothnettoyage.com/services-details'
    })
  }, [])

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Quels types de services de nettoyage proposez-vous ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Nous proposons du nettoyage résidentiel et commercial, nettoyage de vitres, après travaux, entretien régulier et nettoyage en profondeur.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Comment obtenir un devis ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Vous pouvez demander un devis gratuit via notre page Devis. Nous vous répondons rapidement avec une estimation personnalisée.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Intervenez-vous rapidement ?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Oui, nous proposons des interventions rapides selon vos disponibilités, avec une qualité garantie.'
        }
      }
    ]
  };

  const services = [
    {
      id: 1,
      icon: Home,
      title: "Nettoyage Résidentiel",
      description: "Service complet de nettoyage pour votre domicile",
      features: [
        "Nettoyage de toutes les pièces",
        "Désinfection des surfaces",
        "Aspiration et lavage des sols",
        "Nettoyage des sanitaires",
        "Dépoussiérage complet"
      ],
      price: "À partir de 25€/h",
      duration: "2-4 heures",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      icon: Building,
      title: "Nettoyage Commercial",
      description: "Solutions professionnelles pour entreprises",
      features: [
        "Bureaux et espaces de travail",
        "Zones d'accueil et salles de réunion",
        "Sanitaires et cuisines d'entreprise",
        "Nettoyage des vitres",
        "Maintenance régulière"
      ],
      price: "Devis personnalisé",
      duration: "Selon superficie",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      icon: Sparkles,
      title: "Nettoyage Après Travaux",
      description: "Remise en état après rénovations",
      features: [
        "Élimination des poussières de chantier",
        "Nettoyage des résidus de peinture",
        "Dégraissage des surfaces",
        "Nettoyage des vitres et miroirs",
        "Aspiration approfondie"
      ],
      price: "À partir de 35€/h",
      duration: "4-8 heures",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      icon: Car,
      title: "Nettoyage Automobile",
      description: "Entretien complet de votre véhicule",
      features: [
        "Lavage extérieur et intérieur",
        "Aspiration des sièges et tapis",
        "Nettoyage du tableau de bord",
        "Lustrage et protection",
        "Désodorisation"
      ],
      price: "À partir de 30€",
      duration: "1-2 heures",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      icon: Sofa,
      title: "Nettoyage de Meubles",
      description: "Entretien spécialisé de vos meubles",
      features: [
        "Canapés et fauteuils",
        "Matelas et sommiers",
        "Tapis et moquettes",
        "Rideaux et tentures",
        "Traitement anti-acariens"
      ],
      price: "À partir de 40€",
      duration: "2-3 heures",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: 6,
      icon: Monitor,
      title: "Nettoyage de Vitres",
      description: "Vitres impeccables pour plus de luminosité",
      features: [
        "Vitres intérieures et extérieures",
        "Baies vitrées et vérandas",
        "Miroirs et surfaces vitrées",
        "Nettoyage des cadres",
        "Produits sans traces"
      ],
      price: "À partir de 3€/m²",
      duration: "1-3 heures",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];



  const advantages = [
    {
      icon: Shield,
      title: "Assurance Qualité",
      description: "Garantie satisfaction ou remboursement"
    },
    {
      icon: Users,
      title: "Équipe Professionnelle",
      description: "Personnel formé et expérimenté"
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respect des horaires convenus"
    },
    {
      icon: Sparkles,
      title: "Produits Écologiques",
      description: "Respect de l'environnement"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">      
      {/* Hero Section avec wave.png */}
      <section 
        className="relative text-white py-20 md:py-24 overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: "url('/wave.png')" }}
      >
        {/* Overlay dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-blue-900/80"></div>
        {/* Accents lumineux discrets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300 mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour à l&apos;accueil
            </Link>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-md">
              Nos Services de Nettoyage
            </h1>
            <p className="text-lg md:text-xl text-blue-100/90 mb-6 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de services professionnels adaptés à tous vos besoins
            </p>

            {/* Badges d’attributs */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Service 7j/7</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Devis gratuit</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span>Satisfaction garantie</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Services Détaillés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chaque service est conçu pour répondre à vos besoins spécifiques avec le plus haut niveau de qualité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="border-t pt-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Tarif</p>
                          <p className="font-bold text-lg text-gray-900">{service.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Durée</p>
                          <p className="font-bold text-lg text-gray-900">{service.duration}</p>
                        </div>
                      </div>
                      
                      <Link 
                        to="/devis" 
                        className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                      >
                        Demander un devis
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Notre engagement envers l&apos;excellence nous distingue de la concurrence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-8">
                <MessageSquareHeart className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Votre Avis Nous Intéresse !
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nous sommes une entreprise en pleine croissance, passionnée par l&apos;excellence du service. 
                Vos futurs témoignages seront notre plus belle récompense et guideront notre amélioration continue.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Qualité Garantie</h3>
                  <p className="text-sm text-gray-600 text-center">Service professionnel et minutieux</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Équipe Dédiée</h3>
                  <p className="text-sm text-gray-600 text-center">Personnel formé et expérimenté</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                    <Star className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Satisfaction Client</h3>
                  <p className="text-sm text-gray-600 text-center">Votre bonheur, notre priorité</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
                <p className="text-lg font-medium text-gray-800 mb-2">
                  &ldquo;Soyez parmi nos premiers clients satisfaits !&rdquo;
                </p>
                <p className="text-gray-600">
                  Chaque nouveau client est une opportunité pour nous de prouver notre engagement envers l&apos;excellence.
                </p>
              </div>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Contactez-nous dès maintenant
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à Transformer Votre Espace ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous dès aujourd&apos;hui pour un devis gratuit et personnalisé
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/devis" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Demander un Devis
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      {/* FAQ Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
};

export default ServicesPage;