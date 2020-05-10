import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const MaterialModules = [MatMenuModule];
const BrowserModules = [BrowserAnimationsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule, ...MaterialModules, ...BrowserModules]
})
export class SharedModule {}
