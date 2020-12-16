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
  isModifyTaskSelected: boolean;
  private _projects: Project[];

  task: Tache;
  constructor(private projectService: ProjectService) {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    })
    this.newProject = new Project();
    this.task = new Tache();
    this.isNewProjectSelected = false;
    this.isNewTaskSelected = false;
    this.isModifyProjectSelected = false;
    this.isModifyTaskSelected = false;
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

  private getProjectIndex(idProject: number): number {
    let projectIndex: number;
    projectIndex = -1;
    this.projects.forEach((project, index) => {
      if (project.id == idProject) {
        projectIndex = index;
      }
    });
    return projectIndex;
  }

  modifyProject(idProject: number){
    let projectIndex: number;
    projectIndex = this.getProjectIndex(idProject);
    if (projectIndex !== -1){
      this.projects[projectIndex] = this.project;
    }
    this.isModifyProjectSelected = false;
    this.isNewTaskSelected = false;
    this.isNewProjectSelected = false;
  }

  deleteProject(id: number): void {
    let projectIndex: number;
    projectIndex = this.getProjectIndex(id);
    if (projectIndex !== -1) {
      this.projects.splice(projectIndex, 1);
    }
  }

  showModifyTask(idTask: number): void {
    this.isNewTaskSelected = false;
    this.isNewProjectSelected = false;
    this.isModifyTaskSelected = false;
    this.isModifyTaskSelected = true;
    let indexTask: number;
    indexTask = this.getProjectTaskIndex(idTask);
    if (indexTask !== -1) {
      this.task = this.project.tasks[indexTask];
    }
  }

  private getProjectTaskIndex(idTask: number): number {
    let taskIndex: number;
    taskIndex = -1;
    this.project.tasks.forEach((t, index) => {
      if (t.id == idTask) {
        taskIndex = index;
      }
    })
    return taskIndex;
  }

  modifyTask(idTask: number): void {
    let indexTask: number;
    indexTask = this.getProjectTaskIndex(idTask);
    if (indexTask !== -1) {
        this.project.tasks[indexTask] = this.task;
    }
    this.isNewTaskSelected = false;
    this.isNewProjectSelected = false;
    this.isModifyTaskSelected = false;
    this.isModifyTaskSelected = false;
  }

  deleteTask(idTask: number): void {
    let indexTask: number;
    indexTask = this.getProjectTaskIndex(idTask);
    if (indexTask !== -1) {
      this.project.tasks.splice(indexTask, 1);
    }
  }

  showAddProjectTaskForm(idProject: number): void {
    this.isNewProjectSelected = false;
    this.isNewTaskSelected = true;
    this.task = new Tache();
    this.task.id = this.projectService.getNextProjectTaskId(idProject);
  }

  createTask(): void {
    this.project.tasks.push(this.task);
    this.isNewTaskSelected = false;
    this.isNewProjectSelected = false;
  }

}
