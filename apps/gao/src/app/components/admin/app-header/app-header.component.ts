import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'nxgao-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output() toggleDrawer = new EventEmitter<void>();

  private get screenfull() {
    return screenfull as screenfull.Screenfull;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleScreen() {
    if( this.screenfull.isEnabled ) {
      this.screenfull.toggle();
    }
  }

}
