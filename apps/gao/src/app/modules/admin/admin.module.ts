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
import { MenuSideDirective } from '../../components/admin/app-side/menu-side/menu-side.directive';
import { MenuSideComponent } from '../../components/admin/app-side/menu-side/menu-side.component';
const MaterialModules = [MatSidenavModule];
//#endregion

//#region components
const COMPONENTS = [
  DashboardComponent,
  AdminComponent,
  LoginComponent,
  AppSideComponent,
  UserPanelComponent,
  MenuSideDirective,
  MenuSideComponent
];
//#endregion

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, ...MaterialModules, AdminRoutingModule]
})
export class AdminModule {}
