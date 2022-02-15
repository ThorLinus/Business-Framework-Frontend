import { Component, OnInit } from '@angular/core';
import { ProjectManagementService } from '../data/project-management.service';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})
export class ProjectManagementComponent implements OnInit {

  currentProjects: any = [];

  constructor(private projectManagementService : ProjectManagementService) { }

  /*
    Hier werden die Daten aus dem procejtManagementService geholt. 
  */
  ngOnInit(): void {
    this.currentProjects = this.projectManagementService.currentProjects();
  }

}
