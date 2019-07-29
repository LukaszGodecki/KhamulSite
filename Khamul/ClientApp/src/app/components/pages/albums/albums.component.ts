import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../../models/album';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

    albums$: Observable<Album[]>;

    constructor(private albumService: AlbumsService) { }

    ngOnInit(): void {
        this.albums$ = this.albumService.getAllAlbums();
        //this.albums$.subscribe(() => { }, error => { console.log(error); });
    }

}
