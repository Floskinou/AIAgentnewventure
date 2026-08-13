# Escale AI

Site vitrine statique d’**Escale AI**, une offre d’agents IA exclusivement dédiée aux agences d’acquisition.

## Positionnement

Escale AI conçoit et opère des agents spécialisés pour :

- Google Ads ;
- Meta Ads ;
- Google Tag Manager ;
- Google Analytics 4 ;
- Google Search Console ;
- le reporting multi-comptes et cross-canal.

Les agents contrôlent, analysent et préparent le travail. Les publications, modifications de budget et envois client restent soumis aux permissions et validations définies avec l’agence.

## Prévisualisation locale

```bash
python -m http.server 4173
```

Puis ouvrir `http://127.0.0.1:4173/`.

## Fichiers

- `index.html` — landing principale destinée aux agences d’acquisition ;
- `annonceurs/index.html` — landing distincte pour les annonceurs qui souhaitent internaliser Google Ads et Social Ads ;
- `styles.css` — design responsive partagé entre les deux parcours ;
- `script.js` — navigation mobile et animations accessibles ;
- `favicon.svg` / `og-image.svg` — sources vectorielles de l’identité Escale AI ;
- `og-image.png` — image sociale 1200 × 630 utilisée par les métadonnées Open Graph.

## Publication

Le dépôt est la source du site, mais aucun domaine, hébergeur de production, formulaire ou tracking n’est configuré automatiquement. Le CTA utilise le Calendly validé `https://calendly.com/escaleads/30min`.
