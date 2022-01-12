import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessPartnerService {

  constructor() { }

  areaDataBP() {
    return [{
      name: 'Installation',
      data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
      name: 'Manufacturing',
      data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
      name: 'Sales & Distribution',
      data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
      name: 'Project Development',
      data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
      name: 'Other',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }];
  }

  totalBPeachYear() {
    return [{
      name: 'BP',
      data: [19, 24, 22, 26]
    }]
  }

  tableDataBP() {
    return [
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
  }

  totalCustomerYear() {
    return [{
      name: 'Customer',
      data: [150, 205, 160, 200, 240]
    }]
  }
}
