using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CatalystProblem.Models;

namespace CatalystProblem.Data
{
    public interface ICatalystProblemRepository
    {
        List<Person> GetAllPeople();
        List<Person> SearchForPeople(string searchParam);
    }

    public class CatalystProblemRepository : ICatalystProblemRepository
    {
        private CatalystProblemDataContext _context;
        public CatalystProblemRepository()
        {
             _context = new CatalystProblemDataContext();
        }
        public List<Person> GetAllPeople()
        {
            return _context.People.ToList();
        }

        public List<Person> SearchForPeople(string searchParam)
        {
            return _context.People.Where(x => x.Name.Contains(searchParam)).ToList();
        }
    }
}