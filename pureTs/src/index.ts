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
    private points=1
    protected anotherPoints=1
    readonly city:string="lucknow"
    constructor(private email: string, public name: string, private userId: string) {

    }

    private deleteToken(){
        console.log("token deleted")//private method
    }

    //getter and setter
    get getAppleEmail():string{
        return `apple ${this.email}`
    }
    get pointsCount():number{
        return this.pointsCount
    }
    set pointsCount(point){   //setter does not have a return type
          if(point<=0){
            throw new Error("Points cannot be less than 0")
          }
          this.points=point
    }

}


//using inheritance,will not acquire private properties by default
class SubUser extends User{
  isFamily:boolean=true
  changePointsCount(){
    // this.points=4 //bcoz points is private,this is where we can use protected
      this.anotherPoints=4 //this is protected  
}
}


const amit = new User("amit@gmail.com", "amit", "123")
