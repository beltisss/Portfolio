# Portfolio de Belkiss Tiss

Un portfolio React simple et moderne construit avec Vite, destiné à présenter des compétences, des projets et un profil pour une candidature en alternance en master Génie logiciel / MIAGE.

## Installation

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Construire la version de production :

```bash
npm run build
```

## Structure du projet

- `index.html` — point d’entrée de l’application.
- `package.json` — dépendances et scripts.
- `vite.config.js` — configuration Vite.
- `src/` — code source React.
  - `App.jsx` — composant principal.
  - `main.jsx` — point d’entrée React.
  - `components/` — composants UI.
  - `data/` — données de profil et projets.
  - `index.css` — styles globaux.
- `public/` — fichiers publics accessibles directement.

## À propos

Ce dépôt contient un portfolio personnel avec une mise en page sobre et responsive. Il est conçu pour être facile à maintenir et à adapter pour une candidature professionnelle.

## Bonnes pratiques

- Ne pas versionner `node_modules/`.
- Ne pas versionner les fichiers de build (`dist/`).
- Garder le dépôt centré sur le code source, les actifs et la configuration du projet.
