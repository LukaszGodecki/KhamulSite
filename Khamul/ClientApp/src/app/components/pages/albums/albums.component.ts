import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../../models/album';
import { AlbumsService } from './albums.service';
import { PageEvent} from '@angular/material/paginator';
import { AlbumType } from '../../../models/album-type';
import { Player } from '../../../models/player';
import { PublishingHouse } from '../../../models/publishing-house';

@Component({
  selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

    albums: Album[] = []
    filteredAlbums: Album[] = [];
    isSearchPanelVisible: boolean = false;
    allAlbumTypes$: Observable<AlbumType[]> = this.albumsService.getAllAlbumTypes();
    allPlayers$: Observable<Player[]> = this.albumsService.getAllPlayers();
    allPublishingHouses$: Observable<PublishingHouse[]> = this.albumsService.getAllPublishingHouses(); 

    //#region searchValue
    _searchValue: string;
    get searchValue(): string {
        return this._searchValue;
    }
    set searchValue(value: string) {
        this._searchValue = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }
    //#endregion
    //#region searchAlbumType
    _searchAlbumType: number;
    get searchAlbumType(): number {
        return this._searchAlbumType;
    }
    set searchAlbumType(value: number) {
        this._searchAlbumType = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }
    //#endregion
    //#region searchPublishingHouse
    _searchPublishingHouse: number;
    get searchPublishingHouse(): number {
        return this._searchPublishingHouse;
    }
    set searchPublishingHouse(value: number) {
        this._searchPublishingHouse = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }
    //#endregion
    //#region searchPlayer
    _searchPlayer: number;
    get searchPlayer(): number {
        return this._searchPlayer;
    }
    set searchPlayer(value: number) {
        this._searchPlayer = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }
    //#endregion
    //#region searchStartDate
    _searchStartDate: Date;
    get searchStartDate(): Date {
        return this._searchStartDate;
    }
    set searchStartDate(value: Date) {
        this._searchStartDate = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }
    //#endregion
    //#region searchEndDate
    _searchEndDate: Date;
    get searchEndDate(): Date {
        return this._searchEndDate;
    }
    set searchEndDate(value: Date) {
        this._searchEndDate = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }
    //#endregion

    // MatPaginator Inputs
    length = 9;
    pageSize = 6;
    pageSizeOptions: number[] = [6, 9, 18, 60];

    // MatPaginator Output
    _pageEvent: PageEvent;
    get pageEvent(): PageEvent {
        return this._pageEvent;
    }
    set pageEvent(value: PageEvent) {
        this._pageEvent = value;
        this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
    }

    constructor(public albumsService: AlbumsService) { }

    ngOnInit(): void {
        this.albumsService.getAllAlbums().subscribe(albums => {
            this.albums = albums as Album[];
            this.filteredAlbums = albums as Album[];
            this.filteredAlbums = this.performFilter(this.searchValue, this.searchAlbumType, this.searchPublishingHouse, this.searchPlayer, this.searchStartDate, this.searchEndDate);
            }
        );
    }
    performFilter(searchValue: string, searchAlbumType: number, searchPublishingHouse: number, searchPlayer: number, searchStartDate: Date, searchEndDate: Date): Album[] {
        let tempAlbums: Album[] = this.albums;
        if (searchValue) {
            tempAlbums = tempAlbums.filter(
                (content: Album) =>
                    content.title.toLocaleLowerCase().indexOf(searchValue.toLocaleLowerCase()) !== -1
            );
        }
        if (searchAlbumType) {
            tempAlbums = tempAlbums.filter(
                (content: Album) =>
                    content.albumTypes.some(item => item.id == searchAlbumType)
            );
        }
        if (searchPublishingHouse) {
            tempAlbums = tempAlbums.filter(
                (content: Album) =>
                    content.publishingHouse.id == searchPublishingHouse
            );
        }
        if (searchPlayer) {
            tempAlbums = tempAlbums.filter(
                (content: Album) =>
                    content.players.some(item => item.id == searchPlayer)
            );
        }
        if (searchStartDate) {
            tempAlbums = tempAlbums.filter(
                (content: Album) =>
                    content.dateFrom >= searchStartDate
            );
        }
        if (searchEndDate) {
            tempAlbums = tempAlbums.filter(
                (content: Album) =>
                    content.dateTo <= searchEndDate
            );
        }
        if (this.pageEvent) {
            tempAlbums = tempAlbums.slice(this.pageEvent.pageIndex * this.pageEvent.pageSize, (this.pageEvent.pageIndex * this.pageEvent.pageSize) + this.pageEvent.pageSize)
        } else {
            tempAlbums = tempAlbums.slice(0, this.pageSize)

        }
        return tempAlbums
    }

    showSearchPanel(): void {
        this.albumsService.isSearchPanelVisible = !this.albumsService.isSearchPanelVisible;
    }

    clearFilters(): void {
        this.searchAlbumType = null;
        this.searchPublishingHouse = null;
        this.searchPlayer = null;
        this.searchStartDate = null;
        this.searchEndDate = null;
        this.searchValue = "";
    }
}
