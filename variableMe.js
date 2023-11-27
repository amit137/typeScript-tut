"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Amit";
console.log(greetings);
greetings.toLowerCase();
var userId = 33333;
var isLoggedIn = false;
var age = 40;
//when not to use any,any will be assigned by default if type is not assigned
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
//defining functions
function addTwo(num) {
    return num + 2;
    //now num is number,so we cannot use any string functions or anything
}
addTwo(5);
function getUpper(val) {
    console.log(val.toUpperCase());
}
getUpper("amit");
function signUpUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signUpUser("amit", "amit@gmail.com", true);
//providing default values in functions
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("amit", "Amit@gmail.com"); //now this will work,coz we have given a default value
loginUser("sumit", "sumit@gmail.com", true);
//in the addTwo function,we could still return a string,to make sure we return a number only,we do this
function addThree(num) {
    return num + 3;
}
addThree(4);
var addFour = function (s) {
    return s + 4;
};
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg); //using void bcoz we are not returing anything
}
//types inside the bracket are of parameters and type outside of the bracket is of what should be the return type
//we are using never return type,when theres an exception or terminations of the program,so we are not observing the value ever
function handleError(errmsg) {
    throw new Error(errmsg);
}
