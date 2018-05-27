using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CatalystProblem.Business;
using CatalystProblem.Models;

namespace CatalystProblem.Controllers
{
    public class PeopleController : ApiController
    {
        private readonly ICatalystProblemBusinessLogic _businessLogic;

        public PeopleController(ICatalystProblemBusinessLogic businessLogic)
        {
            _businessLogic = businessLogic;
        }

        public List<Person> Get(string searchParam)
        {
            var peopleFound = string.IsNullOrEmpty(searchParam) ? _businessLogic.GetAllPeople() : _businessLogic.SearchForPeople(searchParam);
            return peopleFound;
        }


        public Person Get(int id)
        {
            return _businessLogic.GetPerson(id);
        }


        public int Post([FromBody]Person person)
        {
            if (person.IsValid)
            {
                return _businessLogic.AddPerson(person);
            }
            return 0;
        }


        public void Put(int id, [FromBody]Person person)
        {
            if (person.IsValid)
            {
                _businessLogic.UpdatePerson(person);
            }
        }


        public void Delete(int id)
        {
            _businessLogic.DeletePerson(id);
        }
    }
}
