import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { NbaService } from 'src/app/services/nba.service';
import { Favorito } from 'src/app/model/favorito';
import { ModalController } from '@ionic/angular';
import { SecondPage } from '../../modals/second/second.page';



@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.page.html',
  styleUrls: ['./plantilla.page.scss'],
})
export class PlantillaPage implements OnInit {

  jugadores: Jugador[] = [];
  jugador: Jugador;
  isClicked: boolean = false;
  index: number;

  constructor(private nbaService: NbaService, private modalController: ModalController) { }

  ngOnInit() {

    this.jugadores = this.nbaService.getJugadores();
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: SecondPage
    });
    return await modal.present();
  }

  muestraDetalles(id: string) {
    // busca en el array de objetos el titulo que recibe como parametro
        this.index = this.jugadores.findIndex(j => j.nombre == id);
   
        this.jugador = this.nbaService.getJugador(id);
        console.log(this.jugador);
        this.isClicked = !this.isClicked;
      }

  

}
