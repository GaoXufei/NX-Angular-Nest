import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from './layout/default/default.component';
import { NotfindpageComponent } from './modules/notfindpage/notfindpage.component';
import { LayoutLoginComponent } from './layout/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/topics'
      },
      {
        path: 'topics',
        loadChildren: () =>
          import('@gao/src/app/modules/topics/topics.module').then(
            m => m.TopicsModule
          )
      },
      {
        path: 'user',
        loadChildren: () =>
          import('@gao/src/app/modules/user/user.module').then(
            m => m.UserModule
          )
      }
    ]
  },
  {
    path: 'passport',
    component: LayoutLoginComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('@gao/src/app/modules/admin/login/login.module').then(
            m => m.LoginModule
          )
      }
    ]
  },
  {
    path: '**',
    component: NotfindpageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
