
/*
즉시실행함수.
함수를 정의함과 동시에 실행하는 함수를 즉시실행함수라함. (익명 함수의 응용한 형태)
선언한 같은 함수를 다시 호출 할 수 없다. 즉, 최초 한 번의 실행만을 필요로 하는 초기화 코드 부분 등에 사용함.
*/

(function (name) {
    console.log('this is the immediate function -> ' + name)
})('foo');