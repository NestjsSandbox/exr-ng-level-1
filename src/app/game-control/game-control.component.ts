import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval: any;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickStart(){
    console.log('Started')
    this.interval = setInterval( () => {
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
      //console.log(`lastNumber=${this.lastNumber}`);
    },1000);
  }

  onClickEnd(){
    console.log('Ended')
    // this.lastNumber = 0; //This is if u want to reset the numbers to 0
    clearInterval(this.interval);
  }
}
