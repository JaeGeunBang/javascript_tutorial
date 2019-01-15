String.prototype.testMethod = function() {
    console.log('This is the String.prototype.testMethod()')
};

var str = "this is test";
str.testMethod() ;

console.dir(String.prototype)

/*
위 코드처럼, String.prototype에 새로운 메서드를 추가해둔다면,
모든 string 객체들은 새로운 메서드를 사용할 수 있다.
String의 프로토타입은 String.prototype
Integer의 프로토타입은 Number.prototype
배열의 프로토타입은 Array.prototype
물론 최종 모든 객체의 프로토타입 종점은 Object.prototype이다.
*/