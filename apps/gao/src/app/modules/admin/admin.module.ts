import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

//#region components
const COMPONENTS = [DashboardComponent, AdminComponent, LoginComponent];
//#endregion

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule, AdminRoutingModule]
})
export class AdminModule {}
