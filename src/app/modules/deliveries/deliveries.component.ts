import { Component, OnInit } from '@angular/core';
import { DeliveriesService } from '../data/deliveries.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})
export class DeliveriesComponent implements OnInit {

  areaDataDeliveries: any = [];
  pieDataDeliveries: any=[];

  constructor(private deliveriesService: DeliveriesService) { }

  ngOnInit(): void {
    this.areaDataDeliveries= this.deliveriesService.areaDataDeliveries();
    this.pieDataDeliveries= this.deliveriesService.pieDataDeliveries();
  }

}
