import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumberList: number[] = [];
  evenNumberList: number[] = [];

  onIntervalFired(counter: number) {
    console.log(`counter=${counter}`);
    if (counter % 2 === 0 /*Case of even number */) {
      this.evenNumberList.push(counter);
    } else {
      this.oddNumberList.push(counter);
    }
  }
}
