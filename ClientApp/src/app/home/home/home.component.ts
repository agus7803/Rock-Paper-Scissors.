import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { NewMoveComponent } from '../../newMove/new-move/new-move.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private auth: AuthService,
    private router: Router,
    //private store: Store<CursoState>,
    //private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  jugar() {
    this.router.navigate(['/card'])
  }

  agregar() {
    const dialogRef = this.dialog.open(NewMoveComponent, {
      width: '350px',
      data: [{
        id: '',
        curso: '',
        salon: ''
      }],
    });
  }


}
