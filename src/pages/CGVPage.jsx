import { useEffect } from 'react';
import { setPageMeta } from '../seo';
import Footer from '../components/Footer';

const CGVPage = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Conditions Générales de Vente — REHOBOTH Nettoyage',
      description: "Consultez nos Conditions Générales de Vente: prestations, prix, responsabilités et litiges.",
      canonical: 'https://rehobothnettoyage.com/cgv'
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header avec image wave et overlays */}
      <section className="relative w-full">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
          <img src="/wave.png" alt="wave background" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center px-4">
              <div className="inline-flex items-center px-3 py-1.5 mb-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2"></div>
                <span className="text-xs sm:text-sm font-semibold">Informations légales</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-sm">Conditions Générales de Vente</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu CGV */}
      <main className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="prose max-w-none">
                {/* Préambule */}
                <div className="mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/30">
                  <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    PRÉAMBULE
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Les présentes Conditions Générales de Vente (CGV) s'appliquent aux prestations de services proposées par :
                  </p>
                  <div className="bg-white/70 p-4 rounded-xl border border-cyan-200/50">
                    <h3 className="font-bold text-gray-800 mb-2">Rehoboth Nettoyage</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>SIRET :</strong> 930 844 832 00012</li>
                      <li><strong>TVA intracommunautaire :</strong> FR53930844832</li>
                      <li><strong>Code APE :</strong> 8121Z – Nettoyage courant des bâtiments</li>
                      <li><strong>Forme juridique :</strong> Entrepreneur Individuel</li>
                      <li><strong>Siège social :</strong> 1 rue Albert Schweitzer, 69600 Oullins-Pierre-Bénite, France</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Ci-après dénommé <strong>« le Prestataire »</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Les présentes CGV ont pour objet de définir les droits et obligations du Prestataire et de ses Clients dans le cadre de l'exécution des prestations de nettoyage courant des bâtiments.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-2 font-semibold">
                    Toute commande implique l'acceptation pleine et entière des présentes CGV.
                  </p>
                </div>

                {/* Articles */}
                <div className="space-y-6">
                  <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      ARTICLE 1 – DÉFINITIONS
                    </h2>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Client :</strong> Toute personne physique ou morale passant commande auprès du Prestataire.</li>
                      <li><strong>Prestataire :</strong> Rehoboth Nettoyage.</li>
                      <li><strong>Prestations :</strong> Services de nettoyage courant des bâtiments (bureaux, commerces, habitations, locaux divers).</li>
                    </ul>
                  </section>

                  <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      ARTICLE 2 – OBJET DES PRESTATIONS
                    </h2>
                    <p className="text-gray-700 mb-3">Le Prestataire propose les prestations suivantes :</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                      <li>Nettoyage courant des bâtiments</li>
                      <li>Nettoyage de bureaux et locaux professionnels</li>
                      <li>Nettoyage de logements particuliers (régulier ou ponctuel)</li>
                      <li>Nettoyage de fin de chantier</li>
                      <li>Entretien spécifique à la demande</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      Les détails des prestations sont précisés dans le devis communiqué au Client.
                    </p>
                  </section>

                  <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      ARTICLE 3 – COMMANDES ET ACCEPTATION
                    </h2>
                    <p className="text-gray-700 mb-2">Toute commande est précédée d'un devis détaillé.</p>
                    <p className="text-gray-700">La commande est considérée comme ferme à réception du devis signé par le Client, accompagné le cas échéant d'un acompte.</p>
                  </section>

                  <section className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      ARTICLE 4 – PRIX ET MODALITÉS DE PAIEMENT
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">4.1 Tarifs</h3>
                        <p className="text-gray-700">Les prix des prestations sont indiqués en euros TTC sur le devis.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">4.2 Révision des prix</h3>
                        <p className="text-gray-700">Le Prestataire peut réviser ses tarifs à tout moment, sauf pour les prestations déjà commandées.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">4.3 Modalités de paiement</h3>
                        <p className="text-gray-700 mb-2">Le règlement s'effectue par virement bancaire, chèque ou autre mode accepté par le Prestataire.</p>
                        <p className="text-gray-700">Le paiement est exigible à réception de la facture, sauf mention contraire sur le devis.</p>
                      </div>
                      <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                        <h3 className="font-semibold text-red-800 mb-2">4.4 Retard de paiement</h3>
                        <p className="text-red-700 mb-2">En cas de non-paiement dans un délai de 15 jours après relance :</p>
                        <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
                          <li>Des pénalités de retard seront appliquées, au taux légal en vigueur, majoré de 10 %.</li>
                          <li>Une indemnité forfaitaire pour frais de recouvrement de <strong>40 euros</strong> sera également exigible.</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      ARTICLE 5 – OBLIGATIONS DES PARTIES
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">5.1 Obligations du Prestataire</h3>
                        <p className="text-gray-700">Le Prestataire s'engage à réaliser les prestations commandées avec soin, conformément aux règles de l'art et aux délais convenus.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">5.2 Obligations du Client</h3>
                        <p className="text-gray-700 mb-2">Le Client s'engage à faciliter l'accès aux locaux et à collaborer pour permettre le bon déroulement des prestations.</p>
                        <p className="text-gray-700">Le Client s'engage également à régler les sommes dues selon les modalités prévues.</p>
                      </div>
                    </div>
                  </section>

                  <section className="p-6 bg-green-50 rounded-2xl border border-green-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      ARTICLE 6 – RESPONSABILITÉ ET ASSURANCE
                    </h2>
                    <p className="text-gray-700 mb-2">Le Prestataire est assuré en responsabilité civile professionnelle pour les dommages qui pourraient être causés dans le cadre de l'exécution de ses prestations.</p>
                    <p className="text-gray-700">Le Prestataire ne saurait être tenu responsable des dommages indirects ou pertes de revenus subis par le Client.</p>
                  </section>

                  <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      ARTICLE 7 – RÉSILIATION
                    </h2>
                    <p className="text-gray-700">En cas de manquement grave par l'une des parties à ses obligations contractuelles, le contrat pourra être résilié de plein droit après une mise en demeure restée sans effet pendant 15 jours.</p>
                  </section>

                  <section className="p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      ARTICLE 8 – FORCE MAJEURE
                    </h2>
                    <p className="text-gray-700">Le Prestataire ne pourra être tenu responsable en cas de force majeure (grève, incendie, intempéries, pandémie, etc.) l'empêchant d'exécuter tout ou partie de ses obligations.</p>
                  </section>

                  <section className="p-6 bg-purple-50 rounded-2xl border border-purple-200/50">
                    <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      ARTICLE 9 – RÈGLEMENT DES LITIGES
                    </h2>
                    <p className="text-gray-700 mb-3">En cas de litige, le Client adressera une réclamation écrite au Prestataire :</p>
                    <div className="bg-white/70 p-3 rounded-lg border border-purple-200/50">
                      <p className="font-semibold text-gray-800">Rehoboth Nettoyage – 1 rue Albert Schweitzer, 69600 Oullins-Pierre-Bénite.</p>
                    </div>
                    <p className="text-gray-700 mt-3">Si aucun accord amiable n'est trouvé, le litige sera soumis aux tribunaux compétents du ressort du siège social du Prestataire.</p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CGVPage;