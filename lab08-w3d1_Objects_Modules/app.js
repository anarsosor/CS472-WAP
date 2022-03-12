// Task 6

// var add=(function() {
//     var counter=0;
//     return function() {
//         return counter+=1;
//     }
// }) ();
// console.log(add());
// console.log(add());
// console.log(add());

const count6 = (function() {
    var counter=0;
    function add() {
        counter+=1;
    }
    function reset() {
        counter = 0;
    }
    console.log("count6 ...");
    console.log(counter);
    add();
    add();
    console.log(counter);
    reset();
    console.log(counter);
    add();
    console.log(counter);
}) ();

// Task 7
var inc=2;
const count7 = (function() {
    var counter=0;
    function add() {
        counter+=inc;   // inc is a free variable
    }
    function reset() {
        counter = 0;
    }
    console.log("count7 ...");
    console.log(counter);
    add();
    add();
    console.log(counter);
    reset();
    console.log(counter);
    add();
    console.log(counter);
}) ();

// Task 8
const make_adder = function(inc) {
    var counter=0;
    function add() {
        counter+=inc;
    }
    function reset() {
        counter = 0;
    }
    return function() {
        add();
        console.log(counter);
    }
};
console.log("make adder");
add5=make_adder(5);
add5();
add5();
add5();
add7=make_adder(7);
add7();
add7();
add7();

// Task9

// We can use Module Pattern IIFE or Block Scope of ES6.
// In this situation all global variables will be not global variables.

//Task 10
const Employee = function() {
    var name;
    var age;
    var salary;

    function setAge(newAge) {
        age = newAge;
    }
    function setSalary(newSalary) {
        salary = newSalary;
    }
    function setName(newName) {
        name = newName;
    }
    function getAge() {
        return age;
    }
    function getSalary() {
        return salary;
    }
    function getName() {
        return name;
    }
    return {
        setAge : setAge,
        setSalary : setSalary,
        setName : setName,
        increaseSalary : function(percentage) {
            let sal=getSalary()
            sal+=sal*percentage/100;
            setSalary(sal);
        },
        incrementAge : function() {
            a=getAge();
            a++;
            setAge(a);
        },
    }
}
console.log("Employee Object ...")
emp1 = Employee();
emp1.setAge(40);
emp1.setName("Sam");
emp1.setSalary(120000);
emp1.incrementAge();
emp1.address = null;
emp1.setAddress = function(newAddress){
    emp1.address=newAddress;
}
emp1.getAddress = function() {
    return emp1.address;
}
console.log(emp1.getAddress());
emp1.setAddress("Join st, IA 53234");
console.log(emp1.getAddress());
