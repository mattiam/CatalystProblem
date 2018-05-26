using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace CatalystProblem.Models
{
    public interface ICatalystProblemDataContext
    {
        DbSet<Person> People { get; set; }
        void SaveChanges();
        DbEntityEntry<Person> Entry(Person person);
    }
}