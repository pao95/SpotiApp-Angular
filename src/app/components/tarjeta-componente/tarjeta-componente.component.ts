import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta-componente',
  templateUrl: './tarjeta-componente.component.html',
  styleUrls: ['./tarjeta-componente.component.css']
})
export class TarjetaComponenteComponent implements OnInit {


  @Input() items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }


  verArtista(item: any ) {

let idArtist: any;

if (item.type === 'album') {
        idArtist = item.artists[0].id;
    } else {
      idArtist = item.id;
    }
this.router.navigate(['/artista', idArtist ]);
  }


}
