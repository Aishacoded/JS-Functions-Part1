//Task1
function printName() {

    console.log("Aisha");
}

printName();



//Task2
function printAge(yearOfBirth, currentYear) {

    console.log(currentYear - yearOfBirth);
}

printAge(1991,2024);



//Task3

function printAgeAndName(yearOfBirth,myName){
    console.log(`Hello ${myName} you are ${2024-yearOfBirth} years old`);
} 
printAgeAndName(1991,"Aisha");



//Task3

function printHello(myName, lang) {
    if (lang === "en") {
        console.log(`hello ${myName}`);
    } else if (lang === "es") {
        console.log(`hola ${myName}`);
    } else if (lang === "fr") {
        console.log(`bonjour ${myName}`);
    } else if (lang === "tr") {
        console.log(`merhaba ${myName}`);
    }
}
printHello("aisha", "en");



//Task5

function printMax(no, nt) {
    if (no > nt) {
        console.log(no);
    } else {console.log(nt);

    }
}
printMax(.5, 1);
