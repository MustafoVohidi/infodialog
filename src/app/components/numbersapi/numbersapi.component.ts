import { Component, Input, OnInit } from '@angular/core';
import { dataServices } from 'src/app/service/data.service';

@Component({
  selector: 'app-numbersapi',
  templateUrl: './numbersapi.component.html',
  styleUrls: ['./numbersapi.component.scss'],
})
export class NumbersapiComponent implements OnInit {
  triviaFact: string = '';
  urlValue: string = '';
  addDateValue: string = '';
  addMathValue: string = '';
  addTriviaValue: string = '';
  isOpenModal: boolean = false;
  constructor(private facts: dataServices) {}

  getNumberShip(date: string) {
    this.isOpenModal = true;
    this.urlValue = date;
    this.facts.getData(this.urlValue).subscribe(
      (resp) => {
        console.log('rs', resp, 'rs');
      },
      (data) => {
        if (this.urlValue !== '') {
          this.triviaFact = data.error.text;
        } else {
          this.triviaFact = '';
        }
      }
    );
  }
  ngOnInit() {
    setInterval(() => {
      let allDate;
      let monthRand = Math.floor(Math.random() * 12);
      switch (monthRand) {
        case 1:
          allDate = 31;
          break;
        case 2:
          allDate = 28;
          break;
        case 3:
          allDate = 31;
          break;
        case 4:
          allDate = 30;
          break;
        case 5:
          allDate = 31;
          break;
        case 6:
          allDate = 30;
          break;
        case 7:
          allDate = 31;
          break;
        case 8:
          allDate = 31;
          break;
        case 9:
          allDate = 30;
          break;
        case 10:
          allDate = 31;
          break;
        case 11:
          allDate = 30;
          break;
        case 12:
          allDate = 31;
          break;
        default:
          allDate = 31;
      }
      let dateRand = Math.floor(Math.random() * allDate);
      this.getNumberShip(monthRand + dateRand + '/date');
    }, 60000);
  }
  getDate(date: string) {
    this.getNumberShip(date + '/date');
  }
  getMath(math: string) {
    this.getNumberShip(math + '/math');
  }
  getNumber(number: string) {
    this.getNumberShip(number);
  }
  getRandomTrivia() {
    this.getNumberShip('random/trivia');
  }
  getRandomYear() {
    this.getNumberShip('random/year');
  }
  getRandomDate() {
    this.getNumberShip('random/date');
  }
  getRandomMath() {
    this.getNumberShip('random/math');
  }
  addMath() {
    this.getNumberShip(this.addMathValue + '/math');
    this.addMathValue = '';
  }
  addTrivia() {
    this.getNumberShip(this.addTriviaValue);
    this.addTriviaValue = '';
  }
  addDate() {
    this.getNumberShip(this.addDateValue + '/date');
    this.addDateValue = '';
  }
  closeModal(event: any) {
    event.stopPropagation();
    this.isOpenModal = false;
    console.log(this.isOpenModal);
  }
}
