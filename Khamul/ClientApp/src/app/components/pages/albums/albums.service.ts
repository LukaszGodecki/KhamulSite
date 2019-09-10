import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../../../models/album';
import { AlbumType } from '../../../models/album-type';
import { Player } from '../../../models/player';
import { PublishingHouse } from '../../../models/publishing-house';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

    albums: Album[] = []
    filteredAlbums: Album[] = [];

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

    allAlbums: Album[] = [
        {
            id: 1,
            pictures: [
                {
                    id: 1,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/IMG_0194.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/SMALL_IMG_0194.jpg",
                    albumID: 1
                },
                {
                    id: 2,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/IMG_0195.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/SMALL_IMG_0195.jpg",
                    albumID: 1
                },
                {
                    id: 3,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/IMG_0196.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/SMALL_IMG_0196.jpg",
                    albumID: 1
                },
                {
                    id: 4,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/IMG_0197.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/SMALL_IMG_0197.jpg",
                    albumID: 1
                }
            ],
            title: "GloryIII - Antietam The Final Attack",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2013, 1, 19),
            dateTo: new Date(2013, 1, 19),
            players: [
                { id: 1, name: "Khamul" },
                { id: 2, name: "Namek" }
            ],
            publishingHouse: { id: 1, name: "GMT", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 1,
                linkToPicture: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/IMG_0194.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2013_01_19GloryIII_AntietamTheFinalAttack/SMALL_IMG_0194.jpg",
                albumID: 1
            }
        },
        {
            id: 2,
            pictures: [
                {
                    id: 5,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0454.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0454.jpg",
                    albumID: 2
                },
                {
                    id: 6,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0455.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0455.jpg",
                    albumID: 2
                },
                {
                    id: 7,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0457.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0457.jpg",
                    albumID: 2
                },
                {
                    id: 8,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0458.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0458.jpg",
                    albumID: 2
                },
                {
                    id: 9,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0459.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0459.jpg",
                    albumID: 2
                },
                {
                    id: 10,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0461.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0461.jpg",
                    albumID: 2
                },
                {
                    id: 11,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0462.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0462.jpg",
                    albumID: 2
                },
                {
                    id: 12,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0463.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_04563.jpg",
                    albumID: 2
                },
                {
                    id: 13,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0464.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0464.jpg",
                    albumID: 2
                },
                {
                    id: 14,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0465.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0465.jpg",
                    albumID: 2
                },
                {
                    id: 15,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0466.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0466.jpg",
                    albumID: 2
                },
                {
                    id: 16,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0467.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0467.jpg",
                    albumID: 2
                },
                {
                    id: 17,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0468.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0468.jpg",
                    albumID: 2
                },
                {
                    id: 18,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0469.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0469.jpg",
                    albumID: 2
                },
                {
                    id: 19,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0470.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0470.jpg",
                    albumID: 2
                },
                {
                    id: 20,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0471.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0471.jpg",
                    albumID: 2
                },
                {
                    id: 21,
                    linkToPicture: "http://khamul.webserwer.plassets/2013_04_28Antiochia1098/IMG_0472.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0472.jpg",
                    albumID: 2
                },
                {
                    id: 22,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0473.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0473.jpg",
                    albumID: 2
                },
                {
                    id: 23,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0474.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0474.jpg",
                    albumID: 2
                },

            ],
            title: "Antiochia 1098",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2013, 4, 28),
            dateTo: new Date(2013, 4, 28),
            players: [
                { id: 1, name: "Khamul" },
                { id: 3, name: "Raleen" }
            ],
            publishingHouse: { id: 1, name: "GMT", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 13,
                linkToPicture: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/IMG_0464.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2013_04_28Antiochia1098/SMALL_IMG_0464.jpg",
                albumID: 2
            },
        },
        {
            id: 3,
            pictures: [
                {
                    id: 24,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1350.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1350.jpg",
                    albumID: 3
                },
                {
                    id: 25,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1358.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1358.jpg",
                    albumID: 3
                },
                {
                    id: 26,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1360.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1360.jpg",
                    albumID: 3
                },
                {
                    id: 27,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1368.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1368.jpg",
                    albumID: 3
                },
                {
                    id: 28,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1369.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1369.jpg",
                    albumID: 3
                },
                {
                    id: 29,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1371.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1371.jpg",
                    albumID: 3
                },

            ],
            title: "Alma 1854",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2013, 9, 28),
            dateTo: new Date(2013, 9, 28),
            players: [
                { id: 1, name: "Khamul" },
                { id: 4, name: "Sławek" }
            ],
            publishingHouse: { id: 2, name: "Strategemata", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 24,
                linkToPicture: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/IMG_1350.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2013_09_28Alma1854/SMALL_IMG_1350.jpg",
                albumID: 3
            },
        },
        {
            id: 4,
            pictures: [
                {
                    id: 30,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/IMG_3665.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/SMALL_IMG_3665.jpg",
                    albumID: 4
                },
                {
                    id: 31,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/IMG_3666.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/SMALL_IMG_3666.jpg",
                    albumID: 4
                },
                {
                    id: 32,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/IMG_3667.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/SMALL_IMG_3667.jpg",
                    albumID: 4
                },
                {
                    id: 33,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/IMG_3669.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/SMALL_IMG_3669.jpg",
                    albumID: 4
                },
                {
                    id: 34,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/IMG_3670.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/SMALL_IMG_3670.jpg",
                    albumID: 4
                },

            ],
            title: "Alma 1854",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2014, 7, 13),
            dateTo: new Date(2014, 7, 13),
            players: [
                { id: 1, name: "Khamul" },
                { id: 5, name: "Saw11" }
            ],
            publishingHouse: { id: 3, name: "VaeVictis", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 30,
                linkToPicture: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/IMG_3665.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2014_07_13FozDoArouce1811/SMALL_IMG_3665.jpg",
                albumID: 4
            }
        },
        {
            id: 5,
            pictures: [
                {
                    id: 35,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0275.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0275.jpg",
                    albumID: 5
                },
                {
                    id: 36,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0277.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0277.jpg",
                    albumID: 5
                },
                {
                    id: 37,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0278.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0278.jpg",
                    albumID: 5
                },
                {
                    id: 38,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0279.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0279.jpg",
                    albumID: 5
                },
                {
                    id: 38,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0280.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0280.jpg",
                    albumID: 5
                },
                {
                    id: 40,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0281.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0281.jpg",
                    albumID: 5
                },
                {
                    id: 41,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0282.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0282.jpg",
                    albumID: 5
                },
                {
                    id: 42,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0283.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0283.jpg",
                    albumID: 5
                },
                {
                    id: 43,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0284.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0284.jpg",
                    albumID: 5
                },
            ],
            title: "Alma 1854",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2016, 9, 23),
            dateTo: new Date(2016, 9, 23),
            players: [
                { id: 1, name: "Khamul" },
                { id: 2, name: "Namek" }
            ],
            publishingHouse: { id: 4, name: "Jakieś czeskie ;)", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 35,
                linkToPicture: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/IMG_0275.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2016_09_23BitvaNaPolichPelennoru/SMALL_IMG_0275.jpg",
                albumID: 5
            }
        },
        {
            id: 6,
            pictures: [
                {
                    id: 44,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_085354.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_085354.jpg",
                    albumID: 6
                },
                {
                    id: 45,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_093405.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_093405.jpg",
                    albumID: 6
                },
                {
                    id: 46,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_102753.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_102753.jpg",
                    albumID: 6
                },
                {
                    id: 47,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_115342.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_115342.jpg",
                    albumID: 6
                },
                {
                    id: 48,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_124759.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_124759.jpg",
                    albumID: 6
                },
                {
                    id: 49,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_133616.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_133616.jpg",
                    albumID: 6
                },
                {
                    id: 50,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_141901.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_141901.jpg",
                    albumID: 6
                },
                {
                    id: 51,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_142704.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_142704.jpg",
                    albumID: 6
                },
                {
                    id: 52,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_144120.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_144120.jpg",
                    albumID: 6
                },
            ],
            title: "Kircholm 1605",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2017, 5, 27),
            dateTo: new Date(2017, 5, 27),
            players: [
                { id: 1, name: "Khamul" },
                { id: 2, name: "Namek" }
            ],
            publishingHouse: { id: 5, name: "Dragon", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 44,
                linkToPicture: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/20170527_085354.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2017_05_27Kircholm1605/SMALL_20170527_085354.jpg",
                albumID: 6
            }
        },
        {
            id: 7,
            pictures: [
                {
                    id: 53,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180407_210852.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180407_210852.jpg",
                    albumID: 7
                },
                {
                    id: 54,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180407_215011.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180407_215011.jpg",
                    albumID: 7
                },
                {
                    id: 55,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180407_224939.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180407_224939.jpg",
                    albumID: 7
                },
                {
                    id: 56,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180408_112050.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180408_112050.jpg",
                    albumID: 7
                },
                {
                    id: 57,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180408_120609.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180408_120609.jpg",
                    albumID: 7
                },
                {
                    id: 58,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180408_124248.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180408_124248.jpg",
                    albumID: 7
                },
                {
                    id: 59,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180408_131950.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180408_131950.jpg",
                    albumID: 7
                },
            ],
            title: "Tczew1627",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2018, 4, 8),
            dateTo: new Date(2018, 4, 8),
            players: [
                { id: 1, name: "Khamul" },
                { id: 2, name: "Namek" }
            ],
            publishingHouse: { id: 1, name: "GMT", linkToLogo: "" },
            albumTypes: [
                { id: 1, name: "Album zdjęć" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 53,
                linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/20180408_120609.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_08Tczew1627/SMALL_20180408_120609.jpg",
                albumID: 7
            }
        },
        {
            id: 8,
            pictures: [
                {
                    id: 60,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_102432.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_102432.jpg",
                    albumID: 8
                },
                {
                    id: 61,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_102443.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_102443.jpg",
                    albumID: 8
                },
                {
                    id: 62,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_102447.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_102447.jpg",
                    albumID: 8
                },
                {
                    id: 63,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_102504.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_102504.jpg",
                    albumID: 8
                },
                {
                    id: 64,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_102525.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_102525.jpg",
                    albumID: 8
                },
                {
                    id: 65,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_102535.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_102535.jpg",
                    albumID: 8
                },
                {
                    id: 66,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_103248.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_103248.jpg",
                    albumID: 8
                },
                {
                    id: 67,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_111038.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_111038.jpg",
                    albumID: 8
                },
                {
                    id: 68,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_111043.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_111043.jpg",
                    albumID: 8
                },
                {
                    id: 69,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_111119.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_111119.jpg",
                    albumID: 8
                },
                {
                    id: 70,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_124250.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_124250.jpg",
                    albumID: 8
                },
                {
                    id: 71,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_142125.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_142125.jpg",
                    albumID: 8
                },
                {
                    id: 72,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_142136.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_142136.jpg",
                    albumID: 8
                },
                {
                    id: 73,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_142146.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_142146.jpg",
                    albumID: 8
                },
                {
                    id: 74,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_142157.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_142157.jpg",
                    albumID: 8
                },
                {
                    id: 75,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_142603.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_142603.jpg",
                    albumID: 8
                },
                {
                    id: 76,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_142614.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_142614.jpg",
                    albumID: 8
                },
                {
                    id: 77,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_171129.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_171129.jpg",
                    albumID: 8
                },
                {
                    id: 78,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_181404.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_181404.jpg",
                    albumID: 8
                },
                {
                    id: 79,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_181413.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_181413.jpg",
                    albumID: 8
                },
                {
                    id: 80,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_181444.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_181444.jpg",
                    albumID: 8
                },
                {
                    id: 81,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_184825.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_184825.jpg",
                    albumID: 8
                },
                {
                    id: 82,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_184838.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_184838.jpg",
                    albumID: 8
                },
                {
                    id: 83,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_200740.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_200740.jpg",
                    albumID: 8
                },
                {
                    id: 84,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_202608.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_202608.jpg",
                    albumID: 8
                },
                {
                    id: 85,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_222400.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_222400.jpg",
                    albumID: 8
                },
            ],
            title: "Kraków 22.10.2016",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2016, 10, 22),
            dateTo: new Date(2016, 10, 22),
            players: [],
            publishingHouse: { id: null, name: "", linkToLogo: "" },
            albumTypes: [
                { id: 3, name: "Relacja z konwentu" }
            ],
            albumMiniaturePicture: {
                id: 78,
                linkToPicture: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/20161022_181404.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2016_10_22Krakow/SMALL_20161022_181404.jpg",
                albumID: 8
            }
        },
        {
            id: 9,
            pictures: [
                {
                    id: 86,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_182203.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_182203.jpg",
                    albumID: 9
                },
                {
                    id: 87,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_182208.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_182208.jpg",
                    albumID: 9
                },
                {
                    id: 88,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_182223.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_182223.jpg",
                    albumID: 9
                },
                {
                    id: 89,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_182232.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_182232.jpg",
                    albumID: 9
                },
                {
                    id: 90,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_191451.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_191451.jpg",
                    albumID: 9
                },
                {
                    id: 91,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_191508.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_191508.jpg",
                    albumID: 9
                },
                {
                    id: 92,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_201455.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_201455.jpg",
                    albumID: 9
                },
                {
                    id: 93,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_201459.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_201459.jpg",
                    albumID: 9
                },
                {
                    id: 94,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180406_211330.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180406_211330.jpg",
                    albumID: 9
                },
                {
                    id: 95,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_103346.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_103346.jpg",
                    albumID: 9
                },
                {
                    id: 96,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_105721.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_105721.jpg",
                    albumID: 9
                },
                {
                    id: 97,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_105727.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_105727.jpg",
                    albumID: 9
                },
                {
                    id: 98,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_105732.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_105732.jpg",
                    albumID: 9
                },
                {
                    id: 99,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_105738.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_105738.jpg",
                    albumID: 9
                },
                {
                    id: 100,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_105744.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_105744.jpg",
                    albumID: 9
                },
                {
                    id: 101,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_105751.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_105751.jpg",
                    albumID: 9
                },
                {
                    id: 102,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_130430.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_130430.jpg",
                    albumID: 9
                },
                {
                    id: 103,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_130434.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_130434.jpg",
                    albumID: 9
                },
                {
                    id: 104,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_130440.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_130440.jpg",
                    albumID: 9
                },
                {
                    id: 105,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_161139.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_161139.jpg",
                    albumID: 9
                },
                {
                    id: 106,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_173147.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_173147.jpg",
                    albumID: 9
                },
                {
                    id: 107,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_182421.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_182421.jpg",
                    albumID: 9
                },
                {
                    id: 108,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_182428.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_182428.jpg",
                    albumID: 9
                },
                {
                    id: 109,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_182435.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_182435.jpg",
                    albumID: 9
                },
                {
                    id: 110,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_182444.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_182444.jpg",
                    albumID: 9
                },
                {
                    id: 111,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_195034.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_195034.jpg",
                    albumID: 9
                },
                {
                    id: 112,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_195047.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_195047.jpg",
                    albumID: 9
                },
                {
                    id: 113,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_195122.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_195122.jpg",
                    albumID: 9
                },
                {
                    id: 114,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_214244.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_214244.jpg",
                    albumID: 9
                },
                {
                    id: 115,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_214253.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_214253.jpg",
                    albumID: 9
                },
                {
                    id: 116,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_225111.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_225111.jpg",
                    albumID: 9
                },
                {
                    id: 117,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180407_225124.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180407_225124.jpg",
                    albumID: 9
                },
                {
                    id: 118,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180408_110555.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180408_110555.jpg",
                    albumID: 9
                },
                {
                    id: 119,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180408_124137.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180408_124137.jpg",
                    albumID: 9
                },
                {
                    id: 120,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180408_141715.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180408_141715.jpg",
                    albumID: 9
                },
                {
                    id: 121,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180408_141728.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180408_141728.jpg",
                    albumID: 9
                },
                {
                    id: 122,
                    linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180408_141737.jpg",
                    linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180408_141737.jpg",
                    albumID: 9
                }
            ],
            title: "Kraków 06-08.04.2018",
            description: "",
            shortDescription: "",
            dateFrom: new Date(2018, 4, 6),
            dateTo: new Date(2018, 4, 6),
            players: [],
            publishingHouse: { id: null, name: "", linkToLogo: "" },
            albumTypes: [
                { id: 3, name: "Relacja z konwentu" }
            ],
            albumMiniaturePicture: {
                id: 122,
                linkToPicture: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/20180408_141737.jpg",
                linkToMiniature: "http://khamul.webserwer.pl/assets/2018_04_06-08Krakow/SMALL_20180408_141737.jpg",
                albumID: 9
            }
        },
    ];
    allAlbumTypes: AlbumType[] = [
        { id: 1, name: "Album zdjęć" },
        { id: 2, name: "Relacja z rozgrywki" },
        { id: 3, name: "Relacja z konwentu" }
    ];
    allPlayers: Player[] = [
        { id: 1, name: "Khamul" },
        { id: 2, name: "Namek" },
        { id: 3, name: "Raleen" },
        { id: 4, name: "Sławek" },
        { id: 5, name: "Saw11" }
    ];
    allPublishingHouses: PublishingHouse[] = [
        { id: 1, name: "GMT", linkToLogo: "" },
        { id: 2, name: "Strategemata", linkToLogo: "" },
        { id: 3, name: "VaeVictis", linkToLogo: "" },
        { id: 4, name: "Alter", linkToLogo: "" },
        { id: 5, name: "Dragon", linkToLogo: "" },

    ];

    constructor() {
        this.albums = this.allAlbums;
        this.filteredAlbums = this.allAlbums;
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
        return tempAlbums
    }    

    getAllAlbums(): Observable<Album[]> {
        return of(this.allAlbums); 
    }
    getAllAlbumTypes(): Observable<AlbumType[]> {
        return of(this.allAlbumTypes);
    }
    getAllPlayers(): Observable<Player[]> {
        return of(this.allPlayers);
    }
    getAllPublishingHouses(): Observable<PublishingHouse[]> {
        return of(this.allPublishingHouses);
    }
    getAlbumById(id: number): Album {
        return this.allAlbums.filter(album => album.id == id)[0]
    }
}
