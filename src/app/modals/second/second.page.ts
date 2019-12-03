import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Jugador } from 'src/app/model/jugador';
import { NbaService } from 'src/app/services/nba.service';
import { Favorito } from 'src/app/model/favorito';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  favorito: Favorito = {title: ''};

  constructor(private modalController: ModalController,
    private nbaService: NbaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.favorito = this.nbaService.getFavorito(+id);
    }
  }

  saveFavorito() {
    this.nbaService.saveFavorito(this.favorito);
  }

  async closeModal() {
    await this.modalController.dismiss();

  }

}
