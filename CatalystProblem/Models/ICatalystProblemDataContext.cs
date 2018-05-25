using System.Data.Entity;

namespace CatalystProblem.Models
{
    public interface ICatalystProblemDataContext
    {
        DbSet<Person> People { get; set; }
    }
}