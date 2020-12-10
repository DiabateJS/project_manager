export class Project {
  id: number;
  libelle: string;
  description?: string;
  taches: Tache[];
}

export class Tache {
  id: number;
  libelle: string;
  estimation?: number;
  description?: string;
}
