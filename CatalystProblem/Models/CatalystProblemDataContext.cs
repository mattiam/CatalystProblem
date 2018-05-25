using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CatalystProblem.Models
{

    public class CatalystProblemDataContext : DbContext, ICatalystProblemDataContext
    {
        public CatalystProblemDataContext() : base("name=CatalystProblemDataContext")
        {
        }

        public DbSet<Person> People { get; set; }
    }
}