
/*
클로저
- 이미 생명주기가 끝난 외부 함수의 변수를 참조하는 함수를 뜻함.
- 클로저로 참조되는 외부 변수 (ex. var x)를 자유 변수라 함.
*/

function outerFunc() {
    var x = 10; //자유변수
    var innerFunc = function() { console.log(x); } //클로저 (innerFunc가 이미 생명주기가 끝난 outerFunc의 자유변수인 x를 참조함)
    return innerFunc;
}

var inner = outerFunc() ;
inner() ;

/*
outerFunc()를 inner로 instance하면서, outerFunc()의 생명 주기는 끝날 것이다.
- 즉, inner에는 innerFunc()만 남아 있을 것.
하지만, outerFunc()가 가진 x값이 출력되는 것을 확인 할 수 있음.
*/