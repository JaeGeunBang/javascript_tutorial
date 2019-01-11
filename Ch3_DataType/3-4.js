
var nullVar = null;

// 출력: false, true 
document.writeln(typeof nullVar === null)
document.writeln(nullVar === null)

var undefinedVar;

// object, null
document.writeln(typeof nullVar)
document.writeln(nullVar)

// undefined, undefined
document.writeln(typeof undefinedVar);
document.writeln(undefinedVar);
/*
- 'true', 'false' 처럼 불린 타입을 가진다.

3.1.4 null, undefined
이 두 타입은 모두 '값이 비어있음'을 나타낸다. 기본적으로 값이 할당되지 않은 변수는 undefined 타입이며, 값 또한 undefined 이다.
즉, JS에서는 undefined는 타입이자 값을 나타낸다

nullVar은 null 타입이므로, 값을 비교했을 시 true가 나오지만, typeof를 통해 출력했을 시 null이 아니다. (object 타입)
만약 nullVar에 아무런 값도 안들어갔을 경우, typeof는 undefined 타입이 나오게 된다.
* 일치 연산자 (===)

*/