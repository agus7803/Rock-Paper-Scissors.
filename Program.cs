using GameOfDrones;
using GameOfDrones.DataBase;
using Microsoft.EntityFrameworkCore;

var AllowSpecificOrigins = "AllowWebapp";
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllers();
builder.Services.AddDbContext<DBContext>(options => options.UseSqlServer(connectionString));
//builder.Services.AddTransient<GameService>();
builder.Services.AddCors(
    options =>
    {
        options.AddPolicy(name: AllowSpecificOrigins,
            policy =>
            {
                policy
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
    }
);


var app = builder.Build();

using (var service = app.Services.CreateScope())
{
    var context = service.ServiceProvider.GetService<DBContext>();

    if (!context.Moves.Any())
    {
        context.Moves.Add(new Move() { Name = "rock", Kill = "scissors" });

        context.Moves.Add(new Move() { Name = "paper", Kill = "rock" });

        context.Moves.Add(new Move() { Name = "scissors", Kill = "paper" });

        context.Moves.Add(new Move() { Name = "dasda", Kill="dqwew"});

        await context.SaveChangesAsync();
    }
}

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseCors(AllowSpecificOrigins);
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();