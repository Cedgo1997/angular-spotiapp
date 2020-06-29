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
        'Bearer BQAyya7PVMihRGlY_4I_-q246lEmb_UiqKIpLNuAs26intfndnP5vro7i60sU3-bSVdaMZOA_Y-jqNONFnI',
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // HttpHeaders for set authorization for APIs:
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtists(term: string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map((data) => data['artists'].items)
    );
  }
  
  getArtist(id:string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe(map(data => data['tracks']));
  }

}
