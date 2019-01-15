var var1 = 1;
var var2 = 2;

function func() {
    var var1 = 10;
    var var2 = 20;
    console.log(var1) ;
    console.log(var2) ;
}

func();
console.log(var1) ;
console.log(var2) ;

/*
스코프 체인
1: func() 변수 객체
0: 전역 객체

var1, var2는 스코프체인에 가장 상위인 func() 변수 객체를 먼저 탐색하고, 없으면 전역 객체를 탐색한다.
*/