import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialModules = [MatMenuModule, MatGridListModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule, ...MaterialModules]
})
export class SharedModule {}
