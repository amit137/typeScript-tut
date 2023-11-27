let score:number | string=33

score=44
score="55"

type User={
    name:String,
    id:number
}

type Admin={
    username:string,
    id:number
}

let amit:User | Admin={name:"amit",id:33}

amit={username:"sage",id:4}

function getDbId(id:number|string){
    console.log(`Db id is ${id}`)
    
}

getDbId(3)
getDbId("3")


const data1:string[]=["1","2","3"]
const data2:number[]=[1,2,3]
//if we want both,that our array could contain both types then,this is union
const data3:(string | number) []=[1,2,"3","4"]
console.log(data3)
data3[0]="5"
console.log(data3)

let seatAttolment:"aisle"|"middle"|"window"

