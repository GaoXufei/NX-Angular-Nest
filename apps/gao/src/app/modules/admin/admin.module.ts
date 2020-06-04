import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';


//#region components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { AppSideComponent } from '../../components/admin/app-side/app-side.component';
import { UserPanelComponent } from '../../components/admin/app-side/user-panel/user-panel.component';
import { MenuSideDirective } from '../../components/admin/app-side/menu-side/menu-side.directive';
import { MenuSideComponent } from '../../components/admin/app-side/menu-side/menu-side.component';
import { AppHeaderComponent } from '../../components/admin/app-header/app-header.component';
const COMPONENTS = [
  DashboardComponent,
  AdminComponent,
  LoginComponent,
  AppSideComponent,
  AppHeaderComponent,
  UserPanelComponent,
  MenuSideDirective,
  MenuSideComponent
];
//#endregion

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, AdminRoutingModule]
})
export class AdminModule {}
