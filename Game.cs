using System.ComponentModel.DataAnnotations;

namespace GameOfDrones
{
    public class Game
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Player1 { get; set; }
        [Required]
        public string Player2 { get; set; }
        public int? Winner { get; set; }
        public List<Round>? Rounds { get; set; }
        public int Score1 { get; set; }
        public int Score2 { get; set; }
        
        
    }
}