const superheroes:string[]=[]

// const superheroes:[]=[]//first bracket defines the type of the array

superheroes.push("spiderman")

const places:string[]=["lucknow","tokyo"]
console.log(places[1])

const numbers:number[]=[1,2,3]
numbers.map((num)=>{
    console.log(num)
})


//another way
const names:Array<string>=[]

type User={
    name:string,
    email:string,
    age:number
}

const allUsers:User[]=[]

allUsers.push({name:"amit",email:"email@.com",age:22})
console.log(allUsers)


const mlModels:number[][]=[
    [255,255,255],
    [0,0,0]
]

console.log(mlModels)



export {}