import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions = {};
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    this.chartOptions = 
    {

      title: {
          text: 'Mitarbeiterenwticklung pro Sektor'
      },
  
      subtitle: {
          text: 'Jahr 2014 - heute'
      },
  
      yAxis: {
          title: {
              text: 'Anzahl Mitarbeiter'
          }
      },
  
      xAxis: {
          accessibility: {
              rangeDescription: 'Range: 2014 to 2021'
          }
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
              pointStart: 2014
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
