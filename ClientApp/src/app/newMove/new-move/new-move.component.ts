import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DtMove } from 'src/app/models/DtMove';
import { Move } from 'src/app/models/move';
import { AuthService } from '../../core/service/auth.service';

@Component({
  selector: 'app-new-move',
  templateUrl: './new-move.component.html',
  styleUrls: ['./new-move.component.css']
})
export class NewMoveComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewMoveComponent>,
    private authService: AuthService,
  ) { 
    this.formulario = this.fb.group({
      nombre: new FormControl('',[Validators.required]),
      gana: new FormControl('',[Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  cerrar(){
    this.dialogRef.close();
  }

  agregar(){
    const dtMove: DtMove = {
      Name: this.formulario.value.nombre,
      Kill: this.formulario.value.gana,
    }
    this.dialogRef.close(this.formulario.value);
    console.log(dtMove);
    this.authService.nuevoMove(dtMove).subscribe((move) =>{
      alert(`${move.name} se agrego correctamente`);
    })
  }
}
