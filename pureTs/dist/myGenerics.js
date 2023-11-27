"use strict";
//arg is number and so is return type
function identityOne(val) {
    return val;
}
//arg is any,so return type can be any too
function identityTwo(val) {
    return val;
}
//if we want return type as exact as arg type,then
function identityThree(val) {
    return val;
}
//this locks the return type and the argument type
function identityFour(val) {
    return val;
}
//using array type
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
//in arrow function case
const getMoreSearchProducts = (products) => {
    //some complex db operations
    const myIndex = 3;
    return products[myIndex];
};
