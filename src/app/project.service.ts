import { Injectable } from '@angular/core';
import {Project, Tache} from './assets/js/projects_types';
import {PROJECTS} from './assets/js/data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    return PROJECTS;
  }

  getProjectById(id: number): Project {
    const result = PROJECTS.filter(p => p.id == id);
    return result.length === 0 ? null : result[0] as Project;
  }

  getProjectTaches(id: number): Tache[] {
    const projet = this.getProjectById(id);
    return projet.taches;
  }
}
