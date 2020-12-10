import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import {Project, Tache} from './assets/js/projects_types';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should project with id 0 not available', () => {
    expect(service.getProjectById(0)).toBeNull();
  });

  it('should project with id 1 return correct value', () => {
    const result: Project = service.getProjectById(1);
    expect(result && result.id === 1).toBeTruthy();
    expect(result.taches && result.taches.length > 0).toBeTruthy();
  });

  it('should project taches return values', () => {
    const result: Project = service.getProjectById(1);
    const taches: Tache[] = result ? result.taches : [];
    expect(taches && taches.length >= 0).toBeTruthy();
  });

  it('should getProjects return values', () => {
    expect(service.getProjects().length > 0).toBeTruthy();
  });

});
