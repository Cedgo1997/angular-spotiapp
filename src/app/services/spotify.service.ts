import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {

    // HttpHeaders for set authorization for APIs:

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBOeWI_rcOTmoDiwnFWvsfa8IDU7GGxALKqOithsMggw0aCrMP5LRs26ndcykt4ymp-bB0EDgMub0h4ANk',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .pipe( map(data => {
      return data['albums'].items;
    }) )
  }

  getArtist(term: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBOeWI_rcOTmoDiwnFWvsfa8IDU7GGxALKqOithsMggw0aCrMP5LRs26ndcykt4ymp-bB0EDgMub0h4ANk',
    });

    return this.http.get(
      `https://api.spotify.com/v1/search?q=${ term }&type=artist&limit=15`,
      {
        headers,
      }
    ).pipe( map(data => {
      return data['artists'].items;
    }) )
  }
}
