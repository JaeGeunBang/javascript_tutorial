
/*
배열과 객체의 프로토타입 비교
출력값은 안나오지만....
배열의 프로토타입은 Array.prototype (참고로 Array.prototype의 프로토타입은 Object.protytype)
객체의 프로토타입은 Object.prototype
*/

var emptyArray = [];
var emptyObj = {};

document.writeln(emptyArray.__proto__)
document.writeln(emptyObj.__proto__)

console.dir(emptyArray.__proto__);
console.dir(emptyObj.__proto__);