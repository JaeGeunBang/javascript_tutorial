
/*
생성자 함수를 호출할 때 this
* 스타일 권고사항
- 생성자 함수 이름의 첫 문자를 대문자로 쓰기를 권함.
- 또한, 생성자 함수의 this는 앞서 설명한 함수 호출의 this 바인딩과는 다르게 동작한다.

생성자 함수가 동작하는 방식
1. 빈객체 생성 및 this 바인딩
 : 여기서 생성된 빈 객체는 Person() 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 [[Prototype]] 링크로 연결해 자신의 프로토타입으로 설정함. 그 후 생성된 객체에 this로 바인딩됨
2. this를 통한 프로퍼티 생성
3. 생성된 객체 리턴.
*/

// Person() 생성자 함수
var Person = function (name) {
    // 여기 this는 Person 이라는 객체에 바인딩이 됨.
    this.name = name ;
};

var foo = new Person('foo') ;
console.log(foo.name) ;