import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { NbaService } from 'src/app/services/nba.service';
import { Favorito } from 'src/app/model/favorito';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.page.html',
  styleUrls: ['./guardar.page.scss'],
})
export class GuardarPage implements OnInit {

  favorito: Favorito = {title: ''};
  favoritos: Favorito[] = [];
  jugadores: Jugador[] = [];
  jugador: Jugador;

  title: string = '';

  constructor(private nbaService: NbaService,
    private route: ActivatedRoute, private router: Router, 
    private alertController: AlertController) { }

    

  ngOnInit() {


    this.jugadores = this.nbaService.getJugadores();
        this.jugadores = this.nbaService.getJugadores();

    
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.favorito = this.nbaService.getFavorito(+id);
    }
  }

  ionViewWillEnter() {
    this.nbaService.getFavoritos().then(
      data => this.favoritos = data
    );
  }

  saveFavorito() {
    this.nbaService.saveFavorito(this.favorito);
   
  }

  deleteFavorito(id: number) {
    this.nbaService.deleteFavorito(id).then(
      () => this.nbaService.getFavoritos().then(
        data => this.favoritos = data
      )
    );
    
  }

  async presentAlertConfirm(id: number, title: string) {
    console.log('alerta');
    const alert = await this.alertController.create({
      header: 'Borrar tarea',
      message: `¿Estás seguro que quieres borrar la tarea <strong> ${title}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Aceptar',
          handler: () => {
            this.deleteFavorito(id);
          }
        }
      ]
    });

    await alert.present();
  }

}
