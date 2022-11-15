using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GameOfDrones
{
    public class Round
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [ForeignKey("Game")]
        public int GameId { get; set; }
        public Game Game { get; set; }
        public int RoundWinner { get; set; }
        public Move? MoveP1 { get; set; }
        public Move? MoveP2 { get; set; }
    }
}
