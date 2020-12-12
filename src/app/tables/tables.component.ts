import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {Project} from '../assets/js/projects_types';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  project: Project;
  projects: Project[];
  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getProjects();
  }

  ngOnInit() {
  }

  showProject(id: number): void {
    this.project = this.projectService.getProjectById(id);
  }

}
