import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

//#region material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppSideComponent } from '../../components/admin/app-side/app-side.component';
import { UserPanelComponent } from '../../components/admin/app-side/user-panel/user-panel.component';
const MaterialModules = [MatSidenavModule];
//#endregion

//#region components
const COMPONENTS = [
  DashboardComponent,
  AdminComponent,
  LoginComponent,
  AppSideComponent,
  UserPanelComponent
];
//#endregion

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, ...MaterialModules, AdminRoutingModule]
})
export class AdminModule {}
