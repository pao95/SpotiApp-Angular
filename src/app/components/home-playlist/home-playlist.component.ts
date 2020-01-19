import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-playlist',
  templateUrl: './home-playlist.component.html',
  styleUrls: ['./home-playlist.component.css']
})
export class HomePlaylistComponent implements OnInit {
playlist: any[]=[];
  token:any;
  constructor(private activatedRoute: ActivatedRoute, private sportifyService: SpotifyService) {

        this.sportifyService.getPlaylists().
        subscribe(data => {
          console.log(data);
          this.playlist = data;
        })
      }
  ngOnInit() {
  }

}


