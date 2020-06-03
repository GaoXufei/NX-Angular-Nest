import {
  Directive,
  OnDestroy,
  OnInit,
  HostBinding,
  Input,
  HostListener
} from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[nxgaoMenuSide]'
})
export class MenuSideDirective implements OnInit, OnDestroy {
  protected OPEN = false;

  constructor(private readonly router: Router) {}

  @HostBinding('class.open')
  @Input()
  get open() {
    return this.OPEN;
  }

  set open(value: boolean) {
    console.log(value);
    this.OPEN = value;
  }

  @HostListener('click')
  onClick() {
    alert();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
