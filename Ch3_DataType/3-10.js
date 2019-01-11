
/*
- 객체 비교 (==)는 서로 같은 참조값을 가지고 있는지 비교함. (값을 비교하지 않음.)
- 그렇기에 objA == objB는 값은 같을지 언정 false가 나온다.
*/

var a = 100;
var b = 100;

var objA = {value: 100} ;
var objB = {value: 100} ;
var objC = objB;

document.writeln(a == b) ;
document.writeln(objA == objB) ;
document.writeln(objC == objB) ;