
/*
함수 객체의 기본 프로퍼티
- 모든 함수는 length, prototype 프로퍼티를 가져야 함.
- 이외에도 name, caller, arguments, __proto__ 프로퍼티를 갖는다.

1. name
- 함수의 이름을 나타내는 프로퍼티. 익명 함수라면 빈 문자열이 입력됨.

2. caller
- 자신을 호출한 함수를 나타냄.

3. arguments
- 함수 호출할 때, 전달된 인자 값을 나타냄.

4. __proto__ 프로퍼티
자바스크립트의 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]이라는 내부 프로퍼티를 가진다.
함수 객체의 부모 역할을 하는 프로토타입 객체를 Function.prototype 객체라 명명한다.

* 그럼 Function.prototype 객체의 프로토타입 객체는?
Function.prototype의 부모는 모든 객체의 조상격인 Object.prototype 객체이다.
참고로 Function.prototype 객체는 모든 함수들의 부모 역할을 수행한다.
(Object.prototype --> Function.prototype --> 함수 객체)

*/

function add(x,y) {
    return x+y;
}

console.dir(add);