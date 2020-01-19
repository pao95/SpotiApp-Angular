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
          'Authorization': 'Bearer BQDPcn9R9i7DwrgXNy0XUq-C-tedQF9ouhUYDUXikAPjMaM46dpZfT4HhPBWvq7vBzZlsXWnmBDAVJ8Y1XA'
        });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

return this.getQuery('/browse/new-releases')
.pipe(map(data => data['albums'].items
));
  }

  getArtists(termino: string) {

  return this.getQuery(`/search?q=${termino}&type=artist`)
  .pipe(map (data =>  data['artists'].items
  ));

}

getArtist(id: string) {


  return this.getQuery(`/artists/${id}`);

  }

getTopTrack(id: string){
  return this.getQuery(`/artists/${id}/top-tracks?country=US`)
  .pipe(map (data => data['tracks']));
}
}
