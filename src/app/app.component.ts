import { Component, OnInit } from '@angular/core';
import { dataServices } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  triviaFact: string = '';
  urlValue: string = '10';
  constructor(private facts: dataServices) {}
  ngOnInit() {
    this.facts.getData(this.urlValue).subscribe(
      (resp) => {
        console.log('rs', resp, 'rs');
      },
      (err) => {
        this.triviaFact = err.error.text;
        console.log('err', err.error.text, 'err');
      }
    );
  }
}
