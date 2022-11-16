using GameOfDrones.DataBase;
using GameOfDrones.DataTypes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };
        
        private readonly DBContext _dBContext;

        public GameController(DBContext dBContext)
        {
            _dBContext = dBContext;
        }
       

        [HttpGet]
        public async Task<IActionResult> GetGame()
        {
            try
            {
                var listaGames = await _dBContext.Games.ToListAsync();
                return Ok(listaGames);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGameById(int id)
        {
            try
            {
                var game = await _dBContext.Games.FindAsync(id);
                return Ok(game);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
       
        [HttpGet("{gameId}")]
        public async Task<IActionResult> GetRounds(int gameId)
        {
            try
            {
                var game = await _dBContext.Games.FindAsync(gameId);
                var listRounds = game.Rounds.ToList();
                return Ok(listRounds);
            }catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("moves")]
        public async Task<IActionResult> GetMoves()
        {
            try
            {
                var listMoves = await _dBContext.Moves.ToListAsync();
                return Ok(listMoves);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Game>> NuevaPartida(DtPlayers dtPlayers)
        {
            try
            {
                Game game = new Game()
                {
                    Player1 = dtPlayers.Player1,
                    Player2 = dtPlayers.Player2,
                    Score1 = 0,
                    Score2 = 0,
                    Winner = 0,
                };
                _dBContext.Games.Add(game);
                await _dBContext.SaveChangesAsync();
                Console.WriteLine("El Id es");
                Console.WriteLine(game.Id);
                return CreatedAtAction("Get",new {id=game.Id},game);

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        [HttpPost("nuevoRound")]
        public async Task<ActionResult<Round>> NuevaRonda(DtRound dtRonda)
        {
            

            try
            {
                Move move1 = _dBContext.Moves.First(m=>m.Name == dtRonda.MoveP1);
                Move move2 = _dBContext.Moves.First(m => m.Name == dtRonda.MoveP2);
                Game game = _dBContext.Games.First(g => g.Id == dtRonda.gameId);
                Round round = new Round()
                {
                    GameId = dtRonda.gameId,
                    Game = game,
                    RoundWinner = 0,
                    MoveP1 = move1,
                    MoveP2 = move2,

                };
                _dBContext.Rounds.Add(round);
                game.Rounds.Add(round);


                if (round.MoveP1.Name == round.MoveP2.Kill)
                {
                    round.RoundWinner = 2;
                    round.Game.Score2++;
                }
                else if (round.MoveP2.Name == round.MoveP1.Kill)
                {
                    round.RoundWinner = 1;
                    round.Game.Score1++;
                }
                if (round.Game.Score1 == 3)
                {
                    round.Game.Winner = 1;
                   
                }
                else if(round.Game.Score2 == 3)
                {
                    round.Game.Winner = 2;
                    
                }
                await _dBContext.SaveChangesAsync();
                return CreatedAtAction("GetRound", new { id = round.Id }, round);
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("nuevoMove")]
        public async Task<IActionResult> NuevoMove(DtMove dtMove)
        {
            try
            {
                Move move = new Move()
                {
                    Name = dtMove.Name,
                    Kill = dtMove.Kill,
                };
                _dBContext.Moves.Add(move);
                await _dBContext.SaveChangesAsync();
                return CreatedAtAction("GetMove", new { id = move.Id }, move);

            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}