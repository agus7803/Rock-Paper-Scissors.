import { Injectable } from '@angular/core';
import { Game } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game!: Game;//={
    // id:0,
    // Player1:'',
    // Player2:'',
    // score1:0,
    // score2:0,
    // Winner:0,
  //};
  constructor() { }

  setGame(gameNuevo:Game){
    this.game = gameNuevo;
  }

  getGame(){
    return this.game;
  }
}
