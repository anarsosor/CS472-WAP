/**
 * hcmc.js
 * 
 * @author anar
 * @since 2022-03-10
 */
"use strict";

import { Patient } from "./model/patient.js";

$(document).ready(function() {
    const patientsData = [];

    $("#formNewPatient").submit(function(event) {   
        event.preventDefault();
        console.log(event.target);
        const patientIdNumber = $("#patientIdNumber").val();
        const firstName = $("#firstName").val();
        const middleInitials = $("#middleInitials").val();
        const lastName = $("#lastName").val();
        const dateOfBirth = $("#dateOfBirth").val();
        const ddlDepartment = $("#ddlDepartment").val();
        const isOutPatient = $("input:radio[name=radioIsOutPatient]:checked").val();

        // const patientData = `Patient ID No: ${patientIdNumber}, First Name: ${firstName}, Middle Initial(s): ${middleInitials}, Last Name: ${lastName}, Date of birth: ${dateOfBirth}, Department: ${ddlDepartment}, Is Out-patient: ${isOutPatient}`;

        // alert(patientData);

        const newPatient = new Patient(patientIdNumber, firstName, middleInitials, lastName, dateOfBirth, ddlDepartment, isOutPatient);

        // alert(newPatient.toString());
        
        patientsData.push(newPatient);

        createPatient(newPatient);

        $("#patientIdNumber").val("");
        $("#firstName").val("");
        $("#middleInitials").val("");
        $("#lastName").val("");
        $("#dateOfBirth").val("");
        $("#ddlDepartment").val("");
        $("input:radio[name=radioIsOutPatient]:checked")[0].checked = false;
    });

    $("input:checkbox").on("click", function(event) {
        clearTable();
        const chkElderlyPatients = $("#chkElderlyPatients").is(':checked');
        const chkShowOutPatients = $("#chkShowOutPatients").is(':checked');
        patientsData.filter(n => (!chkElderlyPatients || getAge(n.getDateOfBirth()) >= 65) && (!chkShowOutPatients || n.getIsOutPatient()=="Yes"))
                    .forEach(n => createPatient(n));
    });

    function getAge(dateString) {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    function clearTable() {
        const tblPatients = document.querySelector("#tbodyPatientsList");
        tblPatients.innerHTML = '';
        console.log("table cleared");
    }

    function createPatient(newPatient) {
        const tblPatients = document.querySelector("#tbodyPatientsList");
        const newRow = tblPatients.insertRow(-1);

        const newCellPatientId = newRow.insertCell(0);
        const strNewPatientId = document.createTextNode(`${newPatient.getPatientIdNumber()}`);
        newCellPatientId.appendChild(strNewPatientId);

        const newCellFirstName = newRow.insertCell(1);
        const strNewFirstName = document.createTextNode(`${newPatient.getFirstName()}`);
        newCellFirstName.appendChild(strNewFirstName);

        const newCellMiddleInitials = newRow.insertCell(2);
        const strNewMiddleInitials = document.createTextNode(`${newPatient.getMiddleInitials()}`);
        newCellMiddleInitials.appendChild(strNewMiddleInitials);

        const newCellLastName = newRow.insertCell(3);
        const strNewLastName = document.createTextNode(`${newPatient.getLastName()}`);
        newCellLastName.appendChild(strNewLastName);

        const newCellDateOfBirth = newRow.insertCell(4);
        const strNewDateOfBirth = document.createTextNode(`${newPatient.getDateOfBirth()}`);
        newCellDateOfBirth.appendChild(strNewDateOfBirth);

        const newCellDdlDepartment = newRow.insertCell(5);
        const strNewDdlDepartment = document.createTextNode(`${newPatient.getDdlDepartment()}`);
        newCellDdlDepartment.appendChild(strNewDdlDepartment);

        const newCellIsOutPatient = newRow.insertCell(6);
        const strNewIsOutPatient = document.createTextNode(`${newPatient.getIsOutPatient()}`);
        newCellIsOutPatient.appendChild(strNewIsOutPatient);

        console.log("Patient created");
    }


});
