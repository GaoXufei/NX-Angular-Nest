import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//#region http Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from './request/request-interceptor';
const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];
//#endregion

//#region location
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
const LOCATIONS = [
  { provide: LocationStrategy, useClass: HashLocationStrategy }
];
//#endregion

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [...INTERCEPTOR_PROVIDES, ...LOCATIONS],
  bootstrap: [AppComponent]
})
export class AppModule {}
