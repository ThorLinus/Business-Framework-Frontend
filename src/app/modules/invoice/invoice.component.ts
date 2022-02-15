import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../data/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoicePieData: any=[];

  constructor(public _invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoicePieData = this._invoiceService.ticketPieData();
  }

}
