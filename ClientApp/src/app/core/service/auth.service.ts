import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../models/user';
import { Observable } from 'rxjs';
import { DtPlayer } from '../../models/DtPlayer';
import { Round } from 'src/app/models/Round';
import { DtRound } from '../../models/DtRound';
import { DtMove } from '../../models/DtMove';
import { Move } from 'src/app/models/move';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api;
  constructor(
    private http: HttpClient,
  ) { }

  nuevoJuego(dtPlayer: DtPlayer): Observable<Game> {
    return this.http.post<Game>(`${this.api}`, dtPlayer);
  }

  nuevaRonda(dtRound: DtRound): Observable<Round> {
    return this.http.post<Round>(`${this.api}/nuevoRound`, dtRound);
  }

  nuevoMove(dtMove: DtMove):Observable<Move>{
    return this.http.post<Move>(`${this.api}/nuevoMove`,dtMove);
  }

  getUser(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.api}`);
  }

  getGameByID(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`)
  }

  getRounds(gameId: number): Observable<Round[]> {
    return this.http.get<Round[]>(`${this.api}/${gameId}`);
  }

  getWinner(roundId: number): Observable<Round> {
    return this.http.get<Round>(`${this.api}/${roundId}`);
  }

  getMoves():Observable<Move[]>{
    return this.http.get<Move[]>(`${this.api}/moves`);
  }
}
