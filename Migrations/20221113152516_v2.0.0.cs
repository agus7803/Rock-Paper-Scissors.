using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameOfDrones.Migrations
{
    /// <inheritdoc />
    public partial class v200 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "score2",
                table: "Games",
                newName: "Score2");

            migrationBuilder.RenameColumn(
                name: "score1",
                table: "Games",
                newName: "Score1");

            migrationBuilder.AlterColumn<string>(
                name: "RoundWinner",
                table: "Rounds",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Score2",
                table: "Games",
                newName: "score2");

            migrationBuilder.RenameColumn(
                name: "Score1",
                table: "Games",
                newName: "score1");

            migrationBuilder.AlterColumn<string>(
                name: "RoundWinner",
                table: "Rounds",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);
        }
    }
}
