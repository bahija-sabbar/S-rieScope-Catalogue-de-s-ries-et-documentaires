# 📺 SérieScope — Catalogue de Séries et Documentaires

## 📋 Présentation du projet
**SérieScope** est une application web monopage (SPA) développée pour une médiathèque. Elle permet aux visiteurs de parcourir un catalogue en ligne de séries et de documentaires, d'effectuer des recherches par titre et de filtrer les œuvres par genre. L'interface intègre également un formulaire permettant à l'équipe de la médiathèque d'ajouter de nouvelles séries en temps réel.

🔗 Liens
Démo en ligne: https://bahija-sabbar.github.io/S-rieScope-Catalogue-de-s-ries-et-documentaires/

Repo GitHub:https://github.com/bahija-sabbar/S-rieScope-Catalogue-de-s-ries-et-documentaires

Jira: https://drakeyop95.atlassian.net/jira/software/projects/SER/boards/70?filter=&groupBy=none

## ✨ Fonctionnalités principales
* **Affichage du catalogue :** Chargement des 20 premières séries avec affiche, titre, langue, statut et badges de genres.
* **Recherche dynamique :** Recherche instantanée par nom (partielle et insensible à la casse).
* **Filtrage par genre :** Sélection d'un genre spécifique ou affichage de « Tous les genres », combinable avec la barre de recherche.
* **Réinitialisation :** Bouton permettant d'effacer tous les critères de recherche et de filtre en un clic.
* **Ajout de série :** Formulaire complet avec validation des champs obligatoires (Titre, Langue, Genre) et mise à jour immédiate du catalogue.
* **Interface Responsive :** Design adaptable sur ordinateur, tablette et mobile, accessible au clavier.

---

## 🛠️ Technologies utilisées
* **HTML5** (Structure sémantique)
* **Tailwind CSS / Bootstrap** *(garde uniquement celui que tu as choisi)*
* **JavaScript Vanilla (ES6+)** (`fetch`, `async/await`, manipulation du DOM)
* **Git & GitHub** (Workflow GitFlow avec branches de fonctionnalités et Pull Requests)

---

## 🌐 API utilisée
Le catalogue initial est alimenté par l'API publique **TVmaze** :
* **Endpoint :** `https://api.tvmaze.com/shows?page=0`
* **Données exploitées :** `name`, `language`, `status`, `genres`, `image.medium` (ainsi que `rating`, `schedule` et `network` pour la fiche détaillée).

---

## 🚀 Instructions de lancement
Aucune installation serveur ou base de données n'est requise.

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com
   ```
2. **Accéder au dossier du projet :**
 
3. **Lancer l'application :**
   * Ouvre directement le fichier `index.html` dans ton navigateur web.
   * *Ou* utilise l'extension **Live Server** sur VS Code pour un rechargement automatique.

---

## 📁 Structure du projet
```text
seriescope/
├──HTML
      ├── index.html          # Structure de la page (Formulaire, Filtres, Catalogue)
├── JS              # Logique JavaScript (API, DOM, Filtres, Validation)
      ├── image
               └──image.png # Image par défaut si une affiche est manquante
      ├──script.js
├──CSS
│   └──style.css
└── README.md           # Documentation du projet
```
