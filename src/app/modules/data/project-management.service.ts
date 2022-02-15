import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor() { }

  /*
    Hier werden die Daten für das Balkendiagramm erstellt
    Bei Fertigstellung sollen hier die Daten aus dem Backend abgerufen werden.
  */
  currentProjects(){
    return[
    {
      name:'open',
      data:[6,1,2,5]      
    },
    {
      name:'runs',
      data:[44, 30, 17, 10]
    },
    {
      name:'done',
      data:[20, 32,10,15]  
    }

  ]
  }
}
