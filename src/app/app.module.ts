import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MoviesBoxComponent } from './movie-box/movie-box.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDbService } from './movie-db.service';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FavoritesComponent,
    MoviesBoxComponent,
    LoaderComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
