import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule, ...MaterialModules]
})
export class SharedModule {}
