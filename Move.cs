using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace GameOfDrones
{
    public class Move
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Kill { get; set; }
    }
}
