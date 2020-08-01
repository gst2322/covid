import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  covidData: any;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
   // tslint:disable-next-line: max-line-length
  //  barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011'];
  barChartLabels: Label[]=[]
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins: any = [];

  //  barChartData: ChartDataSets[] = [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }  ];

  barChartData: ChartDataSets[]=[
    {data: [],label: 'Confirmed cases'},{data: [],label: 'Recovery'},
    {data: [],label: 'Deaths'}
  ];
  version: string | null = environment.version;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  // this.barChartData[0].data=[1,2,3,4,5]
  this.http.get<any>('https://api.covid19india.org/data.json').subscribe(data => {
    this.covidData = data.cases_time_series;
    // console.log(this.covidData)
    // this.barChartLabels=this.covidData.date
    // this.barChartData=this.covidData.dailyconfirmed
    // this.barChartLabels.length = 0;
    // this.barChartLabels.push(...this.covidData.date);
    // this.barChartData.length = 0;
    // this.barChartData.push(...this.covidData.dailyconfirmed);
    // tslint:disable-next-line: typedef
    // tslint:disable-next-line: only-arrow-functions
     const ss2 = this.covidData.map( function(aaa:any) {
      if( true){
           // tslint:disable-next-line: prefer-const
           // tslint:disable-next-line: radix
          //  const abc = parseInt(aaa.totalrecovered)
          const abc = aaa.date

          return abc;
      }
     });
     this.barChartLabels=ss2.slice(170,180)
     console.log(this.barChartLabels)
     // tslint:disable-next-line: typedef
     // tslint:disable-next-line: only-arrow-functions
      const ss1 = this.covidData.map( function(aaa:any) {
      if( true){
           // tslint:disable-next-line: prefer-const
           // tslint:disable-next-line: radix
           const ddd = parseInt(aaa.dailyconfirmed)
          return ddd;
      }
     });
     this.barChartData[0].data=ss1.slice(170,180)
     console.log(this.barChartData[0])
    //  console.log(barChartData.length)
    // for(const i of this.barChartData){
    //   console.log(i[0])
    // }
    // tslint:disable-next-line: only-arrow-functions
    const ss3 = this.covidData.map( function(aaa:any) {
      if( true){
           // tslint:disable-next-line: prefer-const
           // tslint:disable-next-line: radix
           const ccc = parseInt(aaa.dailyrecovered)
          return ccc;
      }
     });
     this.barChartData[1].data=ss3.slice(170,180)
     console.log(this.barChartData[1])

     // tslint:disable-next-line: only-arrow-functions
     const ss4 = this.covidData.map( function(aaa:any) {
      if( true){
           // tslint:disable-next-line: prefer-const
           // tslint:disable-next-line: radix
           const ddd = parseInt(aaa.dailydeceased)
          return ddd;
      }
     });
     this.barChartData[2].data=ss4.slice(170,180)
     console.log(this.barChartData[2])


  })
  }
}
// dailydeceased