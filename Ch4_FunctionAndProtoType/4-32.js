
/*
apply() 메서드를 활용한 arguments 객체의 배열 표준 메서드 slice() 활용 코드
*/

function myFunction() {
    console.dir(arguments) ;

    var args = Array.prototype.slice.apply(arguments);
    // Array.prototype.slice() 메서드를 호출하고, 이때 this는 arguments 객체로 바인딩해라.
    console.dir(args);
}

myFunction(1,2,3);



