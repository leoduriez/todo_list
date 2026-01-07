# Application de Gestion de Contacts

Application React avec CRUD complet pour gérer des contacts (prénom et nom).

## Fonctionnalités

- ✅ **Ajouter** un contact (prénom + nom)
- ✅ **Lister** tous les contacts
- ✅ **Supprimer** un contact
- ✅ **Modifier** un contact
- ✅ **Persistance** avec LocalStorage
- ✅ **Routage** avec react-router

## Routes

- `/` - Page d'ajout de contact (STEP PUSH)
- `/list` - Page de liste et suppression (STEP DELETE)
- `/edit/:id` - Page de modification (STEP UPDATE)

## Contraintes respectées

- ❌ Pas d'utilisation de `for`, `forEach`, `slice`
- ✅ Utilisation de `.map()`, `.filter()`, et spread operator `...`
- ✅ Patterns identiques au dossier Intro
- ✅ LocalStorage pour la persistance

## Installation

```bash
npm install
```

## Lancer l'application

```bash
npm run dev
```

## Structure du projet

```
src/
├── App.jsx                    # Composant principal avec gestion d'état
├── App.css                    # Styles globaux
├── main.jsx                   # Point d'entrée
├── index.css                  # Styles de base
└── components/
    ├── AddContact.jsx         # Composant d'ajout
    ├── ListContacts.jsx       # Composant de liste/suppression
    └── EditContact.jsx        # Composant de modification
```

## Gestion de l'état

L'état global `contacts` est géré dans `App.jsx` et passé aux composants enfants via props :
- `addContact()` - Ajoute un nouveau contact
- `deleteContact(id)` - Supprime un contact
- `updateContact(id, updatedContact)` - Modifie un contact

## LocalStorage

Les contacts sont automatiquement sauvegardés dans le LocalStorage à chaque modification et rechargés au démarrage de l'application.
