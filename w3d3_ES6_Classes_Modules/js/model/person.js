export class Person {
    constructor(name, year, month, day) {
        this.name = name;
        this.dateOfBirth = new Date(year, month-1, day);
    }
    getName() {
        return this.name;
    }
    setName(newname) {
        this.name = newname;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    setDateofBirth(year, month, day) {
        this.dateOfBirth = new Date(yesr, month-1, day);
    }
    toString() {
        let year = this.dateOfBirth.getFullYear();
        let month = this.dateOfBirth.getMonth() + 1;
        let day = this.dateOfBirth.getDate();
        return `Name: ${this.name}, Date of Birth: ${year}-${month}-${day}`;
    }
}