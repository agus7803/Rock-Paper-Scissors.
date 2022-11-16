import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Move } from 'src/app/models/move';
import { ScoreComponent } from '../../score/score/score.component';
import { AuthService } from '../../core/service/auth.service';


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
  roundCounter: number = 1;
  gameId: number = 0;
  moves!: Move[];
  @ViewChild(ScoreComponent) resultado!: ScoreComponent;
  constructor(
    private authService: AuthService,
  ) {
    this.player1Name = sessionStorage.getItem('player1') || "";
    this.player2Name = sessionStorage.getItem('player2') || "";
    this.authService.getMoves().subscribe((data) => {
      this.moves = data;
    })
  }

  ngOnInit(): void {
    this.gameId = Number(sessionStorage.getItem('gameId'));
  }

  userPick1(): void {
    this.player1Selected = this.selected;
  }

  userPick2(): void {
    this.player2Selected = this.selected1;
    this.resultado.checkResult(this.player1Selected, this.player2Selected, this.gameId);
  }

  incrementCounter() {
    this.roundCounter++;
    setTimeout(() => {
      this.selected = '';
      this.selected1 = '';
      this.player1Selected = this.selected;
      this.player2Selected = this.selected1;
    }, 1000);
  }
}
