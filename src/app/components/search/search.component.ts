import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  artists: any[] = [];

  constructor(private _spotify: SpotifyService) {}

  search(term: string) {
    console.log(term);
    this._spotify.getArtist(term).subscribe((data:any) => {
      console.log(data);
      this.artists = data;
    });
  }
}
