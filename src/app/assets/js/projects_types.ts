export class Project {
  id: number;
  libelle: string;
  description?: string;
  taches: Tache[];
  etat?: EtatEnum;
}

export class Tache {
  id: number;
  libelle: string;
  estimation?: number;
  description?: string;
  etat?: EtatEnum;
}

export enum EtatEnum {
  A_FAIRE = 'a faire',
  EN_COUR = 'en cours',
  TERMINE = 'terminé'
}
