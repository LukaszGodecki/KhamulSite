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
    private isSearchPanelVisible: boolean = false;
    private allAlbumTypes$: Observable<AlbumType[]>;
    private allPlayers$: Observable<Player[]>;
    private allPublishingHouses$: Observable<PublishingHouse[]>;
    //search
    private searchTypeAlbum: number = null;
    private searchPublishingHouse: number = null;
    private searchPlayer: number = null;
    private searchStartDate: Date = null;
    private searchEndDate: Date = null;
    private searchValue: string = "";

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
        this.searchTypeAlbum = null;
        this.searchPublishingHouse = null;
        this.searchPlayer = null;
        this.searchStartDate = null;
        this.searchEndDate = null;
        this.albumsService.searchValue = "";
    }

}
