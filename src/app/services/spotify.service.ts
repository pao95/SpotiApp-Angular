import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }




  getNewReleases() {

    const headers = new HttpHeaders({
// tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer BQDnMpNxvxLpb0Me29eEvzM_aXAKoBDzdGYohrpDQbZT50UDZ0ohpn8FLT3M7EzNBpamS_TQ-9OME4WqbTg'
  });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(termino: string) {

    const headers = new HttpHeaders({
// tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer BQDnMpNxvxLpb0Me29eEvzM_aXAKoBDzdGYohrpDQbZT50UDZ0ohpn8FLT3M7EzNBpamS_TQ-9OME4WqbTg'
  });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers });
  }
}
