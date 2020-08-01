import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  covidData: any;
  term:any;
  nnn=['2','3','4','5']
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService,
    private http: HttpClient) {}

  ngOnInit() {
  //  console.log(this.nnn)
   for(const i of this.nnn){
    console.log(i)
  }
    this.http.get<any>('https://api.covid19india.org/data.json').subscribe(data => {
      this.covidData = data.statewise;
      // console.log(this.covidData)
  })

    
  
  }
}
