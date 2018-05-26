using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
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

        public void UpdatePerson(Person person)
        {
            var result = _context.People.FirstOrDefault(x => x.PersonId == person.PersonId);
            if (result != null)
            {
                person.InsertDate = result.InsertDate;
                _context.Entry(result).CurrentValues.SetValues(person);
                _context.SaveChanges();
            }
        }

        public Person GetPerson(int id)
        {
            return _context.People.FirstOrDefault(x => x.PersonId == id);
        }

        public int AddPerson(Person person)
        {
            person.InsertDate = DateTime.Now;
            _context.People.Add(person);
            _context.SaveChanges();
            return person.PersonId;
        }

        public void DeletePerson(int id)
        {
            var person = new Person {PersonId = id};
            _context.Entry(person).State = EntityState.Deleted;
            _context.SaveChanges();
        }
    }
}