/**
 * patient.js
 */
"use srtict";

export class Patient {
    #patientIdNumber = null;
    #firstName = null;
    #middleInitials = null;
    #lastName = null;
    #dateOfBirth = null;
    #ddlDepartment = null;
    #isOutPatient = null;
    
    constructor(patientIdNumber, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, isOutPatient) {
        this.#patientIdNumber = patientIdNumber;
        this.#firstName = firstName;
        this.#middleInitials = middleInitials;
        this.#lastName = lastName;
        this.#dateOfBirth = dateOfBirth;
        this.#ddlDepartment = ddlDepartment;
        this.#isOutPatient = isOutPatient;
    }

    getPatientIdNumber() { return this.#patientIdNumber; }
    getFirstName() { return this.#firstName; }
    getMiddleInitials() { return this.#middleInitials; }
    getLastName() { return this.#lastName; }
    getDateOfBirth() { return this.#dateOfBirth; }
    getDdlDepartment() { return this.#ddlDepartment; }
    getIsOutPatient() { return this.#isOutPatient; }
     
    setPatientIdNumber(patientIdNumber) { 
        this.#patientIdNumber = patientIdNumber;
    }
    setFirstName(firstName) { 
        this.#firstName = firstName;
    }
    setMiddleInitials(middleInitials) { 
        this.#middleInitials = middleInitials;
    }
    setLastName(lastName) { 
        this.#lastName = lastName;
    }
    setDateOfBirth(dateOfBirth) { 
        this.#dateOfBirth = dateOfBirth;
    }
    setDdlDepartment(ddlDepartment) { 
        this.#ddlDepartment = ddlDepartment;
    }
    setIsOutPatient(isOutPatient) { 
        this.#isOutPatient = isOutPatient;
    }

    toString() {
        return `Patient ID No: ${this.#patientIdNumber}, First Name: ${this.#firstName}, Middle Initial(s): ${this.#middleInitials}, Last Name: ${this.#lastName}, Date of birth: ${this.#dateOfBirth}, Department: ${this.#ddlDepartment}, Is Out-patient: ${this.#isOutPatient}`;
    }
 }