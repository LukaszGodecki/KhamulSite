import { Injectable } from '@angular/core';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
    private allAlbums: Album[] = [
        {
            id: 1,
            pictures: [
                { id: 1, linkToPicture: "", linkToMiniature: "", albumID: 1 },
                { id: 2, linkToPicture: "", linkToMiniature: "", albumID: 1 },
                { id: 3, linkToPicture: "", linkToMiniature: "", albumID: 1 },
                { id: 4, linkToPicture: "", linkToMiniature: "", albumID: 1 },
                { id: 5, linkToPicture: "", linkToMiniature: "", albumID: 1 },
                { id: 6, linkToPicture: "", linkToMiniature: "", albumID: 1 },
            ],
            title: "Album nr 1",
            description: "",
            shortDescription: "",
            dateFrom: new Date(),
            dateTo: new Date(),
            players: [
                { id: 1, name: "Khamul" },
                { id: 2, name: "Namek" }
            ],
            publishingHouse: { id: 1, name: "GMT" },
            albumTypes: [
                { id: 1, name: "Album zdjêæ" },
                { id: 2, name: "Relacja z rozgrywki" },
            ],
            albumMiniaturePicture: {
                id: 1, linkToPicture: "", linkToMiniature: "", albumID: 1
            }
        },
    ]
  constructor() { }
}
