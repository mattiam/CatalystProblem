using System.ComponentModel.DataAnnotations.Schema;
using System.Web;

namespace CatalystProblem.Models
{
    public class PersonWithPicture : Person
    {
        [NotMapped]
        public HttpPostedFileBase Avatar { get; set; }
    }
}