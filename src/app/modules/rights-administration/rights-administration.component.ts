import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RightsAdministration } from '../data/interface/rights-administration';
import { RightAdministrationService } from '../data/right-administration.service';

@Component({
  selector: 'app-rights-administration',
  templateUrl: './rights-administration.component.html',
  styleUrls: ['./rights-administration.component.scss']
})

export class RightsAdministrationComponent implements OnInit {

  constructor(private rightsAdministration : RightAdministrationService) { }

  displayedColumns: string[] = ['position', 'name', 'surname', 'department', 'email', 'role'];
  dataSourceRightsAdmin = new MatTableDataSource<RightsAdministration>(BP_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSourceRightsAdmin.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.dataSourceRightsAdmin.paginator = this.paginator
  }

}

const BP_DATA: RightsAdministration[] = [
  {position: 1  ,name: 'Mustermann', surname: 'Max', department: 'IT-C1', email: 'max.mustermann@tigris.com', role: 'IT-Admin'},
  {position: 2  ,name: 'Mueller', surname: 'Jörg', department: 'IT-C1', email: 'joerg.mueller@tigris.com', role: 'IT-Support'},
  {position: 3  ,name: 'Schulze', surname: 'Louisa', department: 'IT-C1', email: 'louisa.schulze@tigris.com', role: 'IT-Support'},
  {position: 4  ,name: 'Wintermaier', surname: 'Anna', department: 'IT-C1', email: 'anna.wintermaier@tigris.com', role: 'IT-Systemadministrator'}
];