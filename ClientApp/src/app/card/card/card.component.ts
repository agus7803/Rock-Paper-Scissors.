import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ScoreComponent } from '../../score/score/score.component';
import { AuthService } from '../../core/service/auth.service';
import { GameService } from '../../core/service/game.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  selected: string = '';
  selected1: string = '';
  player1Name: string = '';
  player2Name: string = '';
  player1Selected: string = '';
  player2Selected: string = '';
  roundCounter = 1;
  gameIds!: string;
  gameId:number = 0;
  @ViewChild(ScoreComponent) resultado!: ScoreComponent;
  constructor(
    private gameService: GameService,
  ) {
    //this.gameIds = this.authService.game.id.toString();
    // this.gameId = this.gameService.getGame().id;
    // console.log(this.gameId);
    this.player1Name = sessionStorage.getItem('player1') || "";
    this.player2Name = sessionStorage.getItem('player2') || "";
    
  }

  ngOnInit(): void {
    this.gameId = Number(sessionStorage.getItem('gameId'));
    console.log("CARD ID",this.gameId);
  }

  userPick1(): void {
    this.player1Selected = this.selected;
    console.log(this.player1Selected);
  }

  userPick2(): void {
    this.player2Selected = this.selected1;
    console.log(this.player2Selected);
  }

  incrementCounter() {
    this.roundCounter++;
    this.resultado.checkResult(this.player1Selected, this.player2Selected, this.gameId);
    setTimeout(() => {
      this.selected = '';
      this.selected1 = '';
      this.player1Selected = this.selected;
      this.player2Selected = this.selected1;
    }, 1000);

  }
}
