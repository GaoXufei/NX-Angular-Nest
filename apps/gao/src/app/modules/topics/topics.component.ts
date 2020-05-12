import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  fxFlex: number;
  height: string;
  text: string;
}

@Component({
  selector: 'nxgao-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', fxFlex: 33, height: '20px', color: 'lightblue' },
    { text: 'Two', fxFlex: 33, height: '40px', color: 'lightgreen' },
    { text: 'Three', fxFlex: 33, height: '60px', color: 'lightpink' },
    { text: 'Four', fxFlex: 20, height: '20px', color: '#DDBDF1' },
    { text: 'Five', fxFlex: 20, height: '30px', color: '#ccc' },
    { text: 'six', fxFlex: 20, height: '20px', color: 'red' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
