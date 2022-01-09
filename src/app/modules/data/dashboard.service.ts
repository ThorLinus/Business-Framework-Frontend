import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  areaData() {
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

  cardData() {
    return [71, 78,39 ,66];
  }

  pieData() {
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
        name: 'Aktiv',
        y: 20,
        sliced: true,
        selected: true
      }, {
        name: 'Nicht Aktiv',
        y: 10
      }, {
        name: 'In Wartung',
        y: 2
      }, {
        name: 'Defekt',
        y: 2
      }]
    }]
  }

  tableDataDashboard() {
    return [
      {position: 1,   name: 'Hydrogen',   weight: 1.0079,   symbol: 'H' },
      {position: 2,   name: 'Helium',     weight: 4.0026,   symbol: 'He'},
      {position: 3,   name: 'Lithium',    weight: 6.941,    symbol: 'Li'},
      {position: 4,   name: 'Beryllium',  weight: 9.0122,   symbol: 'Be'},
      {position: 5,   name: 'Boron',      weight: 10.811,   symbol: 'B' },
      {position: 6,   name: 'Carbon',     weight: 12.0107,  symbol: 'C' },
      {position: 7,   name: 'Nitrogen',   weight: 14.0067,  symbol: 'N' },
      {position: 8,   name: 'Oxygen',     weight: 15.9994,  symbol: 'O' },
      {position: 9,   name: 'Fluorine',   weight: 18.9984,  symbol: 'F' },
      {position: 10,  name: 'Neon',       weight: 20.1797,  symbol: 'Ne'},
      {position: 11,  name: 'Sodium',     weight: 22.9897,  symbol: 'Na'},
      {position: 12,  name: 'Magnesium',  weight: 24.305,   symbol: 'Mg'},
      {position: 13,  name: 'Aluminum',   weight: 26.9815,  symbol: 'Al'},
      {position: 14,  name: 'Silicon',    weight: 28.0855,  symbol: 'Si'},
      {position: 15,  name: 'Phosphorus', weight: 30.9738,  symbol: 'P' },
      {position: 16,  name: 'Sulfur',     weight: 32.065,   symbol: 'S' },
      {position: 17,  name: 'Chlorine',   weight: 35.453,   symbol: 'Cl'},
      {position: 18,  name: 'Argon',      weight: 39.948,   symbol: 'Ar'},
      {position: 19,  name: 'Potassium',  weight: 39.0983,  symbol: 'K' },
      {position: 20,  name: 'Calcium',    weight: 40.078,   symbol: 'Ca'},
    ];
  }
}
