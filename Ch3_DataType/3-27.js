
/*
기본 타입과 표준 메서드
- 원래 기본 타입은 메서드가 존재할 수 없지만, 표준 메서드를 호출하게 되면 메서드 처리 순간에 객체로 변환한다.
그다음 처리 후에 다시 기본 값으로 복귀하게 됨.
*/

var num = 0.5;
console.log(num.toExponential(1)) ;

console.log("test".charAt(2)) ;