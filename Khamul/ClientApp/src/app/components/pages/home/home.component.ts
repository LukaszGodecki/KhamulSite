import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../../shared/albums.service';
import { Album } from '../../../models/album';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    albums$: Observable<Album[]>;

    constructor(private albumService: AlbumsService) { }

    ngOnInit(): void {
        this.albums$ = this.albumService.getAllAlbums();
    }
}
