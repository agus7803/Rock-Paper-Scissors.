using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.DataTypes
{
    [Keyless]
    public class DtMove
    {
        public string Name { get; set; }
        public string Kill { get; set; }

    }
}
