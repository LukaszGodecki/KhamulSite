export class Picture {
    id: number;
    linkToPicture: string;
    linkToMiniature: string;
    albumID: number;

    constructor() {
        this.id = null;
        this.linkToPicture = "";
        this.linkToMiniature = "";
        this.albumID = null;
    }
}
