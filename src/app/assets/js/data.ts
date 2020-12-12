import {EtatEnum} from './projects_types';

export const PROJECTS = [
  {
    id: 1,
    etat: EtatEnum.EN_COUR,
    libelle: 'Gestion de Projets',
    description: 'Application dont le but est de faciliter le gestion de projet. Prend en compte les aspects : cout, qualite et delais.',
    taches: [
      {
        id: 1,
        libelle: 'Mise en place squelette du projet Front',
        estimation: 1,
        description: 'Creation du depot et ajout des fichiers du template',
        etat: EtatEnum.TERMINE
      },
      {
        id: 2,
        libelle: 'Mise en place structure de donnees provisoire',
        estimation: 1,
        description: 'Creation fichier json contenant les donnees de projets et les taches associees.',
        etat: EtatEnum.TERMINE
      },
      {
        id: 3,
        libelle: 'Pages de gestion des projets',
        estimation: 3,
        description: 'Creation d un nouveau projet. Modification des données d un projet existant. Suppression d un projet',
        etat: EtatEnum.EN_COUR
      },
      {
        id: 4,
        libelle: 'Creation de la base de données',
        estimation: 2,
        description: 'Creation de la base de données. Creation des premieres tables',
        etat: EtatEnum.A_FAIRE
      },
      {
        id: 5,
        libelle: 'Creation du projet de persistance des donnees',
        estimation: 5,
        description: 'Api de traitement des donnees d un projet : Creation d un projet , Recuperation des informations d un projet,'
          + 'Modification des informations d un projet, Suppression des informations d un projet, Creation d une tache dans un projet'
          + 'Modification des informations d une tache, Recuperation de la liste des taches d un projet, Suppression d une tache de projet',
        etat: EtatEnum.A_FAIRE
      }
    ]
  },
  {
    id: 2,
    etat: EtatEnum.A_FAIRE,
    libelle: 'Plateforme de gestion des transactions',
    description: 'Application qui permet d envoyer de l argent via divers moyens : mobile money, compte bancaire, cryptomonais',
    taches: []
  },
  {
    id: 3,
    etat: EtatEnum.A_FAIRE,
    libelle: 'Application GED pour archiviste',
    description: 'Application GED qui prend en compte les activités de base du travail de l archiviste.',
    taches: []
  }
];
