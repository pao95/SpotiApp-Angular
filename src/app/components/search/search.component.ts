import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any [] = [];
  loading: boolean;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }


  buscarArtista(termino: string) {
    this.loading = true;
  //  Lo siguiente seria para guardar el valor en mayusculas
  //  termino = termino.toUpperCase();
  //  console.log(termino);
    this.spotifyService.getArtists(termino).subscribe(
    (data: any) => {
      this.artistas = data;
      this.loading = false;
      console.log(data);
    }
  );

  }


}
