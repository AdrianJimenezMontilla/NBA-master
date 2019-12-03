import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';
import { Favorito } from '../model/favorito';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  // array de objetos
  jugadores: Jugador[];
  favoritos: Favorito[];

  constructor(private storage: Storage) {

    this.getFavoritos().then(
      data => this.favoritos = data == null ?  [] : data
    );

    this.jugadores = [
      {
        "nombre": "LeBrom James",
        "edad": "34",
        "altura": "2,03",
        "peso": "113kg",
        "posicion": "Base",
        "equipo": "Los Angeles Lakers",
        "foto": "LeBron James.png"
      },
      {
        "nombre": "Quinn Cook",
        "edad": "26",
        "altura": "1,88",
        "peso": "82kg",
        "posicion": "Base",
        "equipo": "Los Angeles Lakers",
        "foto": "Quin.png"
      },
      {
        "nombre": "Rajon Rondo",
        "edad": "33",
        "altura": "1,85",
        "peso": "82kg",
        "posicion": "Base",
        "equipo": "Los Angeles Lakers",
        "foto": "rajon.png"
      },
      {
        "nombre": "Alex Caruso",
        "edad": "25",
        "altura": "1,96",
        "peso": "84kg",
        "posicion": "Escolta",
        "equipo": "Los Angeles Lakers",
        "foto": "alex.png"
      },
      {
        "nombre": "Danny Green",
        "edad": "32",
        "altura": "1,98",
        "peso": "98kg",
        "posicion": "Alero",
        "equipo": "Los Angeles Lakers",
        "foto": "danny.png"
      },
      {
        "nombre": "Kyle Kuzma",
        "edad": "24",
        "altura": "2,06",
        "peso": "100kg",
        "posicion": "Ala-Pivot",
        "equipo": "Los Angeles Lakers",
        "foto": "kyle.png"
      },
      {
        "nombre": "Kyle Kuzma",
        "edad": "24",
        "altura": "2,06",
        "peso": "100kg",
        "posicion": "Ala-Pivot",
        "equipo": "Chicago Bulls",
        "foto": "danny.png"
      }
      

      
    ]
  }

  public getFavoritos(): Promise<Favorito[]> {
    return this.storage.get('favoritos');
  }

  public getFavorito(id: number): Favorito {
    return this.favoritos.filter(t => t.id == id)[0];
  }

  public saveFavorito(t: Favorito): Promise<boolean> {
    if (t.id == undefined) {

      const maxId = this.favoritos.reduce((max, t) => t.id > max? t.id : max, -1);
      const newFavorito = {id: maxId + 1, title: t.title};
      this.favoritos.push(newFavorito);
    } else {
 
      this.deleteFavorito(t.id);
      this.favoritos.push(t);
      this.favoritos.sort((t1, t2) => t1.id < t2.id ? -1 : 1);
    }
    return this.storage.set('favoritos', this.favoritos);
  }
  public deleteFavorito(id: number): Promise<boolean> {
    this.favoritos = this.favoritos.filter(t => t.id != id);
    return this.storage.set('favoritos', this.favoritos);
  }

  getJugadores(): Jugador[] {
    return this.jugadores;
  }

  getJugador(nombre: string) {
    return this.jugadores.filter(j => j.nombre == nombre)[0];
  }
   }

