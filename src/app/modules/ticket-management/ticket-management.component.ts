import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketDisplay } from '../data/interface/ticketDisplay';
import { TicketsService } from '../data/tickets.service';

@Component({
  selector: 'app-ticket-management',
  templateUrl: './ticket-management.component.html',
  styleUrls: ['./ticket-management.component.scss']
})
export class TicketManagementComponent implements OnInit {

  public tickets$: TicketDisplay;

  ticketPieData: any=[];
  ticketAreaData: any=[];

  constructor(public _ticketsService: TicketsService, private_router: Router) {
    this.tickets$={
      ticketTime: 0,
      targetAchievement: 0,
      ticketCourse: []
    }
  }

  ngOnInit(): void {
    // this.tickets$ = this._ticketsService.getTicketsAvg();
    this.ticketPieData = this._ticketsService.ticketPieData();
    this.ticketAreaData = this._ticketsService.ticketAreaData(); 
  }
}
