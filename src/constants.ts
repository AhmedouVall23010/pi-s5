export interface Slide {
  title: string;
  subtitle?: string;
  bullets?: string[];
}

export const SLIDES: Slide[] = [
  {
    title: "Projet Intégrateur S5",
    subtitle: "Système de gestion des appareils mobiles\nAhmedou Vall Ahmed Khteira (23010)\nMohamed Val Taleb Amar (23051)",
  },
  {
    title: "Introduction",
    bullets: [
      "Utilisation croissante des appareils Android",
      "Difficulté de gestion sans contrôle centralisé",
      "Enjeux de sécurité et d’organisation",
    ],
  },
  {
    title: "Problématique",
    bullets: [
      "Absence d’un contrôle centralisé efficace",
      "Limites des solutions existantes",
      "Besoin d’adaptation et de personnalisation",
      "Comment adapter une solution open source aux besoins réels ?",
    ],
  },
  {
    title: "Solution Adoptée",
    bullets: [
      "Adoption de Headwind MDM",
      "Solution open source",
      "Déploiement en mode on-premise",
      "Base technique nécessitant adaptation",
    ],
  },
  {
    title: "Analyse des Écarts",
    bullets: [
      "Comparaison besoins vs système initial",
      "Fonctionnalités instables ou incomplètes",
      "Fonctions absentes (Kiosk, GPS, WiFi)",
      "Phase de personnalisation nécessaire",
    ],
  },
  {
    title: "Architecture Globale",
    bullets: [
      "Architecture client–serveur",
      "Backend central",
      "Base de données",
      "Interface Web d’administration",
      "Agent Android",
      "Communication sécurisée",
      "Supervision en temps réel",
    ],
  },
  {
    title: "Fonctionnalités Implémentées",
    bullets: [
      "Enrôlement via QR Code",
      "Mode Device Owner",
      "Supervision en temps réel",
      "Suivi GPS",
      "Mode Kiosque",
      "Restriction WiFi / Bluetooth",
    ],
  },
  {
    title: "Valeur Ajoutée & Compétences",
    bullets: [
      "Transformation d’un système générique",
      "Personnalisation adaptée au contexte réel",
      "Renforcement du contrôle et de la sécurité",
      "Analyse d’un code existant",
      "Travail en équipe",
      "Gestion de version (Git)",
    ],
  },
  {
    title: "Conclusion & Perspectives",
    bullets: [
      "Système personnalisé opérationnel",
      "Adaptation réussie d’une solution open source",
      "Base solide pour le PFE",
      "Développement en cours",
    ],
  },
];
