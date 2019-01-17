
/*
함수형 프로그래밍
- 함수의 조합으로 작업을 수행함을 의미하며, 작업 도중 작업에 필요한 데이터와 상태는 변하지 않는다.

입력 -> 함수 -> 출력값1 -> 함수 -> 출력값2 -> 함수 -> 출력값3
이처럼 외부에 아무런 영향을 미치지 않는 함수를 순수함수라 함. (pure function)
또한, 함수를 또 하나의 값으로 간주하여 함수의 인자 혹은 반환값으로 사용하는 함수를 고계 함수라함. (Higher-order function)

명령형 프로그래밍 (C++, java 등)과 다른점은?
- 순수 함수도 있지만, 주로 여러가지 명령이 기술되어 있는 함수형태로 프로그래밍을 진행한다. (procedure)
ex.)
 printf는 입력값, 출력값이 존재하지만, 실제 내부적으로 입력값을 화면에 출력하는 동작을 수행한다. 실제 printf의 결과값을 받아 처리하는 경우는 거의 없다.
 즉, 특정 작업의 순차적인 명령을 기술하는데 중점을 둔다. 결과값에 중점을 두지 않는다.

하지만, 순수 함수는 외부에 아무런 영향을 주지 않는 선에서 로직을 처리하여 결과를 반환하는데 목적을 둔다.
*/

// 자바스크립트는 일급 객체로서의 함수, 클로저를 통해 함수형 프로그래밍이 가능하다.

var f1 = function(input) {
    var result;
    result = 1;
    return result;
}

var f2 = function(input) {
    var result;
    result = 2;
    return result;
}

var f3 = function(input) {
    var result;
    result = 3;
    return result;
}

var get_encrypted = function(func) {
    var str = 'zzoon';
    // 여기서 반환하는 함수가 클로저이다.
    // 클로저에서 접근하는 변수 str은 외부에서는 접근할 수 없다. (오로지 get_encrypted() 내부에 있는 변수만 사용할 수 있음)
    return function() {
        return func.call(null, str) ;
    }
}

var encrypted_value = get_encrypted(f1)();
console.log(encrypted_value) ;