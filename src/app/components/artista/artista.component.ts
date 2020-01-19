import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.css"]
})
export class ArtistaComponent implements OnInit {
  artista: any;
  topTracks: any[]=[];

  cancion = 'https://open.spotify.com/embed';
  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params["id"]);
      this.getTopTracks(params['id']);
    });
  }

  ngOnInit() {}

  getArtista(id: string) {
    this.spotifyService.getArtist(id).subscribe((art: any) => {
      this.artista = art;
    });
  }

  getTopTracks(id: string){
      this.spotifyService.getTopTrack(id)
      .subscribe(data =>{
        this.topTracks= data;
      console.log(this.topTracks)
      }
        )
  }
}
