/*
스코프체인
- C언어에서는 함수 뿐만 아니라, if{} for{} 모두 유효 범위가 있지만, 자바스크립트는 오직 함수만이 유허범위의 한 단위이다.
- 즉, 함수 내에 if { a 변수 }, for { b 변수 } 가 있다면, 함수 내에서는 a변수, b변수 모두 접근이 가능함.
- 이러한 유효 범위를 나타내는 스코프가 [[scope]] 프로퍼티로 각 함수 객체 내에서 연결 리스트 형식으로 관리가 되는데 이를 스코프 체인이라 함.

[List]
2: 변수객체 2
1: 변수객체 1
0: 변수객체 0
*/

var var1 = 1;
var var2 = 2;
console.log(var1) ;
console.log(var2) ;

// 각 함수는 [[scope]] 프로퍼티로 자신이 생성된 실행 컨텍스트의 스코프 체인을 참조함.
// 위 코드는 전역 코드이므로 스포크체인에 0: 전역 객체가 입력된다.