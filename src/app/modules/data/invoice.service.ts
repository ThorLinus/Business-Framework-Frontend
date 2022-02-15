import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() { }

  ticketPieData(){
    return[{
      name:'Invoice December 2021',
      colorByPoint:true,
      data:[{
        name: 'UPS',
        y:5,
        selected: true
      }, {
        name:'Robert Bosch GmbH',
        y: 33
      }, {
        name:'Dachser GmbH',
        y: 89
      }, {
        name: 'BASF SE',
        y: 156
      }, {
        name: 'DB Mobility Logistics',
        y: 345
      }]
    }]
  }
}
