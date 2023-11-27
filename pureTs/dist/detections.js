"use strict";
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
function checkAdminOrNot(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function example(x, y) {
    if (x === y) {
        console.log(x.toUpperCase());
        console.log(y.toLowerCase());
    }
    else {
        console.log(x);
        console.log(y);
    }
}
example("si", "no");
