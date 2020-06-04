import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nxgao-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output() toggleDrawer = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
