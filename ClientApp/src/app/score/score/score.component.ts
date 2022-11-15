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
    private router:Router,
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
    console.log("CHECK ID", gameId);
    const dtRound: DtRound = {
      gameId: gameId,
      MoveP1: player1select,
      MoveP2: player2select,
    }
    console.log("DtRound",dtRound)
    this.authService.nuevaRonda(dtRound).subscribe(data => {
      console.log(data);
      if (data.Game.Winner == 0) {
        if (data.RoundWinner == 1) {
          this.win();
        } else if (data.RoundWinner == 2) {
          this.lose()
        } else {
          alert("Empate");
        }
      } else {
        if (data.Game.Winner == 1) {
          alert(`El jugador ${data.Game.Player1} gana el juego`);
          this.router.navigate(['/login']);
        } else {
          alert(`El jugador ${data.Game.Player2} gana el juego`);
          this.router.navigate(['/login']);
        }
      }
    });


  }

}
