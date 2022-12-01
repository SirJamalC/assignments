// create empty array named "employees"
var employees = [];
// create a "Employee" constructor using name, job title, salary, status
function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log(this.name, this.jobTitle, this.salary, this.status);
    }
}
// create variables for objects of each employee
var one = new Employee("Jamal", "Student", 0 + "/hr", "full-time");
var two = new Employee("Tony", "Engineer", 50 + "/hr", "full-time")
var three = new Employee("Jordan", "Doctor", 100 + "/hr", "full-time")
// override an employement status
three.status = "contract"
//console.log(one, two, three) 
employees.push(one, two, three);
console.log(employees);
one.printEmployeeForm()
two.printEmployeeForm()
three.printEmployeeForm()