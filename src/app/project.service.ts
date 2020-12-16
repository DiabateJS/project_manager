import { Injectable } from '@angular/core';
import {Project, Tache} from './assets/js/projects_types';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {environment} from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    const url = `${environment.urlBack}projet_manager_war/projects`;
    return this.http.get<Project[]>(url);
  }

  getProjectById(id: number): Project {
    let result: Project[];
    result = [];
    this.getProjects().subscribe(data => {
      result = data.filter(p => p.id == id);
    });
    return result.length === 0 ? null : result[0] as Project;
  }

  getProjectTaches(id: number): Tache[] {
    const projet = this.getProjectById(id);
    return projet.tasks;
  }

  getNextProjectId(): number {
    let nextId: number;
    nextId = 0;
    this.getProjects().subscribe(data => {
       data.forEach(project => {
         nextId = project.id > nextId ? project.id : nextId;
       })
      });
      return nextId + 1;
  }

  getNextProjectTaskId(idProject: number): number {
    let nextId: number;
    nextId = 0;
    const project: Project = this.getProjectById(idProject);
    const tasks: Tache[] = project.tasks;
    tasks.forEach(task => {
      if (task.id > nextId) {
        nextId = task.id;
      }
    })
    return nextId + 1;
  }
}
