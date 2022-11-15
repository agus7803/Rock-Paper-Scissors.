using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.DataTypes
{
    [Keyless]
    public class DtPlayers
    {
        public string Player1 { get; set; }
        public string Player2 { get; set; }
    }
}
