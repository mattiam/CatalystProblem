using System.Collections.Generic;
using System.Linq;
using CatalystProblem.Models;

namespace CatalystProblem.Business
{
    public class CatalystProblemBusinessLogic : ICatalystProblemBusinessLogic
    {
        private ICatalystProblemDataContext _context;
        public CatalystProblemBusinessLogic(ICatalystProblemDataContext context)
        {
            _context = context;
        }
        public List<Person> GetAllPeople()
        {
            return _context.People.ToList();
        }

        public List<Person> SearchForPeople(string searchParam)
        {
            searchParam = searchParam.ToLower();
            return _context.People.Where(x => x.FirstName.ToLower().Contains(searchParam) || x.LastName.ToLower().Contains(searchParam)).ToList();
        }
    }
}