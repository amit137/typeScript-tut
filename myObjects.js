"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Amit",
    email: "Amit@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "amit", isPaid: true });
function createCourse() {
    return { name: "amit", price: 20 }; //just like we had return type as string,here we have it as objects
}
function createUser2(user) {
}
createUser2({ name: "", email: "", isActive: true });
var user4 = { _id: "1234", name: "amit singh", email: "Amit@gmail.com", isActive: false };
user4.email = "anotheremail@gmail.com";
