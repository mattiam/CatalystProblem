using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CatalystProblem.Api.Models
{
    public class Person
    {
        [Required]
        public int PersonId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public int Age { get; set; }
        public string Interests { get; set; }
        public string AvatarUrl { get; set; }
        public DateTime InsertDate { get; set; }
    }
}