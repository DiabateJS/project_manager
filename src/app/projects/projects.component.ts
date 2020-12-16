import { Component, OnInit } from '@angular/core';
import {Project} from '../assets/js/projects_types';
import {ProjectService} from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  constructor(private projetService: ProjectService) {
    this.projetService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  ngOnInit(): void {
  }

}
