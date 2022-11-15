import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../models/user';
import { Observable } from 'rxjs';
import { DtPlayer } from '../../models/DtPlayer';
import { Round } from 'src/app/models/Round';
import { DtRound } from '../../models/DtRound';
import { GameService } from './game.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string = environment.api;
  game!: Game;
  constructor(
    private http: HttpClient,
    private gameService:GameService,
  ) { }

  nuevoJuego(dtPlayer: DtPlayer):Observable<Game> {
    //return 
    return this.http.post<Game>(`${this.api}`, dtPlayer)//.subscribe(gameResult=>{
      //this.gameService.setGame(gameResult)
    //});
  }

  nuevaRonda(dtRound: DtRound): Observable<Round> {
    return this.http.post<Round>(`${this.api}/nuevoRound`, dtRound);
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

  getRoundWinner(roundId: number): Observable<number> {
    return this.http.get<number>(`${this.api}/${roundId}`);
  }

  // getRoundWinner(roundId:number):Observable<string>{
  //   return this.http.get<string>(`${this.api}/Round/${roundId}`);
  // }

  // getGameWinner(gameId:number):Observable<string>{
  //   return this.http.get<string>(`${this.api}/Games/${gameId}`);
  // }
}
