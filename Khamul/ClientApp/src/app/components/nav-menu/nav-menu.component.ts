import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
    private isSearchPanelVisible: boolean = false;

    showSearchPanel(): void {
        this.isSearchPanelVisible = !this.isSearchPanelVisible;
    }

}
