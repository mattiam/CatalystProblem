using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CatalystProblem.Business;
using CatalystProblem.Models;
using NUnit.Framework;
using Moq;

namespace CatalystProblem.Tests
{
    [TestFixture]
    public class RepositoryTests
    {
        
        private Mock<ICatalystProblemDataContext> _context;
        [SetUp]
        public void Setup()
        {
            var data = new List<Person>
            {
                new Person {FirstName = "Matt", LastName = "Gardner"},
                new Person {FirstName = "Minch", LastName = "Yoda"},
                new Person {FirstName = "Mark", LastName = "SomeLastName"}
            }.AsQueryable();

            var mockDbSet = new Mock<DbSet<Person>>();
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.Provider).Returns(data.Provider);
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.Expression).Returns(data.Expression);
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.GetEnumerator()).Returns(data.GetEnumerator);

            _context = new Mock<ICatalystProblemDataContext>();
            _context.Setup(x => x.People).Returns(mockDbSet.Object);
        }

        [Test]
        public void WHEN_FirstNameContainsSearchTerm_THEN_PeopleWithThatNameAreReturned()
        {

            ICatalystProblemBusinessLogic businessLogic = new CatalystProblemBusinessLogic(_context.Object);

            var results = businessLogic.SearchForPeople("M");
            Assert.AreEqual(3, results.Count);
            foreach (var result in results)
            {
                Assert.True(result.FirstName.Contains("M"));
            }
        }

        [Test]
        public void WHEN_LastNameContainsSearchTerm_THEN_PeopleWithThatNameAreReturned()
        {
            ICatalystProblemBusinessLogic businessLogic = new CatalystProblemBusinessLogic(_context.Object);

            var results = businessLogic.SearchForPeople("o");
            Assert.AreEqual(2, results.Count);
            foreach (var result in results)
            {
                Assert.True(result.LastName.Contains("o"));
            }
        }

        [Test]
        public void WHEN_SearchSentWithWrongCase_THEN_IsStillFound()
        {
            ICatalystProblemBusinessLogic businessLogic = new CatalystProblemBusinessLogic(_context.Object);

            var results = businessLogic.SearchForPeople("O");
            Assert.AreEqual(2, results.Count);
            foreach (var result in results)
            {
                Assert.True(result.LastName.ToLower().Contains("o"));
            }
        }

        [Test]
        public void WHEN_NoNamesContainSearchTerm_THEN_EmptyListReturned()
        {
            ICatalystProblemBusinessLogic businessLogic = new CatalystProblemBusinessLogic(_context.Object);

            var results = businessLogic.SearchForPeople("z");
            Assert.AreEqual(0, results.Count);
        }

        [Test]
        public void WHEN_FullPersonFound_THEN_ReturnsEverything()
        {

            var data = new List<Person>
            {
                new Person
                {
                    PersonId = 1,
                    FirstName = "Minch",
                    LastName = "Yoda",
                    Address = "Jungle Planet, Dagobah System",
                    Age = 900,
                    Interests = "training Luke, defeating Sith, wielding green lightsabers",
                    AvatarUrl = "Yoda.png",
                    InsertDate = DateTime.Now
                },
                new Person
                {
                    PersonId = 1,
                    FirstName = "Luke",
                    LastName = "Skywalker",
                    Address = "Tatooine, Galaxy far, far away",
                    Age = 19,
                    Interests = "turning Sith good, wielding blue lightsabers",
                    AvatarUrl = "luke.jpg",
                    InsertDate = DateTime.Now
                }
            }.AsQueryable();

            var mockDbSet = new Mock<DbSet<Person>>();
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.Provider).Returns(data.Provider);
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.Expression).Returns(data.Expression);
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.ElementType).Returns(data.ElementType);
            mockDbSet.As<IQueryable<Person>>().Setup(m => m.GetEnumerator()).Returns(data.GetEnumerator);

            var context = new Mock<ICatalystProblemDataContext>();
            context.Setup(x => x.People).Returns(mockDbSet.Object);

            ICatalystProblemBusinessLogic businessLogic = new CatalystProblemBusinessLogic(context.Object);
            var results = businessLogic.SearchForPeople("Yo");
            Assert.AreEqual(1, results.Count);
            var result = results.First();
            Assert.AreEqual("Minch", result.FirstName);
            Assert.AreEqual("Yoda", result.LastName);
            Assert.AreEqual("Jungle Planet, Dagobah System", result.Address);
            Assert.AreEqual(900, result.Age);
            Assert.AreEqual("training Luke, defeating Sith, wielding green lightsabers", result.Interests);
            Assert.AreEqual("Yoda.png", result.AvatarUrl);
        }
    }
}
