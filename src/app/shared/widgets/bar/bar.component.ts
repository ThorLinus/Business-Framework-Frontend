import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})

/*
*   This highchart bar chart is tried to implement generic as possible, so that if used the information can change for each usage.
*   With '<app-widget-bar @input ...>' the bar chart can be shown in the html file 
*/
export class BarComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() xAxis: any = [];
  @Input() yAxis: string = "";


  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column'
      },

      title: {
          text: this.title
      },

      subtitle: {
          text: this.subtitle
      },

      xAxis: {
          categories: this.xAxis,
          crosshair: true
      },

      yAxis: {
          min: 0,
          title: {
              text: this.yAxis
          }
      },

      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
