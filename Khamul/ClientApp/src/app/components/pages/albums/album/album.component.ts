import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../../../../models/album';
import { AlbumsService } from '../albums.service';
import { Picture } from '../../../../models/picture';

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

    viewPicture(pictureId: number): void {
        console.log("wchodze");
        this.selectedPicture = this.album.pictures.filter(picture => picture.id == pictureId)[0];
        let temp = this.selectedPicture;
    }

    closePicture(): void {
        this.selectedPicture = null;
    }
}
