using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class EmployeesContext : DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public EmployeesContext(DbContextOptions<EmployeesContext> options)
            :base(options)
        {

            Database.EnsureCreated();
        }


    }
}
