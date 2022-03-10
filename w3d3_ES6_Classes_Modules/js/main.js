// Task 1

import {Person} from "./model/person.js"
let persons = [
    new Person("Anna Smith", 1998, 12, 15),
    new Person("Bod Jone", 1945, 11, 16),
    new Person("Carlos Slim Helu", 1976, 9, 24)
];
for(let p of persons) {
    console.log(p.toString());
}

// Task 2
import { Employee } from "./model/employee.js";
let jim = new Employee("Jim Hanson");
jim.setSalary(245990.0);
jim.doJob("Software Engineering");