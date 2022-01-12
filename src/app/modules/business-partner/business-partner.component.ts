import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BusinessPartnerService } from '../data/business-partner.service';
import { BusinessPartner } from '../data/interface/business-partner';

@Component({
  selector: 'app-business-partner',
  templateUrl: './business-partner.component.html',
  styleUrls: ['./business-partner.component.scss']
})
export class BusinessPartnerComponent implements OnInit {

  // tableDataBP: any = [];
  areaDataBP: any = [];
  totalBPeachYear: any = [];
  totalCustomerYear: any = [];

  displayedColumns: string[] = ['companyName', 'industry', 'goods', 'dateStart', 'dateEnd'];
  dataSourceBP = new MatTableDataSource<BusinessPartner>(BP_DATA);

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSourceBP.paginator = this.paginator;
  }  

  constructor(private businessPartnerService : BusinessPartnerService) { }

  ngOnInit(): void {
    // this.tableDataBP=this.businessPartnerService.tableDataBP();
    this.areaDataBP = this.businessPartnerService.areaDataBP();
    this.totalBPeachYear = this.businessPartnerService.totalBPeachYear();
    this.totalCustomerYear = this.businessPartnerService.totalCustomerYear();
    this.dataSourceBP.paginator = this.paginator;
  }
}

const BP_DATA: BusinessPartner[] = [
  {position: 1  ,companyName: 'Apple'                 ,industry: 'Technologie'    ,goods: 'H'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 2  ,companyName: 'Saudi Aramco'          ,industry: 'Öl und Gas'     ,goods: 'He'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 3  ,companyName: 'Microsoft'             ,industry: 'Technologie'    ,goods: 'Li'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 4  ,companyName: 'Amazon.com'            ,industry: 'Internethandel' ,goods: 'Be'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 5  ,companyName: 'Alphabet'              ,industry: 'Technologie'    ,goods: 'B'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 6  ,companyName: 'Meta Platforms'        ,industry: 'Technologie'    ,goods: 'C'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 7  ,companyName: 'Tencent'               ,industry: 'Technologie'    ,goods: 'N'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 8  ,companyName: 'Tesla'                 ,industry: 'Automobile'     ,goods: 'O'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 9  ,companyName: 'Alibaba.com'           ,industry: 'Internethandel' ,goods: 'F'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 10 ,companyName: 'Berkshire Hathaway'    ,industry: 'Mischkonzern'   ,goods: 'Ne'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 11 ,companyName: 'Taiwan Semiconductor'  ,industry: 'Technologie'    ,goods: 'Na'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 12 ,companyName: 'Visa'                  ,industry: 'Finanzen'       ,goods: 'Mg'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 13 ,companyName: 'JPMorgan Chase'        ,industry: 'Banken'         ,goods: 'Al'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 14 ,companyName: 'Johnson & Johnson'     ,industry: 'Pharma'         ,goods: 'Si'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 15 ,companyName: 'Samsung Electronics'   ,industry: 'Technologie'    ,goods: 'P'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 16 ,companyName: 'Kweichow Moutai'       ,industry: 'Konsumgüter'    ,goods: 'S'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 17 ,companyName: 'Walmart'               ,industry: 'Einzelhandel'   ,goods: 'Cl'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 18 ,companyName: 'Mastercard'            ,industry: 'Finanzen'       ,goods: 'Ar'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 19 ,companyName: 'UnitedHealth'          ,industry: 'Versicherungen' ,goods: 'K'   ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
  {position: 20 ,companyName: 'LVMH'                  ,industry: 'Lusxusgüter'    ,goods: 'Ca'  ,dateStart: '2014-01-01'  ,dateEnd: '2030-12-31'},
];