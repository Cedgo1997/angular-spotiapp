import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];
  loading: boolean;

  constructor(private _spotify: SpotifyService) {}

  search(term: string) {
    this.loading = true;
    console.log(term);
    this._spotify.getArtists(term).subscribe((data: any) => {
      console.log(data);
      this.artists = data;
      this.loading = false;
    });
  }
}
