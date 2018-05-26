using System.Collections.Generic;
using CatalystProblem.Models;

namespace CatalystProblem.Business
{
    public interface ICatalystProblemBusinessLogic
    {
        List<Person> GetAllPeople();
        List<Person> SearchForPeople(string searchParam);
        void UpdatePerson(Person person);
        Person GetPerson(int id);
    }
}