import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { DtRound } from '../../models/DtRound';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  player1Score = 0;
  player2Score = 0;
  player1Selected!: string;
  player2Selected!: string;
  roundWinner!: number;
  @Input() player1Weapon!: string;
  @Input() player2Weapon!: string;


  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  clearField() {
    setTimeout(() => {
      this.player1Selected = '';
      this.player2Selected = '';
    }, 1500);
  }

  win() {
    this.player1Score++;
    this.clearField();
  }

  lose() {
    this.player2Score++;
    this.clearField();
  }



  checkResult(player1select: string, player2select: string, gameId: number) {
    const dtRound: DtRound = {
      gameId: gameId,
      MoveP1: player1select,
      MoveP2: player2select,
    }
    console.log(dtRound);
    this.authService.nuevaRonda(dtRound).subscribe(data => {
      if (data.game.winner == 0) {
        if (data.roundWinner == 1) {
          this.win();
        } else if (data.roundWinner == 2) {
          this.lose()
        } else {
          alert("Empate");
        }
      } else {
        if (data.game.winner == 1) {
          alert(`El jugador ${data.game.player1} gana el juego`);
          this.router.navigate(['']);
        } else {
          alert(`El jugador ${data.game.player2} gana el juego`);
          this.router.navigate(['']);
        }
      }
    });


  }

}
