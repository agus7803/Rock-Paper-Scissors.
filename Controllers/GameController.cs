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

        [HttpGet("{moveId}")]
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

     

        //[HttpGet("winner")]
        //public async Task<IActionResult> GetGameWinner(int gameId)
        //{
           
        //}

        //public IEnumerable<Partida> Get()
        //{
        //    return Enumerable.Range(1, 5).Select(index => new Partida
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = Random.Shared.Next(-20, 55),
        //        Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}

       

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
        public async Task<IActionResult> NuevaRonda(DtRound dtRonda)
        {
            

            try
            {
               
                var move1 = _dBContext.Moves.Where(m=> m.Name == dtRonda.MoveP1).First();
                var move2 = _dBContext.Moves.First(m => m.Name == dtRonda.MoveP2);
                var game = _dBContext.Games.FirstOrDefault(g => g.Id == dtRonda.gameId);
                var endGame = false;
                var round = new Round()
                {
                    GameId = dtRonda.gameId,
                    Game = game,
                    MoveP1 = move1,
                    MoveP2 = move2,
                    RoundWinner = 0,
                };
                _dBContext.Rounds.Add(round);
                await _dBContext.SaveChangesAsync();
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
                    endGame = true;
                }
                else if(round.Game.Score2 == 3)
                {
                    round.Game.Winner = 2;
                    endGame = true;
                }
                return CreatedAtAction("GetRound", new { id = round.Id }, round);
                
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
    }
}