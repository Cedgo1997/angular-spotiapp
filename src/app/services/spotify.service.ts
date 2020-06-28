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
        'Bearer BQBWdMx8Ai6CFsqzmbbDfBPYbq9MO6My3H0j7hCZzu8JLzA0u0Q6aifcVH7x67jumppALHgvgDG7O4lE4Og',
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
