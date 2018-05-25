using System;
using System.ComponentModel.DataAnnotations;

namespace CatalystProblem.Models
{
    public class Person
    {
        [Required]
        public int PersonId { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public int Age { get; set; }
        public string Interests { get; set; }
        public string AvatarUrl { get; set; }
        public DateTime InsertDate { get; set; }
    }
}