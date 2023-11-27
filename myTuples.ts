const user:(string | number)[]=[1,"hc"]

//if order of array matters,then use tuples,in the above example,order does not matter
let tUser:[string,number,boolean]=["amit",137,true]
console.log(tUser)

let rgb:[number,number,number]=[255,255,255]

type User=[number,string]
const newUser:User=[112,"email.com"]

newUser[1]="sage.com"


export {}