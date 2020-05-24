import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './default/default.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from '../components/header/nav/nav.component';
import { LeftSideComponent } from '../components/aside/left-side/left-side.component';
import { RightSideComponent } from '../components/aside/right-side/right-side.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const COMPONENTS = [NavComponent, LeftSideComponent, RightSideComponent];

const LAYOUT_COMPONENT = [
  LayoutDefaultComponent,
  LayoutLoginComponent,
  LayoutAdminComponent
];

@NgModule({
  declarations: [...LAYOUT_COMPONENT, ...COMPONENTS],
  imports: [CommonModule, SharedModule]
})
export class LayoutModule {}
