/*
프로토타입 프로퍼티.
- 모든 함수는 객체로써 prototype 프로퍼티를 가지고 있음.
단 앞서 설명한 모든 객체의 부모를 가르키는 내부 프로퍼티인 [[Prototype]] 프로퍼티와는 다름.

둘의 차이는?
- [[Prototype]] 프로퍼티
: 객체 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킴.
- prototype
: 이 함수가 생성자로 사용될 때, 이 함수를 통해 생성된 객체의 부모 역할을 하는 프로토타입 객체를 가리킴.
: 즉, 함수를 처음 생성하면 함수 객체의 prototpye은 constructor prototype을 가리키고, contructor prototpye은 함수 객체를 가리킨다.
함수          프로토타입 객체
protytpe <-> contructor

이후 프로톹입, 체이닝 이해에 필요한 개념
*/

function myFunction() {
    return true;
}

console.dir(myFunction.prototype) ;
console.dir(myFunction.prototype.constructor);