import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any ;
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
this.activatedRoute.params.subscribe( params => {
this.artista = this.spotifyService.getArtist(params['idArtist']);

console.log('hola soy el artista' + this.artista);

});

  }

  ngOnInit() {
  }



}
