import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { DtPlayer } from '../../models/DtPlayer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  logIn: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {
    this.formulario = fb.group({
      player1: new FormControl('', [Validators.required]),
      player2: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  login() {
    const dtPlayer: DtPlayer = {
      Player1: this.formulario.value.player1,
      Player2: this.formulario.value.player2,
    }
    this.authService.nuevoJuego(dtPlayer).subscribe(game => {
      console.log(game);
      console.log("11111", game.id);
      sessionStorage.setItem('player1', dtPlayer.Player1);
      sessionStorage.setItem('player2', dtPlayer.Player2);
      console.log("2222", game.id);
      sessionStorage.setItem('gameId', game.id.toString());
      console.log("LOGIN ID", game.id.toString());

     });
    this.router.navigate(['/card'])
  }
}
