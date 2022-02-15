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
    Here the data is fetched from the projectManagementService. 
  */
  ngOnInit(): void {
    this.currentProjects = this.projectManagementService.currentProjects();
  }

}
