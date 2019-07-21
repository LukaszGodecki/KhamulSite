import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PicturesReportsComponent } from './pictures-reports.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [
        PicturesReportsComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: "",
                component: PicturesReportsComponent,
            },
        ])
    ]
})
export class PicturesReportsModule { }
