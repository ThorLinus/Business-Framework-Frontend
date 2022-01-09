import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BusinessPartnerService } from '../data/business-partner.service';

@Component({
  selector: 'app-business-partner',
  templateUrl: './business-partner.component.html',
  styleUrls: ['./business-partner.component.scss']
})
export class BusinessPartnerComponent implements OnInit {

  tableDataBP: any = [];
  areaDataBP: any = [];
  totalBPeachYear: any = [];

  displayedColumns: string[] = ['companyName', 'industry', 'goods', 'dateStart', 'dateEnd'];

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.tableDataBP.paginator = this.paginator;
  }  

  constructor(private businessPartnerService : BusinessPartnerService) { }

  ngOnInit(): void {
    this.tableDataBP = this.businessPartnerService.tableDataBP();
    this.areaDataBP = this.businessPartnerService.areaDataBP();
    this.totalBPeachYear = this.businessPartnerService.totalBPeachYear();
  }
}




