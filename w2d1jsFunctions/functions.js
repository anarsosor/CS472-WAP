'use strict'
// 1.
const max = function(num1, num2) {
    if (num1 >= num2) {
        return num1;
    }
    else {
        return num2;
    }
}
// console.log(max(34, 65));

// 2.
const maxOfThree = function(num1, num2, num3) {
    return max(max(num1, num2), num3);
} 
// console.log(maxOfThree(343, 265, 432));

// 3.
const isVowel =function(char) {
    var vowel='AaEeIiOoUuYy';
    return vowel.includes(char,0);
} 
// console.log(isVowel('U'));

// 4.
const sum = function(arr) {
    if(arr==null || arr.length==0)
        return null;
    var result=0;
    for(let el of arr)
        result+=el;
    return result;
}
// console.log(sum([1,2,3,4,5,6]));

const multiply = function(arr) {
    if(arr==null || arr.length==0)
        return null;
    var result=1;
    for(let el of arr)
        result*=el;
    return result;
}
// console.log(multiply([2,4,6]));

// 5.
const reverse = function(str) {
    if(str==null || str.length==0)
        return str;
    var result='';
    for(let i=str.length-1; i>=0; i--) {
        result+=str.charAt(i);
    }
    return result;
}
// console.log(reverse('AS KDJ << 09 a'));

// 6.
const findLongestWord = function(arrayOfWords) {
    var longest=0;
    for(let i=0; i<arrayOfWords.length; i++) {
        if (longest < arrayOfWords[i].length)
            longest=i;
    }
    return longest;
}
var words=["an", "array", "words", "and", "returns", "the", "length", "longest"];
// console.log(findLongestWord(words));

// 7.
const filterLongWords = function(arrayOfWords, i) {
    return arrayOfWords.filter(word => word.length > i);
}
// console.log(filterLongWords(words,5));

// 8.
// const computeSumOfSquares = arrayOfNumbers => arrayOfNumbers
//         .map(el => el*el)
//         .reduce((acc, el) => acc + el);
// OR
const computeSumOfSquares = arrayOfNumbers => arrayOfNumbers
        .reduce((acc, el) => acc + el*el);
        
var numbers=[1,2,3,4,5];
// console.log(computeSumOfSquares(numbers));

// 9.
const printOddNumbersOnly = arrayOfNumbers => arrayOfNumbers
        .filter(el => el%2==1);
// sprintOddNumbersOnly(numbers).forEach(el => console.log(el));

// 10.
const computeSumOfSquaresOfEvensOnly = arrayOfNumbers => arrayOfNumbers
        .filter(el => el%2==0)
        .map(el => el*el)
        .reduce((acc, el) => acc + el);
// console.log(computeSumOfSquaresOfEvensOnly(numbers));

// 11.
const sum1 = arrayOfNumbers => arrayOfNumbers
        .reduce((acc, el) => acc + el);
const multiply1 = arrayOfNumbers => arrayOfNumbers
        .reduce((acc, el) => acc * el);
// console.log(sum1(numbers));
// console.log(multiply1(numbers));

// 12.
const findSecondBiggest = function(arrayOfNumbers) {
    if(arrayOfNumbers==null || arrayOfNumbers.length<2)
        return null;
    var largest, secondLargest;
    if (arrayOfNumbers[0] < arrayOfNumbers[1]){
        largest=arrayOfNumbers[1];
        secondLargest=arrayOfNumbers[0];
    }
    else {
        largest=arrayOfNumbers[0];
        secondLargest=arrayOfNumbers[1];
    }
    for(let i=2; i<arrayOfNumbers.length; i++) {
        if (largest < arrayOfNumbers[i]) {
            secondLargest=largest;
            largest=arrayOfNumbers[i];
        }
        else {
            if(secondLargest < arrayOfNumbers[i])
                secondLargest=arrayOfNumbers[i];
        }
    }
    return secondLargest;
}
// console.log(findSecondBiggest(numbers));
// console.log(findSecondBiggest([19,9,11,0,12]));

// 13.
const printFibo = function(n,a,b) {
    var result=[];
    if (n>0) result.push(a);
    if (n>1) result.push(b);
    for(let i=2; i<n; i++){
        result.push(result[i-2]+result[i-1]);
    }
    return result;
}
// console.log(printFibo(10,0,1));

// 14
const getLoginForm1 = function() {
    let email1 = document.getElementById("email1").value;
    let password1 = document.getElementById("password1").value;
    let url1 = document.getElementById("url1").value;
    console.log("Email: " + email1 + ", password: " + password1 + ", URL: " + url1);
}
const getLoginForm2 = function() {
    let productnumber = document.getElementById("productNumber").value;
    let quantity = document.getElementById("quantity").value;
    let name = document.getElementById("productNumber").value;
    let supplier = document.getElementById("quantity").value;
    let unitPrice = document.getElementById("unitPrice").value;
    let dateSupplied = document.getElementById("dateSupplied").value;
    alert("productnumber: " + productnumber + ", quantity: " + quantity + ", name: " + name + ", supplier: " + supplier + ", unitPrice: " + unitPrice + ", dateSupplied: " + dateSupplied);
}
window.onload = function() {
    let submitButton1 = document.getElementById("submit1");
    submitButton1.onclick = getLoginForm1;

    let submitButton2 = document.getElementById("submit2");
    submitButton2.onclick = getLoginForm2;

    setInterval(displayClock, 1000);
};

// const loginForm1 = document.getElementById("loginForm1");
// loginForm1.addEventListener("submit1", getLoginForm1);

// 15
const displayClock = function() {
    let currentDate = new Date();

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    document.getElementById("clock").innerText = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}