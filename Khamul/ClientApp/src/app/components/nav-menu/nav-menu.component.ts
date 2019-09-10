import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../pages/albums/albums.service';
import { AlbumType } from '../../models/album-type';
import { Player } from '../../models/player';
import { PublishingHouse } from '../../models/publishing-house';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
    isSearchPanelVisible: boolean = false;
    allAlbumTypes$: Observable<AlbumType[]>;
    allPlayers$: Observable<Player[]>;
    allPublishingHouses$: Observable<PublishingHouse[]>;    

    constructor(private albumsService: AlbumsService, public router: Router) { }

    ngOnInit(): void {
        this.allAlbumTypes$ = this.albumsService.getAllAlbumTypes();
        this.allPlayers$ = this.albumsService.getAllPlayers();
        this.allPublishingHouses$ = this.albumsService.getAllPublishingHouses();
    }
    showSearchPanel(): void {
        this.isSearchPanelVisible = !this.isSearchPanelVisible;
    }

    clearFilters(): void {
        this.albumsService.searchAlbumType = null;
        this.albumsService.searchPublishingHouse = null;
        this.albumsService.searchPlayer = null;
        this.albumsService.searchStartDate = null;
        this.albumsService.searchEndDate = null;
        this.albumsService.searchValue = "";
    }
}
