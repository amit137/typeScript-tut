var score = 33;
score = 44;
score = "55";
var amit = { name: "amit", id: 33 };
amit = { username: "sage", id: 4 };
function getDbId(id) {
    console.log("Db id is ".concat(id));
}
getDbId(3);
getDbId("3");
var data1 = ["1", "2", "3"];
var data2 = [1, 2, 3];
//if we want both,that our array could contain both types then
var data3 = [1, 2, "3", "4"];
console.log(data3);
data3[0] = "5";
console.log(data3);
