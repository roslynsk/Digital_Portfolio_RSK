# Formulaire de contact — Marche à suivre

Le formulaire de contact (page d'accueil + page `/contact`) envoie désormais les
messages par email via **Web3Forms**, un service gratuit qui fonctionne sur un
site statique comme GitHub Pages (aucun backend nécessaire).

Le code est déjà en place dans `src/pages/Contact.tsx`. Il ne reste **qu'une seule
chose à faire** : générer une clé d'accès et la coller dans le code.

---

## Étape 1 — Générer la clé d'accès (Access Key)

1. Aller sur **https://web3forms.com**.
2. Cliquer sur **"Create your Access Key"**.
3. Saisir l'adresse email qui doit **recevoir** les messages :
   **`rmshawkelly@gmail.com`**
   > ⚠️ Important : c'est ici, et non dans le code, que l'on choisit la boîte
   > de réception. La clé est liée à cet email.
4. Confirmer l'email (Web3Forms envoie un mail de vérification avec la clé).
5. Copier la clé reçue. Elle ressemble à :
   `a1b2c3d4-5678-90ab-cdef-1234567890ab`

## Étape 2 — Coller la clé dans le code

Ouvrir `src/pages/Contact.tsx` et remplacer la valeur de la constante en haut du
fichier :

```ts
// AVANT
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

// APRÈS (exemple)
const WEB3FORMS_ACCESS_KEY = "a1b2c3d4-5678-90ab-cdef-1234567890ab";
```

> La clé Web3Forms est **publique par nature** (elle part depuis le navigateur du
> visiteur), il n'y a donc aucun problème à la mettre directement dans le code.

## Étape 3 — Tester en local

```bash
npm run dev
```

Ouvrir le site, aller sur la page Contact (ou en bas de l'accueil), remplir le
formulaire et cliquer sur **Submit**. Un message vert de confirmation doit
apparaître, et un email doit arriver dans la boîte `rmshawkelly@gmail.com`.

## Étape 4 — Publier en ligne

```bash
npm run deploy
```

Cette commande recompile le site et le pousse sur GitHub Pages.

---

## Comportement du formulaire

- **Champs envoyés** : Nom, Email, Message.
- **Pendant l'envoi** : le bouton affiche « Sending… » et est désactivé.
- **Succès** : le formulaire est remplacé par un message de confirmation.
- **Erreur** : un message d'erreur rouge s'affiche sous le bouton.
- **Anti-spam** : un champ « honeypot » invisible (`botcheck`) filtre les bots.

## Notes

- Le composant `Contact.tsx` est **partagé** entre la page d'accueil et la page
  `/contact` : la configuration ne se fait donc qu'une seule fois.
- Offre gratuite Web3Forms : **250 soumissions / mois**, largement suffisant pour
  un portfolio.
- Pour changer l'adresse de réception plus tard : il faut générer une **nouvelle
  clé** avec le nouvel email (ou modifier l'email dans le tableau de bord
  Web3Forms), puis mettre à jour la constante dans `Contact.tsx`.
- Options avancées (redirection après envoi, réponse automatique au visiteur,
  intégration reCAPTCHA) : voir la doc **https://docs.web3forms.com**.
