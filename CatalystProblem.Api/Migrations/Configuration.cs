using CatalystProblem.Api.Models;

namespace CatalystProblem.Api.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<CatalystProblem.Api.Models.CatalystProblemDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(CatalystProblem.Api.Models.CatalystProblemDataContext context)
        {
            context.People.AddOrUpdate(x=>x.PersonId,
                new Person
                {
                    PersonId = 1,
                    Name = "Yoda",
                    Address = "Jungle Planet, Dagobah System",
                    Age = 900,
                    Interests = "training Luke, defeating Sith, wielding green lightsabers",
                    AvatarUrl = "Yoda.png",
                    InsertDate = DateTime.Now
                },
                new Person
                {
                    PersonId = 1,
                    Name = "Luke Skywalker",
                    Address = "Tatooine, Galaxy far, far away",
                    Age = 19,
                    Interests = "turning Sith good, wielding blue lightsabers",
                    AvatarUrl = "luke.jpg",
                    InsertDate = DateTime.Now
                }
                );
        }
    }
}
