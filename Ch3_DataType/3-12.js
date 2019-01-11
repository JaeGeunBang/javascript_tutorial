
/*
프로토타입

- 생성한 foo객체는 toString() 이란 함수를 가지고 있지 않지만, 에러가 발생하지 않음 (즉, 부모로부터 상속 받아 호출했음)
- name, age 외에도 __proto__ 프로퍼티가 있음

자바스크립트의 모든 객체는 자신의 프로토타입을 가리키는 [[Protytype]] 이라는 숨겨진 프로퍼티를 가진다.
*/

var foo = {
    name: 'foo',
    age: 30
};

document.writeln(foo.toString()) ;
