"use strict";
// class User{
//     private email:string
//     public name:string //by default it is public in js
//     city:string=""
//     constructor(email:string,name:string){
//         this.email=email;
//         this.name=name
//     }
// }
// const amit=new User("amit@gmail.com","amit")
// // amit.city=2 gives error
// amit.city="lucknow"
// // amit.email not available bcoz email is private
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.points = 1;
        this.anotherPoints = 1;
        this.city = "lucknow";
    }
    deleteToken() {
        console.log("token deleted"); //private method
    }
    //getter and setter
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get pointsCount() {
        return this.pointsCount;
    }
    set pointsCount(point) {
        if (point <= 0) {
            throw new Error("Points cannot be less than 0");
        }
        this.points = point;
    }
}
//using inheritance,will not acquire private properties by default
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changePointsCount() {
        // this.points=4 //bcoz points is private,this is where we can use protected
        this.anotherPoints = 4; //this is protected  
    }
}
const amit = new User("amit@gmail.com", "amit", "123");
