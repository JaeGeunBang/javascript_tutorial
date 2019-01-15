var value = "value1";

function printValue() {
    return value ;
}

function printFunc(func) {
    var value = "value2";
    console.log(func())
}

printFunc(printValue) ;

/*
출력 값은 value1
- printValue랑 printFunc는 모두 전역 객체에 선언된 변수 객체이다.
- 그렇기 때문에 printFunc를 printFunc 내부에서 호출을 하더라도 value 값은 전역 객체에 선언된 값을 읽어 온다.

printFunc [[scope]] --> 0: 전역 객체 - 1: printFunc 변수 객체
printValue [[scope]] --> 0: 전역 객체 - 1: printValue 변수 객체
*/


/*
참고
with
- 스코프 체인을 사용자가 임의로 수정하는 키워드.
*/

var y = {x:5 }

function withExamFunc() {
    var x = 10;
    var z;
    with (y){
        z = function() {
            console.log(x);
        }
    }
    z();
}

//위 실행에서 x값은 5가 출력이 되는데, with(y)를 통해 y 객체를 스코프 체인 맨 앞에 추가했기 때문임.