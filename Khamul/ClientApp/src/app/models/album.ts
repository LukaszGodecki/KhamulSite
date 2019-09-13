import { Picture } from "./picture";
import { Player } from "./player";
import { PublishingHouse } from "./publishing-house";
import { AlbumType } from "./album-type";

export class Album {
    id: number;
    pictures: Picture[];
    title: string;
    description: string;
    dateFrom: Date;
    dateTo: Date;
    players: Player[];
    publishingHouse: PublishingHouse;
    albumTypes: AlbumType[];
    albumMiniaturePicture: Picture;


    constructor() {
        this.id = null;
        this.pictures = [];
        this.title = "";
        this.description = "";
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.players = [];
        this.publishingHouse = new PublishingHouse();
        this.albumTypes = [];
        this.albumMiniaturePicture = new Picture();
    }
}
