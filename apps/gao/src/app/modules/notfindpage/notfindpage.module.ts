import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfindpageRoutingModule } from './notfindpage-routing.module';
import { NotfindpageComponent } from './notfindpage.component';


@NgModule({
  declarations: [NotfindpageComponent],
  imports: [
    CommonModule,
    NotfindpageRoutingModule
  ]
})
export class NotfindpageModule { }
