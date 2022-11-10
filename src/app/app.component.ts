import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exr-level-1';


  onIntervalFired(counter: number){
    console.log(`counter=${counter}`);
  }
}
