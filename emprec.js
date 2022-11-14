// create empty array named "employees"
var employess = [];
// create a "Employee" constructor using name, job title, salary, status
function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status

}
// create variables for each employee
var one = new Employee("Jamal", "Student", 0 + "/hr", "full-time");
var two = new Employee("Tony", "Engineer", 50 + "/hr", "full-time")
var three = new Employee("Jordan", "Doctor", 100 + "/hr", "full-time")
console.log(one, two, three) 