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
  moves1:string[] =[];
  @ViewChild(ScoreComponent) resultado!: ScoreComponent;
  constructor(
    private authService: AuthService,
  ) {
    this.player1Name = sessionStorage.getItem('player1') || "";
    this.player2Name = sessionStorage.getItem('player2') || "";
    this.authService.getMoves().subscribe((data) => {
      this.moves = data;
      data.forEach(element=>{
        if(this.moves1.indexOf(element.name) == -1){
          this.moves1.push(element.name);
        }
        if(this.moves1.indexOf(element.kill) == -1){
          this.moves1.push(element.kill);
        }
      })
    })
  }

  ngOnInit(): void {
    this.gameId = Number(sessionStorage.getItem('gameId'));
  }

  userPick1(): void {
    this.player1Selected = this.selected;
    console.log(this.player1Selected);
  }

  userPick2(): void {
    this.player2Selected = this.selected1;
    console.log(this.player2Selected);
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
