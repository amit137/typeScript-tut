let greetings:string="Hello Amit";
console.log(greetings);

greetings.toLowerCase()


let userId:number=33333
let isLoggedIn:boolean=false

let age=40


//when not to use any,any will be assigned by default if type is not assigned
let hero:string;

function getHero(){
    return "thor"
}

hero=getHero()

//defining functions
function addTwo(num:number){
    return num+2
    //now num is number,so we cannot use any string functions or anything
}

addTwo(5)

function getUpper(val){
    console.log(val.toUpperCase())
}

getUpper("amit")

function signUpUser(name:string,email:string,isPaid:boolean){
    console.log(name,email,isPaid)
}


signUpUser("amit","amit@gmail.com",true)

//providing default values in functions

let loginUser=(name:string,email:string,isPaid:boolean=false)=>{

}

loginUser("amit","Amit@gmail.com")//now this will work,coz we have given a default value
loginUser("sumit","sumit@gmail.com",true)


//in the addTwo function,we could still return a string,to make sure we return a number only,we do this
function addThree(num:number):number{
    return num+3
}

addThree(4)

const addFour=(s:number):number=>{
    return s+4
}

const heroes=["thor","spiderman","ironman"]

heroes.map((hero):string=>{
    return `hero is ${hero}`
})


function consoleError(errmsg:string):void{
  console.log(errmsg) //using void bcoz we are not returing anything
}

//types inside the bracket are of parameters and type outside of the bracket is of what should be the return type


//we are using never return type,when theres an exception or terminations of the program,so we are not observing the value ever
function handleError(errmsg:string):never{
    throw new Error(errmsg)
}














export {}