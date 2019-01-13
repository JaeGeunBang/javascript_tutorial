

/*
함수 표현식 방식으로 함수 생성
- 함수 선언문 문법과 거의 비슷하지만, 함수 이름은 선택사항이며 보통 함수 이름을 사용하지 않는다.
- 사용용도는 함수를 파라미터로 넘겨 주고 싶을 때 사용함.
- 함수 표현식 방식에서는 세미콜론을 사용해주는 것이 좋음. (함수의 끝을 명시적으로 알려줌)
*/

// add는 함수 변수이며, 함수 이름이 아니다. (익명 함수)
var add = function (x, y){
    return x + y;
} ;

var plus = add;

console.log(add(3,4)) 
console.log(add(5,6))

// 함수 이름이 있는 표현식을 기명 함수 표현식 이라 함.
// 이는 보통 재귀함수 호출이나 디버깅을 하고 싶을 때 사용함.
add = function sum(x,y) {
    return x + y;
} ;

// 하지만 sum 함수를 호출 하는 것은 에러가 발생함. (외부 코드에서 접근이 불가능함.)
// console.log(sum(3,4))
// 실제 