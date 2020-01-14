import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }




  getNewReleases() {
    console.log('fola');
    const headers = new HttpHeaders({
// tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer BQBGtZz3saY_76q7qaUyD93vWXs9Gpy3D7Uzl_9GIVkVxhERNKQ-TBpgUtTB3vKEzMBPLEAY9Neqj8zHbHI'
  });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
