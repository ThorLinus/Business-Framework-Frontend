import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor() { }

  turnoverEachMonth() {
    return [{
      name: 'Turnover each month',
      data: [1000000, 1250000, 1800000, 500000, 2450000, 1000000, 1250000, 2525000, 2850000, 450000, 1325000, 1950000]
    },{
      name: 'Costs each month',
      data: [550000, 750000, 1000000, 150000, 750000, 850000, 150000, 950000, 1650000, 300000, 1000000, 1500000]
    }]
  }
}
