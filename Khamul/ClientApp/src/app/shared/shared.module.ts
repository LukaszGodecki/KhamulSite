import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { AlbumCardComponent } from '../components/pages/albums/album-card/album-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AlbumCardComponent
    ],
  imports: [
      CommonModule,
      MaterialModule,
      RouterModule
    ],
    exports: [
        AlbumCardComponent
    ]
})
export class SharedModule { }
