# Configuration EmailJS pour le formulaire de devis

## Variables d'environnement

Le projet utilise des variables d'environnement pour sécuriser les clés EmailJS. Ces variables sont stockées dans le fichier `.env` :

```env
VITE_APP_EMAILJS_SERVICE_ID=votre_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=votre_public_key
```

⚠️ **Important** : Le fichier `.env` contient des informations sensibles et ne doit pas être commité dans le repository Git.

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Confirmez votre email

### 2. Configurer un service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** généré

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande de devis</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8fafc;
        }
        
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .header h1 {
            color: white;
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 10px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 16px;
        }
        
        .content {
            background: white;
            padding: 40px;
        }
        
        .greeting {
            font-size: 18px;
            color: #2d3748;
            margin-bottom: 30px;
            font-weight: 500;
        }
        
        .section {
            margin-bottom: 30px;
            padding: 25px;
            background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
            border-radius: 15px;
            border-left: 5px solid #667eea;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
        }
        
        .section-title::before {
            content: "";
            width: 8px;
            height: 8px;
            background: #667eea;
            border-radius: 50%;
            margin-right: 10px;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 15px;
        }
        
        .info-item {
            background: white;
            padding: 15px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }
        
        .info-label {
            font-weight: 600;
            color: #4a5568;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        
        .info-value {
            font-size: 16px;
            color: #2d3748;
            font-weight: 500;
        }
        
        .message-section {
            background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%);
            border-left-color: #e53e3e;
        }
        
        .message-content {
            background: white;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #fed7d7;
            font-size: 16px;
            font-style: italic;
            color: #2d3748;
            line-height: 1.8;
        }
        
        .footer {
            background: #2d3748;
            color: white;
            padding: 25px;
            text-align: center;
        }
        
        .footer p {
            margin-bottom: 10px;
            opacity: 0.9;
        }
        
        .timestamp {
            font-size: 14px;
            font-style: italic;
            opacity: 0.7;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 10px;
                border-radius: 15px;
            }
            
            .info-grid {
                grid-template-columns: 1fr;
            }
            
            .header, .content, .footer {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>✨ Nouvelle Demande de Devis</h1>
            <p>Service de Nettoyage Professionnel</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                Bonjour ! 👋
            </div>
            
            <p style="margin-bottom: 30px; color: #4a5568; font-size: 16px;">
                Vous avez reçu une nouvelle demande de devis de la part de <strong>{{name}}</strong>.
            </p>
            
            <div class="section">
                <div class="section-title">👤 Informations Client</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Nom complet</div>
                        <div class="info-value">{{name}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email</div>
                        <div class="info-value">{{email}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Téléphone</div>
                        <div class="info-value">{{phone}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Adresse</div>
                        <div class="info-value">{{address}}</div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <div class="section-title">🏠 Détails du Service</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Type de service</div>
                        <div class="info-value">{{serviceType}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Fréquence</div>
                        <div class="info-value">{{frequency}}</div>
                    </div>
                    <div class="info-item" style="grid-column: 1 / -1;">
                        <div class="info-label">Nombre de pièces</div>
                        <div class="info-value">{{rooms}}</div>
                    </div>
                </div>
            </div>
            
            <div class="section message-section">
                <div class="section-title">💬 Message du Client</div>
                <div class="message-content">
                    {{message}}
                </div>
            </div>
        </div>
        
        <div class="footer">
            <p>📧 Message envoyé depuis le formulaire de devis</p>
            <p class="timestamp">Reçu le {{date}} à {{time}}</p>
        </div>
    </div>
</body>
</html>
```

**Sujet du mail :** `🏠 Nouvelle demande de devis - {{name}}`

4. Sauvegardez et notez le **Template ID**

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Configurer l'application
Dans le fichier `src/pages/QuotePage.jsx`, remplacez les valeurs suivantes :

```javascript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Remplacez par votre Service ID
  'YOUR_TEMPLATE_ID',   // Remplacez par votre Template ID
  form.current,
  'YOUR_PUBLIC_KEY'     // Remplacez par votre Public Key
);
```

### 6. Test
1. Lancez l'application avec `npm run dev`
2. Naviguez vers `/devis`
3. Remplissez et soumettez le formulaire
4. Vérifiez que l'email est bien reçu

## Variables disponibles dans le template

Les variables suivantes sont automatiquement envoyées avec le formulaire :
- `{{name}}` - Nom complet
- `{{email}}` - Adresse email
- `{{phone}}` - Numéro de téléphone
- `{{address}}` - Adresse complète
- `{{serviceType}}` - Type de service sélectionné
- `{{frequency}}` - Fréquence souhaitée
- `{{rooms}}` - Nombre de pièces
- `{{message}}` - Message ou demandes spéciales

## Limites du plan gratuit
- 200 emails par mois
- Parfait pour débuter et tester

## Support
En cas de problème, consultez la [documentation officielle EmailJS](https://www.emailjs.com/docs/)