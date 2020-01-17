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
          'Authorization': 'Bearer BQCHTiCykITwa_nuys6O6DmUY7qHcbmFmVDofI83OxcCpCIma2nurKlEm2noIdaSD6nrSo0ycXRUAi6cdTM'
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
  console.log('hola soy el id' +  id);

  console.log('hola a ver si adno' + this.getQuery(`/artists/${id}`)
  .pipe(map (data => data)));

  return this.getQuery(`/artists/${id}`)
    .pipe(map (data => data));

  }
}
