import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const MaterialModules = [
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule
];

const AngularModules = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule, ...MaterialModules, ...AngularModules]
})
export class SharedModule {}
