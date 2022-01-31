import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../data/finance.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  barData: any = [];

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    this.barData = this.financeService.turnoverEachMonth()
  }

}
