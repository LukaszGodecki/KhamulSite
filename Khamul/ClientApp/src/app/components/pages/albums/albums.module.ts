import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../shared/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
    declarations: [
        AlbumsComponent,
        AlbumComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        SharedModule,
        RouterModule.forChild([
            {
                path: "",
                component: AlbumsComponent,
            },
            {
                path: "album/:id",
                component: AlbumComponent,
            },
        ])
    ]
})
export class AlbumsModule { }
