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
        // GET api/values
        public List<Person> Get(string searchParam)
        {
            var peopleFound = string.IsNullOrEmpty(searchParam) ? _businessLogic.GetAllPeople() : _businessLogic.SearchForPeople(searchParam);
            return peopleFound;
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
