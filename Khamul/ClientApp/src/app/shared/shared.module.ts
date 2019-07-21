import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCardComponent } from './album-card/album-card.component';
import { MaterialModule } from './material.module';



@NgModule({
    declarations: [
        AlbumCardComponent
    ],
  imports: [
      CommonModule,
      MaterialModule
    ],
    exports: [
        AlbumCardComponent
    ]
})
export class SharedModule { }
