import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { NbaService } from 'src/app/services/nba.service';

@Component({
  selector: 'app-plantilla-chicago',
  templateUrl: './plantilla-chicago.page.html',
  styleUrls: ['./plantilla-chicago.page.scss'],
})
export class PlantillaChicagoPage implements OnInit {

  jugadores: Jugador[] = [];
  jugador: Jugador;
  isClicked: boolean = false;
  index: number;

  constructor(private nbaService: NbaService) { }

  ngOnInit() {

    this.jugadores = this.nbaService.getJugadores();
  }

  muestraDetalles(id: string) {
    // busca en el array de objetos el titulo que recibe como parametro
        this.index = this.jugadores.findIndex(j => j.nombre == id);
    // te da el titulo de la pelicula que recibe 
        this.jugador = this.nbaService.getJugador(id);
        console.log(this.jugador);
        this.isClicked = !this.isClicked;
      }

}
