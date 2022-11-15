using Microsoft.EntityFrameworkCore;

namespace GameOfDrones.DataBase
{
    public class DBContext: DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) { }

        public DbSet<Game> Games { get; set; }
        public DbSet<Move> Moves { get; set; }
        public DbSet<Round> Rounds { get; set; }


    }
}
