
/*
자바스크립트에서 함수는 값으로 취급된다. 객체도 되고 값도 되고 다되네
*/

// 변수에 함수 할당.
var foo = 100;
var bar = function() {return 100;}
console.log(bar()) ;

// 프로퍼티에 함수 할당.
var obj = {}
obj.baz = function() { return 200; }
console.log(obj.baz()) ;