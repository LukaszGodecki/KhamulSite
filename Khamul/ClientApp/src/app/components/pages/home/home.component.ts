import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from '../../../models/album';
import { Observable } from 'rxjs';
import { AlbumsService } from '../albums/albums.service';

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
        //this.albums$.subscribe(() => { }, error => { console.log(error); });
    }
    
}
