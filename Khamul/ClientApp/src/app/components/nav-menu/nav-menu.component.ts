import { Component } from '@angular/core';
import { AlbumsService } from '../pages/albums/albums.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {  

    constructor(public albumsService: AlbumsService, public router: Router) { }

    showSearchPanel(): void {
        this.albumsService.isSearchPanelVisible = !this.albumsService.isSearchPanelVisible;
    }
}
