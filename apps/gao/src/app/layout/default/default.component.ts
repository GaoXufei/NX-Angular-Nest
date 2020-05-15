import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'nxgao-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent
  implements OnInit, OnDestroy, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    document.querySelector('body').classList.add('no-scroll');
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('no-scroll');
  }
}
