import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../project.service';
import {EtatEnum} from '../assets/js/projects_types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nbProjects: number;
  nbProjectsTermine: number;
  nbProjectsNonTermine: number;
  nbTaches: number;
  nbTachesTermines: number;
  nbTachesNonTermines: number;

  constructor(private projectService: ProjectService) {
    this.nbTaches = 0;
    this.nbProjectsTermine = 0;
    this.nbProjectsNonTermine = 0;
    this.projectService.getProjects().subscribe(data => {
        this.nbProjects = data.length;
        data.forEach(project => {
            this.nbTaches += project.tasks.length;
            if (project.etat === EtatEnum.TERMINE) {
              this.nbProjectsTermine += 1;
            } else {
              this.nbProjectsNonTermine += 1;
            }
            this.nbTachesTermines += project.tasks.filter(tache => tache.etat === EtatEnum.TERMINE).length;
        });
    });
    this.nbTachesTermines = 0;
    this.nbTachesNonTermines = this.nbTaches - this.nbTachesTermines;
  }

  ngOnInit() {
  }

}
