import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../data/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // areaData = [];
  // cardData = [];
  // pieData = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    // this.areaData = this.dashboardService.areaData();
    // this.cardData = this.dashboardService.cardData();
    // this.pieData = this.dashboardService.pieData();
  }
}
