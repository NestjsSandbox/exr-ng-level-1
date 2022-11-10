import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onClickStart(){
    console.log('Started')
  }


  onClickEnd(){
    console.log('Ended')

  }
}
