using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace CatalystProblem.Models
{
    public class CatalystProblemDataAdapter: ICatalystProblemDataContext
    {
        private readonly CatalystProblemDataContext _context;

        public CatalystProblemDataAdapter(CatalystProblemDataContext context)
        {
            _context = context;
        }

        public DbSet<Person> People
        {
            get => _context.People;
            set => _context.People = value;
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
            
        }

        public DbEntityEntry<Person> Entry(Person person)
        {
            return _context.Entry(person);
        }
    }
}