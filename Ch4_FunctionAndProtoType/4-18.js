
/*
내부함수.
- 자바스크립트는 함수 내에서 추가로 함수 선언이 가능하다.
- 단, 내부에서 선언된 함수는 외부에서 호출할 수 없다.
*/

function parent(){

    var a = 100;
    var b = 200;

    function cihld() {
        var b = 300;
        console.log(a) ;
        console.log(b) ;
    }

    child() ;
}

parent() ;
child() ;