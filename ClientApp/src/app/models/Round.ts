import { Move } from './move';
import { Game } from './user';

export class Round {
    id!: number;
    gameId!: number;
    Game!: Game;
    RoundWinner!: number;
    MoveP1!: Move;
    MoveP2!: Move;
}
