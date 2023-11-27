const User={
    name:"Amit",
    email:"Amit@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){

}

createUser({name:"amit",isPaid:true})

function createCourse():{name:string,price:number}{
    return {name:"amit",price:20} //just like we had return type as string,here we have it as objects
}

// function createCourse(): { name: string, price: number } {
//     return { name: "amit", price: 20 };
// }

type User2={
    name:string,
    email:string,
    isActive:boolean
}

function createUser2(user:User2){

}

createUser2({name:"",email:"",isActive:true})


type User4={
    readonly _id:string,
    name:string,
    email:string,
    isActive:boolean
}

let user4:User4={_id:"1234",name:"amit singh",email:"Amit@gmail.com",isActive:false}

user4.email="anotheremail@gmail.com"
// user4._id=233
// cannot do this,it is readonly




//combining types
type cardNumber={
    cardnumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails=cardNumber & cardDate & {
    cvv:number,
    expire:string
}





export {}