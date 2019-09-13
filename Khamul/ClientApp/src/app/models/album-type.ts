export class AlbumType {
    id: number;
    name: string;

    constructor() {
        this.id = null;
        this.name = "";
    }
}

export enum AlbumTypeEnum {
    ALBUM_ZDJEC = 1,
    RELACJA_Z_ROZGRYWKI = 2,
    RELACJA_Z_KONWENTU = 3
}
