import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../../../models/album';
import { AlbumsService } from '../albums.service';
import { AlbumTypeEnum } from '../../../../models/album-type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.css'],
    providers: [DatePipe]
})
export class AlbumCardComponent implements OnInit {

    @Input() album: Album;
    albumTypeEnum = AlbumTypeEnum;
    constructor(private albumService: AlbumsService, private datepipe: DatePipe) { }

    isAlbumProperType(currentAlbum: Album, albumTypeId: number): boolean {
        return currentAlbum.albumTypes.some(item => item.id === albumTypeId)
    }
    getAlbumTypeName(albumTypeId: number): string {
        return this.albumService.allAlbumTypes.find(item => item.id == albumTypeId).name;
    }
    getAlbumDate(currentAlbum: Album): string {
        if (currentAlbum.dateFrom.getTime() == currentAlbum.dateTo.getTime()) {
            return this.datepipe.transform(currentAlbum.dateFrom, 'dd/MM/yyyy');
        } else {
            return this.datepipe.transform(currentAlbum.dateFrom, 'dd/MM/yyyy') + " - " + this.datepipe.transform(currentAlbum.dateTo, 'dd/MM/yyyy');
        }
    }
    getPlayers(currentAlbum: Album): string {
        let tempString = "";
        for (let i = 0; i < currentAlbum.players.length; i++) {
            tempString += currentAlbum.players[i].name;
            if (i != currentAlbum.players.length - 1) {
                tempString += " vs ";
            }
        }
        if (tempString == "") {
            return "Brak graczy"
        }
        return tempString;
    }    
    ngOnInit() {

  }
}
