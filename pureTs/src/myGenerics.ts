
//arg is number and so is return type
function identityOne(val:number):number{
    return val
}

//arg is any,so return type can be any too
function identityTwo(val:any):any{
    return val;
}

//if we want return type as exact as arg type,then
function identityThree<Type>(val:Type):Type{
    return val
}
//this locks the return type and the argument type


function identityFour<T>(val:T):T{
    return val
}


interface Bottle{
    brand:string,
    type:number
}

//using array type
function getSearchProducts<T>(products:T[]):T{
   const myIndex=3
   return products[myIndex]
}


//in arrow function case
const getMoreSearchProducts=<T,>(products:T[]):T=>{
   //some complex db operations
    const myIndex=3
    return products[myIndex]
}