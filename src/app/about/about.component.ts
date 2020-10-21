import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  covidData: any;

  barChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  chartColors: any[] = [
    {
      backgroundColor: '#ff4d4d'
    },
    {
      backgroundColor: '#1aa3ff'
    }
  ];
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins: any = [];
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed cases' },
    { data: [], label: 'Recovery' }
    // ,{ data: [], label: 'Deaths' }
  ];
  barChartColors: Color[] = [{ backgroundColor: 'red' }, { backgroundColor: 'green' }];
  version: string | null = environment.version;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://api.covid19india.org/data.json').subscribe(data => {
      this.covidData = data.cases_time_series;
      const ss1 = this.covidData.map((aaa: any) => {
        const abc = aaa.date;
        return abc;
      });
      this.barChartLabels = ss1.slice(-15, -1);
      console.log(this.barChartLabels);
      const ss2 = this.covidData.map((aaa: any) => {
        // tslint:disable-next-line: radix
        const ddd = parseInt(aaa.dailyconfirmed);
        return ddd;
      });
      this.barChartData[0].data = ss2.slice(-15, -1);
      console.log(this.barChartData[0]);

      const ss3 = this.covidData.map((aaa: any) => {
        // tslint:disable-next-line: radix
        const ccc = parseInt(aaa.dailyrecovered);
        return ccc;
      });
      this.barChartData[1].data = ss3.slice(-15, -1);
      console.log(this.barChartData[1]);

      // const ss4 = this.covidData.map((aaa: any) => {
      //   // tslint:disable-next-line: radix
      //   const ddd = parseInt(aaa.dailydeceased)
      //   return ddd;
      // });
      // this.barChartData[2].data = ss4.slice(-15, -1)
      // console.log(this.barChartData[2])
    });
  }
}
// dailydeceased
