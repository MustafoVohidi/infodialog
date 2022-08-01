import { Component, OnInit } from '@angular/core';
import { dataServices } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    ngOnInit() {}
  // triviaFact: string = '';
  // urlValue: string = '';
  // constructor(private facts: dataServices) {}
  // getNumberShip(date:string) {
  //   this.urlValue = date;
  //   this.facts.getData(this.urlValue).subscribe(
  //     (resp) => {
  //       console.log('rs', resp, 'rs');
  //     },
  //     (data) => {
  //       if (this.urlValue !== '') {
  //         this.triviaFact = data.error.text;
  //       } else {
  //         this.triviaFact = '';
  //       }
  //     }
  //   );
  // }
  // ngOnInit() {}
  // getDate(date:string) {
  //   this.getNumberShip(date+'/date') 
  // }
  // getMath(math:string) {
  //   this.getNumberShip(math+'/math') 
  // }
  // getNumber(number:string) {
  //   this.getNumberShip(number) 
  // }
  // getRandomTrivia(){
  //   this.getNumberShip('random/trivia') 
  // }
  // getRandomYear(){
  //   this.getNumberShip('random/year') 
  // }
  // getRandomDate(){
  //   this.getNumberShip('random/date') 
  // }
  // getRandomMath(){
  //   this.getNumberShip('random/math') 
  // }
}
