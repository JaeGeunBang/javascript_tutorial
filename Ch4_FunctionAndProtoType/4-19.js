
/*
외부에서 내부 함수를 접근할 수 없으니, 아래와 같은 방법으로 접근할 수 있음.
즉, parent가 child() 함수를 return해주어야 외부에서 접근이 가능함.
inner와 같은 함수를 클로저라고 하며, 이는 5장에서 소개함.
*/

function parent()
{
    var a = 100 ;
    var child = function() {
        console.log(a) ;
    }

    return child;
}

var inner = parent() ;
inner();