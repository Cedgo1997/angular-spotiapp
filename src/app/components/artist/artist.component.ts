import { Component, OnInit } from '@angular/core';

// Import to use id's as a param

import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [],
})
export class ArtistComponent {

  artist:any = {};
  loading:boolean;

  constructor(
    private _router: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;
    this._router.params.subscribe((params) => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((artist) => {
      console.log(artist);
      this.artist = artist;
      this.loading=false;
    });
  }
}
