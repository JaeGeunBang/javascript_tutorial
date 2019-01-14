
/*
프로토타입 체이닝
- 자바스크립트의 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있음. ([[Prototype]] 링크)
prototype 프로퍼티와 객체의 숨은 프로퍼티인 [[Prototype]] 링크를 구분해야함.
*/

function Person(name) {
    this.name = name ;
}

var foo = new Person('foo') ;
console.dir(Person) ;
console.dir(foo) ;