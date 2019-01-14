
/*
new 없이 생성자 함수를 만들 경우, 아래와 같이 에러가 발생함.
*/

var qux = Person('qux', 20, 'man');
console.log(qux) //에러 발생

console.log(window.name) ; //출력값 qux
console.log(window.age) ; //출력값 20
console.log(window.man) ; //출력값 man