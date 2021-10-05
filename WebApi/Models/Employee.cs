using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Surname { get; set; } 
        public string Firstname { get; set; }
        public string Patronymic { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string AboutMe { get; set; }
        public Boolean Decre { get; set; }
    }
}
