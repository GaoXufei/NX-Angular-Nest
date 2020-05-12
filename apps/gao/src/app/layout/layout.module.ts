import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from '../components/header/nav/nav.component';
import { LeftSideComponent } from '../components/aside/left-side/left-side.component';
import { RightSideComponent } from '../components/aside/right-side/right-side.component';
import { FlexLayoutModule } from '@angular/flex-layout';

const COMPONENTS = [
  LayoutDefaultComponent,
  NavComponent,
  LeftSideComponent,
  RightSideComponent
];

@NgModule({
  imports: [CommonModule, SharedModule, FlexLayoutModule],
  declarations: [...COMPONENTS]
})
export class LayoutModule {}
