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
          'Authorization': 'Bearer BQDmQgCHV-LPcvNaJVHcJkQu5cFNIPkVGmFJcz8l0_FXFgYm-NEsL85uaXSLHowd9IUt2CMhi9DdPNygcismYq-UJ_QTe3x9g0tfamjnFPJtJZTM0O2d5svrM3mPNaO7MgJYVudE52e7keLeJHxCwV7IJXuYloIm9Ed25NtsLjlJKkXqd4CZ6E5uEOD2Gf5ao_Rqk0n3suCyVt-hnH709-y-PvoN6JmtfWx7',
          
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

getPlaylists(){
      return this.getQuery(`/me/playlists?limit=10&offset=5`)
      .pipe(map (data => data['items']));

}

getTracksPlaylist(id: string){
return this.getQuery(`/playlists/${id}/tracks`)
.pipe(map (data => data['items']));

}
}
