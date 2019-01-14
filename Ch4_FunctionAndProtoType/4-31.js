
/*
call과 apply 메서드를 이용한 명시적인 this 바인딩
- 앞서 자바스크립트는 내부적인 this 바인딩 이외에도 this를 특정 객체에 명시적으로 바인딩 시키는 방법을 제공함. (apply(), call() 메서드)

function.apply(thisArg, argArray)

이러한 apply(), call() 메서드는 this를 원하는 값으로 명시적으로 매핑해서 특정 함수나 메서드를 호출할 수 있다.
*/

function Person(name, age, gender) {
    this.name = name ;
    this.age = age;
    this.gender = gende;
}

var foo = {};

// Person을 foo로 매핑해서, argArray를 넘기는 과정.
// 즉 foo는 Person이 가진 생성자를 사용할 수 있으며, dir를 통해 각 인자들이 프로퍼티에 입력된 것을 확인할 수 있음.
Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo) ;