# 🔧 Guide de Dépannage EmailJS

## 📧 Problème : L'expéditeur apparaît comme "moi" au lieu du nom du client

### 🔍 Cause du problème
Par défaut, EmailJS utilise votre propre adresse email comme expéditeur pour des raisons de sécurité et de délivrabilité. C'est **normal et recommandé**.

### ✅ Solutions

#### Solution 1 : Modifier le nom d'affichage dans le template (Recommandée)

Dans votre template EmailJS :

1. **Allez dans EmailJS** → Email Templates
2. **Éditez votre template**
3. **Dans les paramètres du template**, modifiez le champ "From Name" :
   ```
   Demande de devis - {{name}}
   ```
   ou
   ```
   {{name}} via Service de Nettoyage
   ```

#### Solution 2 : Utiliser Reply-To

Configurez le champ "Reply-To" pour que les réponses aillent au client :

1. **Dans les paramètres du template EmailJS**
2. **Ajoutez dans "Reply-To"** : `{{email}}`
3. Permet de répondre directement au client

#### Solution 3 : Personnaliser le sujet

Modifiez le sujet pour inclure le nom du client :
```
🏠 Nouvelle demande de devis de {{name}}
```

### 🎯 Configuration recommandée

- **From Name :** `Demande de devis - {{name}}`
- **From Email :** Votre email (automatique)
- **Reply-To :** `{{email}}`
- **Subject :** `🏠 Nouvelle demande de devis de {{name}}`

### ⚠️ Pourquoi cette limitation ?

1. **Sécurité** : Empêche l'usurpation d'identité
2. **Délivrabilité** : Évite que les emails soient marqués comme spam
3. **Authentification** : Respecte les protocoles SPF/DKIM

### 📝 Note importante

Il n'est **pas possible** (et pas recommandé) de faire apparaître l'email du client comme expéditeur réel. Cette limitation est imposée par tous les services d'email pour des raisons de sécurité.

La solution avec "From Name" personnalisé est la **meilleure pratique** utilisée par la plupart des sites web professionnels.

---

## 🚨 Erreur Yahoo 412

## 🚨 Problème Actuel
```
EmailJSResponseStatus {
  status: 412, 
  text: 'Yahoo: Invalid login: 535 5.7.0 (#AUTH005) Too many bad auth attempts.'
}
```

## 📋 Solutions par Ordre de Priorité

### 1. **SOLUTION IMMÉDIATE : Attendre**
- ⏰ **Attendez 15-30 minutes** avant de réessayer
- Yahoo bloque temporairement après plusieurs échecs
- Le blocage se lève automatiquement

### 2. **SOLUTION RAPIDE : Mot de Passe d'Application Yahoo**

#### Étapes pour Yahoo :
1. **Connexion Yahoo** : https://login.yahoo.com
2. **Paramètres du compte** → **Sécurité du compte**
3. **Générer un mot de passe d'application** :
   - Cliquez sur "Générer un mot de passe d'application"
   - Sélectionnez "Autre application personnalisée"
   - Nommez : "EmailJS Service Nettoyage"
   - **COPIEZ le mot de passe généré** (16 caractères)

4. **Dans EmailJS** :
   - Allez sur https://dashboard.emailjs.com
   - Services → Votre service Yahoo
   - Remplacez le mot de passe par celui généré
   - **Testez la connexion**

### 3. **SOLUTION RECOMMANDÉE : Migration vers Gmail**

#### Pourquoi Gmail ?
- ✅ Plus fiable avec EmailJS
- ✅ Meilleure délivrabilité
- ✅ Configuration plus simple
- ✅ Moins de blocages

#### Configuration Gmail :
1. **Créer un compte Gmail dédié** :
   - Ex: `nettoyage.rbn.contact@gmail.com`

2. **Activer l'authentification 2FA** :
   - Paramètres Google → Sécurité → Validation en 2 étapes

3. **Générer un mot de passe d'application** :
   - Paramètres Google → Sécurité → Mots de passe des applications
   - Sélectionner "Autre" → "EmailJS"
   - Copier le mot de passe généré

4. **Configurer dans EmailJS** :
   - Créer un nouveau service Gmail
   - Utiliser le mot de passe d'application

## 🔄 Migration Complète vers Gmail

### Étape 1 : Nouveau Service EmailJS
```javascript
// Nouvelles variables d'environnement
VITE_APP_EMAILJS_SERVICE_ID=service_gmail_xxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxx
VITE_APP_EMAILJS_PUBLIC_KEY=votre_nouvelle_cle
```

### Étape 2 : Mise à jour du fichier .env
```bash
# Remplacer dans .env
VITE_APP_EMAILJS_SERVICE_ID=nouveau_service_gmail
VITE_APP_EMAILJS_TEMPLATE_ID=nouveau_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=nouvelle_cle_publique
```

### Étape 3 : Test de Configuration
Utilisez le fichier `test-emailjs.html` pour vérifier.

## 🛠️ Configuration du Template EmailJS

### Variables Requises dans le Template :
```html
<!-- Dans votre template EmailJS -->
De: {{user_name}} <{{user_email}}>
Téléphone: {{user_phone}}
Message: {{message}}
```

### Template HTML Recommandé :
```html
<h2>Nouveau message de contact</h2>
<p><strong>Nom:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Téléphone:</strong> {{user_phone}}</p>
<p><strong>Message:</strong></p>
<div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
  {{message}}
</div>
```

## 🔍 Diagnostic des Erreurs

### Codes d'Erreur Courants :
- **412** : Authentification échouée (trop de tentatives)
- **400** : Paramètres invalides
- **401** : Clé publique incorrecte
- **404** : Service/Template non trouvé
- **500** : Erreur serveur EmailJS

### Tests de Diagnostic :
1. **Test de connectivité** : `test-emailjs.html`
2. **Vérification console** : F12 → Console
3. **Test EmailJS direct** : Dashboard EmailJS → Test

## 📞 Support et Ressources

### Documentation Officielle :
- [EmailJS Docs](https://www.emailjs.com/docs/)
- [Yahoo App Passwords](https://help.yahoo.com/kb/generate-third-party-passwords-sln15241.html)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)

### Communauté :
- [EmailJS GitHub Issues](https://github.com/emailjs/emailjs-sdk/issues)
- [Stack Overflow - EmailJS](https://stackoverflow.com/questions/tagged/emailjs)

## ✅ Checklist de Résolution

- [ ] Attendre 15-30 minutes après l'erreur 412
- [ ] Générer un mot de passe d'application Yahoo/Gmail
- [ ] Mettre à jour la configuration EmailJS
- [ ] Tester avec `test-emailjs.html`
- [ ] Vérifier les variables d'environnement
- [ ] Confirmer que le template existe
- [ ] Tester l'envoi depuis le site web

## 🚀 Actions Recommandées

### Immédiat (Aujourd'hui) :
1. Attendre 30 minutes
2. Générer un mot de passe d'application Yahoo
3. Tester avec le nouveau mot de passe

### Court terme (Cette semaine) :
1. Créer un compte Gmail dédié
2. Configurer EmailJS avec Gmail
3. Migrer vers la nouvelle configuration

### Long terme :
1. Surveiller la délivrabilité des emails
2. Configurer des sauvegardes (service secondaire)
3. Implémenter des logs d'erreur

---

**💡 Conseil :** Gmail est généralement plus fiable que Yahoo pour les services automatisés comme EmailJS. La migration est fortement recommandée pour éviter les futurs problèmes d'authentification.