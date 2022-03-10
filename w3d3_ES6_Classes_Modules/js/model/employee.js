// Task 2
import { Person } from "./person.js";
export class Employee extends Person {
    constructor(name, byear, bmonth, bday, salary, hyear, hmonth, hday) {
        super(name, byear, bmonth, bday);
        this.salary = salary;
        this.hireDate = new Date(hyear, hmonth, hday);
    }
    getSalary() {return this.salary; }
    getHireDate() {return this.hireDate; }
    setSalary(salary) {this.salary = salary; }
    setHireDate(hyear, hmonth, hday) {
        this.hireDate = new Date(hyear, hmonth, hday);
    }
    doJob(jobTitle) {
        console.log(`${this.getName()} is a ${jobTitle} who earns $${parseFloat(this.getSalary()).toFixed(2)}`);
    }
}