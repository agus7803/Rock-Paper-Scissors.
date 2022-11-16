import { Move } from './move';
import { Game } from './user';

export class Round {
    id!: number;
    gameId!: number;
    game!: Game;
    roundWinner!: number;
    moveP1!: Move;
    moveP2!: Move;
}
