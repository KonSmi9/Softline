using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;
namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        EmployeesContext db;
        
        public EmployeeController(EmployeesContext context)
        {
            db = context;
            if (!db.Employees.Any()) {
                db.Employees.Add(new Employee { Surname = "Смирнов", Firstname = "Юрий", Patronymic = "Константинович", DateOfBirth = new DateTime(2000, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Хавмойлов", Firstname = "Иван", Patronymic = "Константинович", DateOfBirth = new DateTime(2004, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Смирнов", Firstname = "Иван", Patronymic = "Константинович", DateOfBirth = new DateTime(2001, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Кирилов", Firstname = "Пётр", Patronymic = "Константинович", DateOfBirth = new DateTime(2002, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Жирков", Firstname = "Юрий", Patronymic = "Константинович", DateOfBirth = new DateTime(2003, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Репунов", Firstname = "Юрий", Patronymic = "Константинович", DateOfBirth = new DateTime(2005, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Кирилов", Firstname = "Марк", Patronymic = "Константинович", DateOfBirth = new DateTime(2006, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Петухов", Firstname = "Юрий", Patronymic = "Константинович", DateOfBirth = new DateTime(2007, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Самойлов", Firstname = "Юрий", Patronymic = "Константинович", DateOfBirth = new DateTime(2008, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
                db.Employees.Add(new Employee { Surname = "Смирнов", Firstname = "Алексей", Patronymic = "Константинович", DateOfBirth = new DateTime(2009, 7, 20), AboutMe = "Мечтаю реализовать себя", Decre = false });
            }   db.SaveChanges();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> Get() {
            return await db.Employees.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> Get(int id) {
            Employee employee = await db.Employees.FirstOrDefaultAsync(item => item.Id == id);
            if (employee == null) {
                return NotFound();
            }
            return new ObjectResult(employee);
        }

        [HttpPost]
        public async Task<ActionResult> Post(Employee employee) {

            if (employee == null) {
                return BadRequest();
            }
            db.Employees.Add(employee);
            await db.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpPut]
        public async Task<ActionResult> Put(Employee employee) {
            if (employee == null)
            {
                return NotFound();
            }
            if (!db.Employees.Any(item => item.Id == employee.Id)) {
                return NotFound();
            }

            db.Update(employee);
            await db.SaveChangesAsync();
            return Ok(employee);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> Delete(int id) {
                Employee employee = await db.Employees.FirstOrDefaultAsync(item => item.Id == id);
                if (employee == null) {
                    return NotFound();
                }
                db.Employees.Remove(employee);
                await db.SaveChangesAsync();
                return Ok(employee);
        }

    }
}
