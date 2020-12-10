import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../project.service';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../assets/js/projects_types';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  idProject: number;
  project: Project;

  constructor(private projetService: ProjectService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.idProject = params['id'];
      console.log(`idProject -> ${this.idProject}`);
      this.project = this.projetService.getProjectById(this.idProject);
      console.log(this.project);
    });
  }

  ngOnInit(): void {
  }

}
