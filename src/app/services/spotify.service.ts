import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBjpqfmX4UFJCpXm0MS8MVww7aR0gZflES7McD8urettO6dgBgAIPVVk8nSz2o-CTfXEWTNg7qofRWk274',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // HttpHeaders for set authorization for APIs:
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtist(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
}
