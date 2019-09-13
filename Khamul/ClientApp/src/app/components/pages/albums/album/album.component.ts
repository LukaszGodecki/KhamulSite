import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../../../models/album';
import { AlbumsService } from '../albums.service';
import { Picture } from '../../../../models/picture';
import { AlbumTypeEnum } from '../../../../models/album-type';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

    album: Album;
    selectedPicture: Picture;

    constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) { }

    ngOnInit() {
        let id: number = +this.route.snapshot.paramMap.get('id');
        this.album = this.albumsService.getAlbumById(id);
    }

    isDateEquals(currentAlbum: Album): boolean {
        if (currentAlbum.dateFrom.getTime() == currentAlbum.dateTo.getTime()) {
            return true;
        } else {
            return false;
        }
    }

    hasAlbumReport(): boolean {
        return this.album.albumTypes.some(item => item.id === AlbumTypeEnum.RELACJA_Z_ROZGRYWKI)
    }

    viewPicture(pictureId: number): void {
        this.selectedPicture = this.album.pictures.filter(picture => picture.id == pictureId)[0];
    }
    changePicture(modify: number) {
        let modifiedIndex = this.album.pictures.findIndex(picture => picture.id == this.selectedPicture.id) + modify;
        if (modifiedIndex == this.album.pictures.length) {
            this.selectedPicture = this.album.pictures[0];
        } else if (modifiedIndex < 0) {
            this.selectedPicture = this.album.pictures[this.album.pictures.length-1];
        } else {
            this.selectedPicture = this.album.pictures[modifiedIndex];
        }
    }
    closePicture(): void {
        this.selectedPicture = null;
    }
}
