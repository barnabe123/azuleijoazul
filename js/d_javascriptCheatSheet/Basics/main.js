/*alert('Pop up about something');*
console.log('Hello World'); The most common
console.error('This is an error');
console.warn('This is a warning');
*/

//to declare a variable use always const unless you want to reassign the value, so use let 

let age2 = 30;
age2 = 31;
console.log(age2);

//Data types: Strings, numbers, boolean, null, undefined ans sybol

const name2 = 'John';
const age3 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name2)


const name = 'Rodrigo';
const age = 30;

//concatenation - old version
console.log('My name is ' + name + ' and I am ' + age);

//Template String (use shift+ [) - current version
console.log(`My name is ${name} and I am ${age}`);

const hello = `My name is ${name} and I am ${age}`;

console.log(hello);

const s = 'Hello world!!!';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(''));

const a = 'technology, computers, it, code';

console.log(a.split(', '));


//Arrays are variables that hold multiple valus

const numbers = new Array(1,2,3,4,5); //old versio with constructor

console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true]; //current version

console.log(fruits);
console.log(fruits[1]);

fruits[3] = 'grapes';

console.log(fruits);

fruits.push('mangos'); //insert at end
fruits.unshift('strawberries'); //insert at beggining

fruits.pop(); //delete at end

console.log(fruits);

console.log(Array.isArray('hello')); //Is it string?

console.log(Array.isArray(fruits)); //Is is an array?

console.log(fruits.indexOf('oranges')); //index of something

//Litels objects

const person = {
    firstName: 'Rodrigo',
    lastName: 'Luz',
    age: 21,
    hobbies: ['music', 'movies', 'study'],
    address:{
        street: 'Evaristo Cabral Rennó, 229',
        city: 'Itajubá',
        state: 'MG'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);

console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);

//to create variable through this array
const {firstName, lastName, address: {city}  } = person; //it's not assigning something but pulling this out
console.log(firstName);
console.log(city);

//you can directly add properties as well
person.email = 'rodrigodsluz@gmail.com';
console.log(person);

//A lot of time we're going to be dealing with array of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];

console.log(todos);

console.log(todos[1].text);

/*Json format - It's data used a lot with stack development
and using API. When you're sending data to a server you usually
send it in JSON format and receive it as well*/
//This is how we would send data to a server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//Loops
//FOR
for(let i=0; i<10; i++){
    console.log(`For Loop number: ${i}`);
}

//WHILE
let i=0;
while(i<10){
    console.log(`For Loop number: ${i}`);
    i++
}

for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todos)
}

/* High order array methods
forEach: which just loop through them

Map: which will allow us to create a new array from an array

Filter: which will allow us to create a new array based on condition

*/

//forEach
todos.forEach(function(todo) {
    console.log(todo.text)
});

//you can use the arrow function method
//todos.forEach((todo) => console.log(todo));

//Map
const todoText = todos.map(function(todo) {
    return todo.text;
});

console.log(todoText);
/*Just take the objets that are true
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);
*/ //below it create an array of texts of the objects that are true
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);

const yt = '10';
//Double equals won't match the datatypes, it's just the value
if(yt == 10){
    console.log('yt is 10');
}

const xis = 20;
//Triple equal also matches the datatypes
if(xis === 10){
    console.log('xis is 10');
}else if (xis > 10){
    console.log('xis is greater than 10');
}else{
    console.log('xis is less than 10');
}

const xrr = 4;
const ee = 11;
//Triple equal also matches the datatypes
if(xrr > 5 || ee > 10){
    console.log('xrr is more than 4 or ee is more than 10');
}

//Another if else (ternary operator)

const eita = 10;

const coolor = eita > 10 ? 'red' : 'blue';
/*How to read this thing: If eita is greater than 10 then red
is red else eita is blue  */
console.log(coolor);

switch(coolor){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//Functions

function addNums(num1 = 1, num2 = 1){
    console.log(num1 + num2);
}

addNums();
addNums(5, 4);

function addNums2(num1 = 1, num2 = 1){
    return num1 + num2;
}

console.log(addNums2(5, 5));

//Another way to use functions => arrow functions =>it's cool => it uses something called lexical, and it's of course better. You should just know that it has an extra advantage when it comes to using this keyword

const addNums3 = (num1 = 1, num2 = 1) => {
    return num1 + num2;
}

console.log(addNums3(5, 5));

//If the functions do one thing only you don't need curly braces
const addNums4 = (num1 = 1, num2 = 1) => console.log(num1 + num2);

addNums4(5, 5);

//Also if you want return something you don't need even put the return word

const addNums5 = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNums5(5, 5));

//Beyond, if only have one parameter you don't even need the parentheses

const addNums6 = num1 => num1 + 5

console.log(addNums6(5));

//Object Oriented Programming

/*We can constructs objects using what's called a constructor 
function, and there's two ways to do this, we can use constructor
functions with prototypes and we can also use es6 classes*/
/*
//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    //this.dob = dob;
    this.dob = new Date(dob);
    /*this.getBirthYear = function(){ //Isn't the best way to use
        return this.dob.getFullYear();
    }*/
    /*this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }*/
//}*/

//Instantiate object
/*
const person1 = new Person('Rodrigo', 'Luz', '1992-03-22');
const person2 = new Person('Human', 'Being', '1998-06-27');

//Prototypes
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.log(person1);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person2.getFullName());
*/
//Class with methods
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Rodrigo', 'Luz', '1992-03-22');
const person2 = new Person('Human', 'Being', '1998-06-27');

console.log(person1);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person2.getBirthYear());
console.log(person2.getFullName());



