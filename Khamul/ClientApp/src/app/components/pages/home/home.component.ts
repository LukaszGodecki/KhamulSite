import { Component, OnInit, OnDestroy } from '@angular/core';
import { Album } from '../../../models/album';
import { Observable } from 'rxjs';
import { AlbumsService } from '../albums/albums.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    

    albums$: Observable<Album[]>;

    constructor(private albumService: AlbumsService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon(
            "musicon",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/instagram.svg")
        );
    }

    ngOnInit(): void {
        this.albums$ = this.albumService.getAllAlbums();
        //this.albums$.subscribe(() => { }, error => { console.log(error); });
    }
    
}
