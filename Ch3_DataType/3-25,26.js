
/*
유사 배열 객체란?
- length 프로퍼티를 가진 객체

일반적으로 객체는 push()기능이 없다. 왜냐하면 배열이 아니기 떄문이다.
그럼 객체에 push()를 추가하고 싶다면?

apply()객체를 활용함으로써, 객체지만 표준 배열 메서드를 활용할 수 있다.

*/

var arr = ['bar']
var obj = {
    name: 'foo',
    length: 1
};

arr.push('baz') ;
console.log(arr) ;
// 객체에서 push()를 수행할 경우 에러가 발생함.
//obj.push('baz') ;

// 실제 값을 찍어보면, length 값도 증가한 것을 알 수 있음. (이는 4장에서 소개할 것)
Array.prototype.push.apply(obj, ['baz'])
console.log(obj) ;