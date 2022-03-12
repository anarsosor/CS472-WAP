// Task 1
// Creating litheral object 

const person = {
    name: "",
    dateOfBirth: null,
    getName: function() {
        return this.name;
    },
    setName: function(newName) {
        this.name = newName;
    },
    getDateOfBirth: function() {
        return this.dateOfBirth;
    },
    setDateOfBirth: function(newDate) {
        this.dateOfBirth = newDate;
    }
}
let john = Object.create(person);
john.setName("John");
john.setDateOfBirth(new Date(1988,11,10));
console.log("The person's name is " + john.getName());

let dateOfBirth = john.getDateOfBirth();
let year = dateOfBirth.getFullYear();
let month = dateOfBirth.getMonth() + 1;
let day = dateOfBirth.getDate();
console.log(`${john.getName()} was born on ${year}-${month}-${day}`);

// console.log(`The person's name is ${john.name}\n${john.name} was born on ${john.dateOfBirth}`);
// console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${new Intl.DateTimeFormat().format(john.dateOfBirth)}`);
// console.log(`The person's name is ${john.getName()}\n${john.getName()} was born on ${john.dateOfBirth.toISOString()}`);
// console.log(`The person's name is ${john.name}\n${john.getName()} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth()+1}-${john.dateOfBirth.getDate()}`);

// Task 2
let employee = Object.create(person);
employee.salary = 0.0;
employee.hireDate = new Date();
employee.setSalary = function(newSalary) {
    this.salary = newSalary;
}
employee.doJob = function(newJobTitle) {
    console.log(`${this.getName()} is a ${newJobTitle} who earns $${this.salary}`);
};
let anna = Object.create(employee);
anna.setName("Anna");
anna.setSalary(245995.50);
anna.doJob("Programmer");

// Task 3
// Creating litheral object by Constructor
function Person(name, year, month, day) {
    this.name = name;
    this.dateOfBirth = new Date(year, month-1, day);
}
Person.prototype.toString = function() {
    let year = this.dateOfBirth.getFullYear();
    let month = this.dateOfBirth.getMonth() + 1;
    let day = this.dateOfBirth.getDate();
    return `Name: ${this.name}, DateOfBirth: ${year}-${month}-${day}`;
}
let peter = new Person("Peter", 1985, 11, 10);
console.log(peter.toString());
