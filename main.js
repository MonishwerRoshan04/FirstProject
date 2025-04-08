// console.log("Hello World");
// let a = 10;
// console.log(typeof(a));

/*_______STRING_______*/

//Length
let mytext = "Hello World";
console.log(mytext.length);

/*_______STRING METHODS_______*/

console.log(mytext.charAt(0));
console.log(mytext.indexOf("Wo")); //First Occurance
console.log(mytext.indexOf("m")); // Returns Negative Value
console.log(mytext.lastIndexOf("l"));
console.log(mytext.slice(5, 8)); // Omits Last index
console.log(mytext.slice(5)); // Returns All Elements After The Specified Index
console.log(mytext.slice(5, 1)); // Returns Nothing
console.log(mytext.toUpperCase());
console.log(mytext.toLowerCase());
console.log(mytext.includes("He")); // It Returns Boolean datatypes (True / False)
console.log(mytext.split("r")); // It Returns Array And Split The Data Before And After The Word What We have Given
console.log(mytext.split("")); // It Splits Every Single

/*_______NUMBERS_______*/

let myTxt = "42";
let myNum = 42;
let myFloat = 42.2;

console.log(myNum === myFloat);
console.log(myTxt);
console.log(myFloat);
console.log(myNum === myTxt);
console.log(myTxt + 6); // myTxt is a string and 6 is a number so it will attach both data instead added it
console.log(Number(myTxt) + 6); // We have converted the myTxt to a number now it will add the datas
console.log(Number("Hello") + 6); // NaN - Not A Number
console.log(Number(undefined) + 6); // NaN - Not A Number
console.log(Number(true) + 6);

/*_______NUMBER METHODS_______*/

// let modifiedTxt = "42.09aaa"
// let modifiedTxt = "aa42aaa.09aaa"
let modifiedTxt = "42.09525aaa";
let nums = 10;

console.log(Number.isInteger(myFloat)); // If we set any datas inside the function brackets its called - Passing The Value
console.log(Number.parseFloat(modifiedTxt)); // It returns float value / Ignores the character only display the numbers
console.log(Number.parseInt(modifiedTxt)); // It returns integer and omits the decimal values
console.log(Number.parseFloat(modifiedTxt).toFixed(2)); // It stops the decimal with 2values and it changes the result to string
console.log(nums.toString());

/*_CHAINING_*/
console.log(parseFloat(modifiedTxt).toFixed(2).toString());

console.log(Number.isNaN("hello"));
console.log(isNaN("hello"));

/*_______MATH METHODS AND PROPERTIES_______*/

console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(4.7));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.pow(3, 4));
console.log(Math.min(10, 5, 6, 7, 3, 1));
console.log(Math.max(10, 5, 6, 7, 3, 1));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.abs(-10));

/*_______CODING CHALLENGE_______*/

let myName = "Vijay";
let randomdata = Math.floor(Math.random() * myName.length);
console.log(myName[randomdata]);

/*_______IF STATEMENTS_______*/

let customerIsBanned = false;
let viewers = "Here is your video!!!";
let replay;
let finance = true;
if (customerIsBanned) {
  replay = "Sorry";
} else if (viewers && finance) {
  replay = `Enjoy ${viewers} and finance content`;
} else if (viewers) {
  replay = `Enjoy ${viewers}`;
} else {
  replay = "Sorry iam still working";
}
console.log(replay);

/*_____________________________________*/

let testScore = 58;
let grade;
let collegeStudent = false;
if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "RA";
  } else {
    grade = "F";
  }
}
console.log(grade);

/*_______SWITCH STATEMENTS_______*/

switch (2) {
  case 1:
    console.log(1);
    break; // which is used to stop the line and come out of the switch statement
  case 2:
    console.log(2);
    break;
  default:
    console.log("No Match");
}

/*_________________________________*/

let randomNumbers = Math.floor(Math.random() * 4);
switch (randomNumbers) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("No Match");
}

/*_________________________________*/

let player = "rock";
let computer = "scissor";

switch (player) {
  case computer:
    console.log("Scissor");
    break;
  case player:
    if (computer === "scissor") {
      console.log("Player Win");
    } else {
      console.log("Computer Wins");
    }
    break;
  default:
    console.log("No Match");
}

/*_______TERNARY OPERATORS (ShortHand)_______*/

let subscriber = "subscribed";
let response = subscriber ? "Welcome!!!" : "Kindly Subscribe";
console.log(response);

/*_________________________________*/

let studentScore = 78;
let grades =
  studentScore >= 90
    ? "A"
    : studentScore >= 80
    ? "B"
    : studentScore >= 70
    ? "C"
    : "D"; // chaining
console.log(grades);

/*_________________________________*/
let player1 = "Rock";
let Computer1 = "Rock";
let results =
  player1 === Computer1
    ? "Tie!"
    : player1 === "Rock" && Computer1 === "paper"
    ? "Computer Win"
    : player1 === "Scissor" && Computer1 === "Rock"
    ? "Computer Win"
    : player1 === "paper" && Computer1 === "Scissor"
    ? "Computer Win"
    : "player Win";
console.log(results);

/*_______USER INPUT_______*/
// let myBoolean = alert("Hi Subscribers");
// console.log(myBoolean);

// let myBoolean2 = confirm("Hi Subscribers");
// console.log(myBoolean2);

// let myBoolean3 = prompt("Enter Your Name");
// console.log(myBoolean3);

// let myBoolean3 = prompt("Enter Your Name");
// console.log(myBoolean3 ?? "You didn't enter your name");//null coalescing operator
// console.log(typeof myBoolean3);

// let myBoolean3 = prompt("Enter Your Name");
// if(myBoolean3.length){
//     console.log(myBoolean3 ?? "You didn't enter your name");
// }
// else{
//     console.log("You didn't enter your name");
// }

// let myBoolean3 = prompt("Enter Your Name");
// if(myBoolean3){
//     console.log(myBoolean3 ?? "You didn't enter your name");
// }
// else{
//     console.log("You didn't enter your name Here");
// }
// console.log(myBoolean3.trim().length);

/*_______CODING CHALLENGE_______*/

// let opinion = confirm("Can we play stone, paper and scissor?")
// if(opinion){
//   let userInput = prompt("Enter your value");
//   let computerInput;
//   let computerDatas = ["stone","paper","scissor"];
//   let randomData = Math.floor(Math.random() * computerDatas.length);
//   computerInput = computerDatas[randomData];
//   if(userInput){
//     let modifiedUserInput = userInput.trim().toLocaleLowerCase();
//     if(modifiedUserInput === "stone" || modifiedUserInput === "paper" || modifiedUserInput === "scissor"){
//       let result = modifiedUserInput === computerInput ? "Tie": modifiedUserInput === "paper" && computerInput === "scissor"? "Computer Wins": modifiedUserInput === "scissor" && computerInput === "stone"?"Computer Wins":modifiedUserInput === "stone" && computerInput === "paper"?"Computer Wins":"User Win";
//       alert(`User : ${modifiedUserInput}\nComputer : ${computerInput}\nResult : ${result}`);
//       let playAgain = confirm("Shall we play again");
//       playAgain ? location.reload():alert("Ok thanks for playing");
//     }
//     else{
//       let userWriteAgain = confirm("sorry you have entered invalid datas")
//       userWriteAgain ? location.reload():alert("ok see you next time");
//     }
//   }
//   else{
//     alert("ok i think you have changed your mind, play next time")
//   }
// }
// else{
//   alert("ok may be later");
// }

/*_______LOOPS_______*/

//While Loop
// let i = 0;
// while(i <= 5){
//   console.log(i);
//   i++;
// }

//Do While Loop
// let i = 50;
// do{
//   console.log(i);
//   i++
// }while(i <50)

//For loop

// for(let i = 0; i< 50; i++){
//   console.log(i);
// }

// let names = "vijay";
// for(let i = 0; i< names.length; i++){
//   console.log(names.charAt(i));
// }

// let names = "vi";
// for(let i = 0; i< names.length; i++){
//   for(let j = 0; j<names.length; j++){
//     console.log(i,j);
//   }

// }

// let datas = "";
// for(let i = 0; i< 5; i++){
//   if(i === 3){
//     break;
//   }
//   datas += i;
// }
// console.log(datas);

//my exercise

// let userMailDatas = ["monishwermona@gmail.com","mona@gmail.com"];
// for(let i = 0; i<userMailDatas.length; i++){
//   let userNameOnly = userMailDatas[i];
//   let result = userNameOnly.slice(0,userNameOnly.indexOf("@"));
//   console.log(result);
// }

/*_______FUNCTIONS_______*/

// function sum(num1 ,num2){
//   return num1 + num2;
// }
// console.log(sum(2,3));
// console.log(sum(5,7));

// function sum(num1 ,num2){
//   console.log(num1);
//   console.log(num2);
//   if(num2 === undefined){
//     return num1;
//   }
//   return num1 + num2;
// }
// console.log(sum(2));

// let userMail = "monishwermona@gmail.com";
// let result = userMail.slice(0, userMail.indexOf("@"));
// console.log(result);

// let userMail = "hello@gmail.com"
// let userNameOnly = userMail.slice(0,userMail.indexOf("@"));
// console.log(userNameOnly);

// function userNameFromEmail(email){
//   let nameSeperated = email.slice(0,email.indexOf("@"));
//   return nameSeperated;

// }
// console.log(userNameFromEmail("ajith@gmail.com"));
// console.log(userNameFromEmail("surya@gmail.com"));

// function toProperCase(data){
// let properConversion = data.charAt(0) + data.slice(1).toLowerCase();
// return properConversion;
// }
// console.log(toProperCase("vIJaY"));
// console.log(toProperCase("aJITH"));

// let toProperCase = function (data){
// let properConversion = data.charAt(0) + data.slice(1).toLowerCase();
// return properConversion;
// }
// console.log(toProperCase("vIJaY"));
// console.log(toProperCase("aJITH"));

let toProperCase = (data) => {
  let properConversion = data.charAt(0) + data.slice(1).toLowerCase();
  return properConversion;
};
console.log(toProperCase("vIJaY"));
console.log(toProperCase("aJITH"));

/*_______SCOPE Var, Let, Const_______*/

//Global Scope
// var x = 1;
// // let y = 2;
// // const z = 3;

// //Local Scope // Block Scope
// // {
// //   let y = 4;
// //   console.log(y);
// // }

// //Local Scope // Function Scope

// function hello(){
//   const z = 8;
//   console.log(z);
//   console.log(x);

//   if(true){
//     let y = 4;
//     console.log(y);
//   }
// }
// hello()
// // console.log(y);
// console.log(z);

var a = 4;
let b = 7;
const c = 8;

console.log(`Global: ${a}`);
console.log(`Global: ${b}`);
console.log(`Global: ${c}`);

function hello() {
  var c = 0;

  if (true) {
    var b = 10;
    console.log(`Block: ${a}`);
    console.log(`Block: ${b}`);
    console.log(`Block: ${c}`);
  }
  console.log(`Function: ${a}`);
  console.log(`Function: ${b}`);
  console.log(`Function: ${c}`);
}
hello();
console.log(`Global: ${b}`);

/*_______ARRAYS_______*/

const myArray = [];
//Adding Elements

myArray[0] = "Hello";
myArray[1] = "Welcome";
myArray[2] = 4;
myArray[3] = true;

// console.log(myArray);

// console.log(myArray.length);
// console.log(myArray[3]);
// console.log(myArray[myArray.length - 1]);

// myArray.push("iam ok");
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift("iam ok now");
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// const lastItemAdded = myArray.push("iam ok"); // if we try to store the added element of the array in any variable it returns the length of the array
// console.log(lastItemAdded);
// console.log(myArray);
// const firstItemAdded = myArray.unshift("vijay");
// console.log(firstItemAdded);
// console.log(myArray);

// const lastItemRemoved = myArray.pop(); // if we try to store the removed element of the array in any variable it returns the value
// console.log(lastItemRemoved);
// console.log(myArray);
// const firstItemRemoved = myArray.shift();
// console.log(firstItemRemoved);
// console.log(myArray);

// let elements = myArray.pop(); // if we remove or add elements from the end of the array it won't change the position of the existing elements
// console.log(elements);
// console.log(myArray);

// let elements2 = myArray.shift(); // if we add or remove elements from the starting position of the array it will change the position of the existing elements
// console.log(elements2);
// console.log(myArray);

// console.log(myArray);

// delete myArray[2]; // It returns the undefined value instead we can use splice method
// console.log(myArray);
// console.log(myArray[2]);

// myArray.splice(2,1,"iam new here");// we can delete or replace any element from the array using splice method it change the position of the elements
// console.log(myArray);
// console.log(myArray[2]);

// let newArray = myArray.slice(0,2);// it returns the copy of the selected elements from the array
// console.log(myArray);
// console.log(newArray);

// let newArray = myArray.reverse(); //it reverse the original array
// console.log(myArray);
// console.log(newArray);

// let newArray = myArray.join(); //it returns the copy of the original array and stored as a string
// console.log(myArray);
// console.log(newArray);

// let changedArray = newArray.split(",");// it changed every elements to a string and put into new array
// console.log(myArray);
// console.log(changedArray);

// let newArrays = ["ajith",52,"chennai"];
// let combinedArray = newArrays.concat(myArray); // to combine two arrays
// console.log(combinedArray);

// let newArrays = ["ajith",52,"chennai"];
// let combinedArray = newArrays.concat(myArray); // we can use spread operator also to combine two arrays
// console.log(combinedArray);

// let newArrays = ["ajith",52,"chennai"];
// let combinedArray = [newArrays,myArray]; // we can use this but it wont combine the two array to a single array instead it will add the two different arrays into the new array
// console.log(combinedArray);

const earnMoneyA = ["red", "green"];
const earnMoneyB = ["blue", "yellow"];
const earnMoneyC = ["orange", "purple"];
const earnMoneyD = ["brown", "white"];
const earnMoneyE = ["black"];

console.log(earnMoneyB[0], earnMoneyD[1]);

//Two Dimentional Arrays
let earnMoney_1 = [earnMoneyA, earnMoneyB];
let earnMoney_2 = [earnMoneyC, earnMoneyD];
console.log(earnMoney_1);
console.log(earnMoney_2);
console.log(earnMoney_1[1][0], earnMoney_2[1][1]);

//Three Dimentional Arrays
let letsEarn = [earnMoney_1, earnMoney_2, earnMoneyE];
console.log(letsEarn[0][1][0], letsEarn[1][1][1]);

/*_______CODING CHALLENGE (using function, array and loop / stone,paper,scissor)_______*/
//skipped

/*_______OBJECTS_______*/
//key-value pairs in curly braces

let myObj = { name: "vijay" };
console.log(myObj);

let anotherObj = {
  subscriber: true,
  no: 10000,
  content: {
    earn: "Js",
    grow: "Stock",
  },
  subDivisions: ["Earn", "Grow", "Give"],
  action: function () {
    // return "Hello World";
    // return `Earn by learning vannila ${anotherObj.content.earn}`;
    return `Earn by learning vannila ${this.content.earn}`;
  },
};

// console.log(anotherObj.content.earn);
// console.log(anotherObj["content"]["grow"]);
console.log(anotherObj.action());

const vehicle = {
  doors: 2,
  engine: "vroommmm!",
};
console.log(vehicle.engine);

const car = Object.create(vehicle); // inheritance
car.wheels = 4;
console.log(car);

car.engine = function () {
  return "whoooosh!!!";
};
console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function () {
  return "Shhhhhhh";
};
console.log(tesla.engine());

let movies = {
  actor: "vijay",
  actress: "trisha",
  music: "aniruth",
  director: "lokesh kanagaraj",
};
console.log(Object.keys(movies));
console.log(Object.values(movies));

for (let job in movies) {
  // console.log(movies[job]);
  console.log(`${job} its ${movies[job]}`);
}

movies.comedy = "yogibabu"; // adding
console.log(movies);

delete movies.director;
console.log(movies);

console.log(movies.hasOwnProperty("director")); // return true or false // to handle undefined

//Destructuring Objects
// const {actor: actorName} = movies; // assign new variable
// console.log(actorName);

const { music } = movies; // creating variables
console.log(music);

function hellow({ music }) {
  return music;
}
console.log(hellow(movies));

/*_______CLASSESS_______*/
// object blue print or template
//we can pass arguments through class
//same object template but we can create more object using classes

// const myPizza = {
//   size:"medium",
//   crust:"original",
//   bake: function(){
//     return console.log(`Baking a ${this.size} ${crust} crust pizza`);

//   }
// }
// console.log(myPizza);

// class pizza {
//   constructor(pizzaType,sizePizza,crustPizza,toppingsPizza){
//     this.type = pizzaType;
//     this.size = sizePizza;
//     this.crust = crustPizza;
//     this.toppings = toppingsPizza;
//   }
////we dont need to specify the function keyword in classes
//   bake(){
//     return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
//   }
// }
// // const classPizza = new pizza; // class pizza ia an object
// // console.log(classPizza);
// // classPizza.bake();

// // const classPizza = new pizza("ChilliButter","Small","Original");
// // const classPizza2 = new pizza("Sweet","Large","Thin");
// // classPizza.bake();
// // classPizza2.bake();

// //Getter, Setter

// const myPizza = new pizza("ChilliButter","Small","Original","Olives");
// // myPizza.size = "Large"; //This is not good practice to manipulate the object
// myPizza.bake();

// class pizza {
//   constructor(pizzaType,sizePizza,crustPizza,toppingsPizza){
//     this.type = pizzaType;
//     this.size = sizePizza;
//     this.crust = crustPizza;
//     this.toppings = toppingsPizza;
//   }
//   getToppings(){
//     return this.toppings;
//   }
//   setToppings(toppingsPizza){
//     this.toppings = toppingsPizza;
//   }
//   bake(){
//     return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza with ${this.toppings}`);
//   }
// }

// //Getter, Setter

// const myPizza = new pizza("ChilliButter","Small","Original","Olives");
// // myPizza.size = "Large"; //This is not good practice to manipulate the object
// myPizza.setToppings("sausage");
// console.log(myPizza.getToppings());
// console.log(myPizza);

// class pizza {
//   constructor(sizePizza) {
//     this.size = sizePizza;
//     this.crust = "Original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setToppings(crustPizza) {
//     this.crust = crustPizza;
//   }
// }

// //extends, super

// class myNewPizza extends pizza {
//   constructor(sizePizza){
//   super(sizePizza);
//   this.type = "Margarita";
//   }
//   slice(){
//     console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);    
//   }
// }

// let mySpecialPizza = new myNewPizza("Medium");
// mySpecialPizza.slice();

//we can easily use the inner properties of the object by using . operator from the out side of the object
// class pizza {
//   constructor(sizePizza) {
//     this.size = sizePizza;
//     this.crust = "Original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setToppings(crustPizza) {
//     this.crust = crustPizza;
//   }
// }


//_ means private properties
class pizza {
  constructor(sizePizza) {
    this._size = sizePizza;
    this._crust = "Original";
  }
  getCrust() {
    return this._crust;
  }
  setToppings(crustPizza) {
    this._crust = crustPizza;
  }
}


//factory function - we can create object using factory function
// we can create variable for the function and we can call it where we want unless we dont want the inner properties if we want inner properties here also the problem may occur we couldn't call the properties using dot operator.
// it solved the object properties calling outside the object using dot operator but this is also not a good solution it returns undefined

function datas(dats){
  let data1 = "vijay";
  let data2 = dats;
  return{
    func: () => {
      console.log(`data1 is ${data1} and data2 is ${data2}`);
    }
  }
}
let vals = datas(50);
console.log(vals.func());
console.log(vals._size);
console.log(vals);


//public and private property

// class obj{
//   age = 50;
//   #city = "chennai";
//   constructor(name){
//     this.name = name;
//   }
//   hello(){
//     return `name is ${this.name}, age is ${this.age}, city is ${this.#city}`;
//   }
// }

// let newObj = new obj("vijay");
// console.log(newObj.hello());
// console.log(newObj.#city);

/*_______JSON_______*/
//JSON - Javascript Object Notation
//text format
//to send and receive data in many programming languages
// when we change the object to JSON it avoids the function and change every property to string

// const myObjs = {
//   name:"hello",
//   content:["welcome","Guys"],
//   hey(){
//     console.log("Iam happy to meet you all guys");    
//   }
// }

// console.log(myObjs);
// myObjs.hey();

// let sendJSON = JSON.stringify(myObjs);
// console.log(sendJSON);
// console.log(typeof sendJSON);

// let receiveJSON = JSON.parse(sendJSON);
// console.log(receiveJSON);
// console.log(typeof receiveJSON);

/*_______Errors And Error Handling_______*/

// "use strict";
// const variables = "vijay";// Reference Error
// console.log(variables);

// object..hello();// Systax Error

// variables = "Ajith";

// const errorHandling = () =>{
//   try{
//     const variables = "vijay";
//     variables = "ajith";
//     console.log(variables);
//   }
//   catch(err){
//     // console.log(err);   
//     // console.warn(err);  
//     // console.error(err); 
//     console.error(err.stack); 
//   }
// }
// errorHandling();

// const errorHandling = () =>{
//   try{
//    throw new customMsg("This ia a custom error");
//   }
//   catch(err){
//    console.error(err.stack);
   
//   }
// }
// errorHandling();
// //Custom Error

// function customMsg(message){
//   this.message = message,
//   this.name = "CustomeError",
//   this.stack = `${this.name} : ${this.message}`
// }


//inbuild custom message
// const errorHandling = () =>{
//   try{
//    throw new Error("This ia a custome error");
//   }
//   catch(err){
//    console.error(err.stack);
   
//   }
// }
// errorHandling();


// const errorHandling = () =>{
//   let i = 0;
//   while(i <= 5){
//     try{
//       if(i % 2 !== 0){
//         throw new Error("Odd Number")        
//       }
//       console.log("Even Number");      
//     }
//     catch(err){
//      console.error(err.stack);   
//     }
//     finally{
//       console.log("Iam Finally"); 
//       i++;     
//     }
//   }
 
// };
// errorHandling();


/*_______Document Object Model(DOM)_______*/
//it creates tree liked structure while the browser is loading

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

// view1.style.display = "none";
// view2.style.display = "flex";

//HTML Collections
const views = document.getElementsByClassName("view");
console.log(views);

//node - any content in the website for eg, <div>1</div> both div and the content includes
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

//reselect from already existing selected elements
const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs[4].style.backgroundColor = "purple";

for(let i = 0; i< evenDivs.length; i++){
  evenDivs[i].style.backgroundColor = "red";
}


