import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },

      title: {
          text: 'Gesamtzahl Geschäftspartner'
      },

      subtitle: {
          text: 'Source: CRM'
      },

      xAxis: {
          categories: [
              '2018',
              '2019',
              '2020',
              '2021'              
          ],
          crosshair: true
      },

      yAxis: {
          min: 0,
          title: {
              text: 'Anzahl'
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },

      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },

      credits: {
        enabled: false
      }, 

      series: this.data
  }

  HC_exporting(Highcharts);

  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
  }
  
}
