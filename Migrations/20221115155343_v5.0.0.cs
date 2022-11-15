using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GameOfDrones.Migrations
{
    /// <inheritdoc />
    public partial class v500 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rounds_Moves_MoveP1Id",
                table: "Rounds");

            migrationBuilder.DropForeignKey(
                name: "FK_Rounds_Moves_MoveP2Id",
                table: "Rounds");

            migrationBuilder.AlterColumn<int>(
                name: "MoveP2Id",
                table: "Rounds",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "MoveP1Id",
                table: "Rounds",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Rounds_Moves_MoveP1Id",
                table: "Rounds",
                column: "MoveP1Id",
                principalTable: "Moves",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Rounds_Moves_MoveP2Id",
                table: "Rounds",
                column: "MoveP2Id",
                principalTable: "Moves",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rounds_Moves_MoveP1Id",
                table: "Rounds");

            migrationBuilder.DropForeignKey(
                name: "FK_Rounds_Moves_MoveP2Id",
                table: "Rounds");

            migrationBuilder.AlterColumn<int>(
                name: "MoveP2Id",
                table: "Rounds",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MoveP1Id",
                table: "Rounds",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Rounds_Moves_MoveP1Id",
                table: "Rounds",
                column: "MoveP1Id",
                principalTable: "Moves",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Rounds_Moves_MoveP2Id",
                table: "Rounds",
                column: "MoveP2Id",
                principalTable: "Moves",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
