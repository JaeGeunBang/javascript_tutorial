
/*
연산자
1. 두 연산자가 모두 숫자일 경우에만 계산을 수행하며, 그외에는 string 타입으로 처리함
*/

var add1 = 1 + 2
var add2 = 'my ' + 'string'
var add3 = 1 + 'string'
var add4 = 'string' + 2

console.log(add1);
console.log(add2);
console.log(add3);
console.log(add4);

/*
2. typeof 연산자

숫자 - 'number'
문자열 - 'string'
불린값 - 'boolean'
null - 'object'
undefined - 'undefined'
객체 - 'object'
배열 - 'object'
함수 - 'function'
*/

/*
3. ==(동등 연산자), ===(일치) 연산자
- 동등 연산자는 타입이 다를 경우, 타입 변환을 거친 후 진행함
- 일치 연산자는 타입 변환 과정 없이, 그냥 비교함.
*/

console.log(1 == '1') ;
console.log(1 === '1') ;

/*
4. !! 연산자
피연산자를 불린값으로 변환하는 것.
*/
console.log(!!0)
console.log(!!1)
