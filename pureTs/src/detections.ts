// function check(strs:string | string [] | null){
//     if(strs){
//         if(typeof strs==="object"){
//             let item
//             for (item of strs){
//                 console.log(strs[item])
//             }
//         }
//         console.log(strs)
//     }
// }

// check("amit")
// check(["ai","i"])


//narrowing,we use in for this
interface Admin{
    username:string,
    password:string,
    isAdmin:boolean
}

interface User{
    name:string,
    password:string,
    isUser:boolean
}


function checkAdminOrNot(account:User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
   return false
}


function example(x:string | number ,y :string | boolean){
    if( x===  y){
        console.log(x.toUpperCase())
        console.log(y.toLowerCase())
    }
   else{
    console.log(x)
    console.log(y)
   }
}

example("si","no")

