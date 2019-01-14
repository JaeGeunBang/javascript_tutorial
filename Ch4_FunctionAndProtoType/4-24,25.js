
/*
함수를 호출할 때 this 바인딩
- 자바스크립트에서 함수를 호출하면, 해당 함수 내부 코드에서 사용된 this는 전역 객체에 바인딩됨.
즉, 객체의 메서드는 자신을 호출한 객체에 바인딩되고, 함수는 전역 객체에 바인딩됨.

전역 객체란?
- 브라우저 환경에서 자바스크립트를 실행하는 경우, 전역 객체는 window 객체가 됨.
*/

var foo = "I'm foo";

console.log(foo) ;
console.log(window.foo) ;

var test = 'this is test';
console.log(window.test) ;

var sayFoo = function() {
    // 여기 this는 전역 객체에 바인딩 됨.
    console.log(this.test) ;
};

sayFoo() ;