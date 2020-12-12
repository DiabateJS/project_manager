import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Project, Tache} from '../assets/js/projects_types';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  project: Project;
  newProject: Project;
  projects: Project[];
  isNewProjectSelected: boolean;
  isModifyProjectSelected: boolean;
  isNewTaskSelected: boolean;

  task: Tache;
  projectTasks: Tache[];
  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
    this.newProject = new Project();
    this.task = new Tache();
    this.isNewProjectSelected = false;
    this.isNewTaskSelected = false;
    this.isModifyProjectSelected = false;
  }

  ngOnInit() {
  }

  showProject(id: number): void {
    this.project = this.projectService.getProjectById(id);
  }

  loadCreateProjectForm(): void {
    this.isNewProjectSelected = true;
    this.isNewTaskSelected = false;
    this.newProject = new Project();
    this.newProject.id = this.projectService.getNextProjectId();
  }

  createProject(): void {
    this.projects.push(this.newProject);
    console.log(this.newProject);
    this.isNewProjectSelected = false;
  }

  showModifyProject(id: number): void {
    this.isModifyProjectSelected = true;
    this.isNewProjectSelected = false;
    this.isNewTaskSelected = false;
    this.project = this.projects.filter(p => p.id == id)[0];
  }

  modifyProject(idProject: number){
    let projectIndex = -1;
    this.projects.forEach((project, index) => {
      if (project.id == idProject) {
        projectIndex = index;
      }
    });
    if (projectIndex !== -1){
      this.projects[projectIndex] = this.project;
    }
    this.isModifyProjectSelected = false;
    this.isNewTaskSelected = false;
    this.isNewProjectSelected = false;
  }

  deleteProject(id: number): void {
    let projectIndex = -1;
    this.projects.forEach((project, index) => {
      if (project.id == id) {
        projectIndex = index;
      }
    });
    if (projectIndex !== -1) {
      this.projects.splice(projectIndex, 1);
    }
  }

  infosTache(id: number): void {

  }

  showAddProjectTaskForm(idProject: number): void {
    this.isNewProjectSelected = false;
    this.isNewTaskSelected = true;
    this.task = new Tache();
    this.task.id = this.projectService.getNextProjectTaskId(idProject);
  }

  createTask(): void {
    this.project.taches.push(this.task);
    this.isNewTaskSelected = false;
    this.isNewProjectSelected = false;
  }

}
