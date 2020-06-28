import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA_99z4qXxKqdqKLxC-mUio0zi6vf_eBAqv7J7DITnEzmJBkCIjLkpnGzilZDzyoBzMiveba6Q3rRqyacQ',
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {
      headers,
    });
  }
}
