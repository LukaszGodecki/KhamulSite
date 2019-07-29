import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './components/app-routing.module';
import { HomeModule } from './components/pages/home/home.module';
import { MaterialModule } from './shared/material.module';
import { AlbumsModule } from './components/pages/albums/albums.module';

@NgModule({
  declarations: [
        AppComponent,
        NavMenuComponent,
        FooterComponent
  ],
  imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
      StickyNavModule,
      AppRoutingModule,
      HomeModule,
      AlbumsModule,
      MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
