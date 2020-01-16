import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }



  getQuery(query: string) {
    const url = `https://api.spotify.com/v1${query}`;

    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
          'Authorization': 'Bearer BQDLehGgjLxWR69C1rCcYm45PMqFpXt5-oG_TOq-9zMX7WCOUAQDfBh72CTahnW4WNbfA59ovBxoAd4pbYI'
        });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

return this.getQuery('/browse/new-releases')
.pipe(map(data => data['albums'].items
));
  }

  getArtist(termino: string) {

  return this.getQuery(`/search?q=${termino}&type=artist`)
  .pipe(map (data =>  data['artists'].items
  ));

}
}
