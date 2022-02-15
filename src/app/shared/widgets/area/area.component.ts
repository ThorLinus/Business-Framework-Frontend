import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
/*
*   This highchart area chart is tried to implement generic as possible, so that if used the information can change for each usage.
*   With '<app-widget-area @input ...>' the area chart can be shown in the html file 
*/
export class AreaComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() yAxis: string = "";
  @Input() xAxis: string = "";
  @Input() pointStart: any = [];
  @Input() xAxisCategories: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = 
    {

      title: {
          text: this.title
      },
  
      subtitle: {
          text: this.subtitle
      },
  
      yAxis: {
          title: {
              text: this.yAxis
          }
      },
  
      xAxis: {
          accessibility: {
              rangeDescription: this.xAxis
          },
          categories: this.xAxisCategories,
      },
  
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },
  
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: this.pointStart
          }
      },
      
      credits: {
        enabled: false
      }, 

      series: this.data,
  
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  
  }

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
