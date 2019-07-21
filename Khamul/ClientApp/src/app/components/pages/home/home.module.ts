import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
  imports: [
      CommonModule,
      MaterialModule,
      FormsModule,
      SharedModule,
      RouterModule.forChild([
          {
              path: "",
              component: HomeComponent,
          },
      ])
  ]
})
export class HomeModule { }
