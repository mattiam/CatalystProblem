using CatalystProblem.Models;
using System;
using System.Data.Entity.Migrations;

namespace CatalystProblem.Migrations
{

    internal sealed class Configuration : DbMigrationsConfiguration<CatalystProblemDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(CatalystProblemDataContext context)
        {

            context.People.AddOrUpdate(x => x.PersonId,
                new Person
                {
                    PersonId = 1,
                    FirstName = "Minch",
                    LastName = "Yoda",
                    Address = "Jungle Planet, Dagobah System",
                    Age = 900,
                    Interests = "training Luke, defeating Sith, wielding green lightsabers",
                    AvatarUrl = "https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png",
                    InsertDate = DateTime.Now
                },
                new Person
                {
                    PersonId = 1,
                    FirstName = "Luke",
                    LastName = "Skywalker",
                    Address = "Tatooine, Galaxy far, far away",
                    Age = 19,
                    Interests = "turning Sith good, wielding blue lightsabers",
                    AvatarUrl = "https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png",
                    InsertDate = DateTime.Now
                }
            );
        }
    }
}
