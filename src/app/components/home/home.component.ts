import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent {
  newSongs: any[] = [];
  error:boolean;
  errorMessage:any;
  loading: boolean;

  constructor(private _spotify: SpotifyService) {
    this.error = false;
    this.loading = true;

    this._spotify.getNewReleases().subscribe((data: any) => {
      this.newSongs = data;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = err.error.error.message;
      
    });
  }
}
