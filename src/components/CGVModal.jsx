import React from 'react';

const CGVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 border-b border-gray-200/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">
                Conditions Générales de Vente
              </h2>
              <p className="text-cyan-100 text-sm font-medium">
                Rehoboth Nettoyage
              </p>
            </div>
            <button
              onClick={onClose}
              className="group relative p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <svg className="relative w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] px-8 py-6">
          <div className="prose prose-gray max-w-none">
            {/* Préambule */}
            <div className="mb-8 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/30">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                PRÉAMBULE
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les présentes Conditions Générales de Vente (CGV) s'appliquent aux prestations de services proposées par :
              </p>
              <div className="bg-white/70 p-4 rounded-xl border border-cyan-200/50">
                <h4 className="font-bold text-gray-800 mb-2">Rehoboth Nettoyage</h4>
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

            {/* Article 1 */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ARTICLE 1 – DÉFINITIONS
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Client :</strong> Toute personne physique ou morale passant commande auprès du Prestataire.</li>
                <li><strong>Prestataire :</strong> Rehoboth Nettoyage.</li>
                <li><strong>Prestations :</strong> Services de nettoyage courant des bâtiments (bureaux, commerces, habitations, locaux divers).</li>
              </ul>
            </div>

            {/* Article 2 */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ARTICLE 2 – OBJET DES PRESTATIONS
              </h3>
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
            </div>

            {/* Article 3 */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ARTICLE 3 – COMMANDES ET ACCEPTATION
              </h3>
              <p className="text-gray-700 mb-2">
                Toute commande est précédée d'un devis détaillé.
              </p>
              <p className="text-gray-700">
                La commande est considérée comme ferme à réception du devis signé par le Client, accompagné le cas échéant d'un acompte.
              </p>
            </div>

            {/* Article 4 */}
            <div className="mb-6 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                ARTICLE 4 – PRIX ET MODALITÉS DE PAIEMENT
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">4.1 Tarifs</h4>
                  <p className="text-gray-700">Les prix des prestations sont indiqués en euros TTC sur le devis.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">4.2 Révision des prix</h4>
                  <p className="text-gray-700">Le Prestataire peut réviser ses tarifs à tout moment, sauf pour les prestations déjà commandées.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">4.3 Modalités de paiement</h4>
                  <p className="text-gray-700 mb-2">Le règlement s'effectue par virement bancaire, chèque ou autre mode accepté par le Prestataire.</p>
                  <p className="text-gray-700">Le paiement est exigible à réception de la facture, sauf mention contraire sur le devis.</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">4.4 Retard de paiement</h4>
                  <p className="text-red-700 mb-2">En cas de non-paiement dans un délai de 15 jours après relance :</p>
                  <ul className="list-disc list-inside space-y-1 text-red-700 ml-4">
                    <li>Des pénalités de retard seront appliquées, au taux légal en vigueur, majoré de 10 %.</li>
                    <li>Une indemnité forfaitaire pour frais de recouvrement de <strong>40 euros</strong> sera également exigible.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ARTICLE 5 – OBLIGATIONS DES PARTIES
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">5.1 Obligations du Prestataire</h4>
                  <p className="text-gray-700">Le Prestataire s'engage à réaliser les prestations commandées avec soin, conformément aux règles de l'art et aux délais convenus.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">5.2 Obligations du Client</h4>
                  <p className="text-gray-700 mb-2">Le Client s'engage à faciliter l'accès aux locaux et à collaborer pour permettre le bon déroulement des prestations.</p>
                  <p className="text-gray-700">Le Client s'engage également à régler les sommes dues selon les modalités prévues.</p>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="mb-6 p-6 bg-green-50 rounded-2xl border border-green-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                ARTICLE 6 – RESPONSABILITÉ ET ASSURANCE
              </h3>
              <p className="text-gray-700 mb-2">
                Le Prestataire est assuré en responsabilité civile professionnelle pour les dommages qui pourraient être causés dans le cadre de l'exécution de ses prestations.
              </p>
              <p className="text-gray-700">
                Le Prestataire ne saurait être tenu responsable des dommages indirects ou pertes de revenus subis par le Client.
              </p>
            </div>

            {/* Article 7 */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ARTICLE 7 – RÉSILIATION
              </h3>
              <p className="text-gray-700">
                En cas de manquement grave par l'une des parties à ses obligations contractuelles, le contrat pourra être résilié de plein droit après une mise en demeure restée sans effet pendant 15 jours.
              </p>
            </div>

            {/* Article 8 */}
            <div className="mb-6 p-6 bg-gray-50 rounded-2xl border border-gray-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                ARTICLE 8 – FORCE MAJEURE
              </h3>
              <p className="text-gray-700">
                Le Prestataire ne pourra être tenu responsable en cas de force majeure (grève, incendie, intempéries, pandémie, etc.) l'empêchant d'exécuter tout ou partie de ses obligations.
              </p>
            </div>

            {/* Article 9 */}
            <div className="mb-6 p-6 bg-purple-50 rounded-2xl border border-purple-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                ARTICLE 9 – RÈGLEMENT DES LITIGES
              </h3>
              <p className="text-gray-700 mb-3">
                En cas de litige, le Client adressera une réclamation écrite au Prestataire :
              </p>
              <div className="bg-white/70 p-3 rounded-lg border border-purple-200/50">
                <p className="font-semibold text-gray-800">
                  Rehoboth Nettoyage – 1 rue Albert Schweitzer, 69600 Oullins-Pierre-Bénite.
                </p>
              </div>
              <p className="text-gray-700 mt-3">
                Si aucun accord amiable n'est trouvé, le litige sera soumis aux tribunaux compétents du ressort du siège social du Prestataire.
              </p>
            </div>

            {/* Article 10 */}
            {/* <div className="mb-6 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-200/50">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                ARTICLE 10 – ACCEPTATION DES CGV
              </h3>
              <p className="text-gray-700 mb-4">
                Le Client reconnaît avoir pris connaissance des présentes Conditions Générales de Vente et les accepte sans réserve.
              </p>
              <div className="bg-white/70 p-4 rounded-xl border border-cyan-200/50">
                <p className="text-gray-700 mb-2">
                  Fait à Oullins-Pierre-Bénite, le ……………………
                </p>
                <p className="text-gray-700">
                  En deux exemplaires,
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4 mt-2">
                  <li><strong>Le Prestataire :</strong> Rehoboth Nettoyage</li>
                  <li><strong>Le Client :</strong> (Nom et signature)</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-4 border-t border-gray-200/50">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-cyan-600/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex items-center gap-2">
                <span>Fermer</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGVModal;