
/*
상속
- 자바스크립트는 정통적인 상속 방법을 제공하지 않음
- 객체 프로토타입 체인을 이용해 상속을 구현한다.
*/

function create_object(o) {
    function F() {}
    F.prototype = o;
    return new F() ;
}

// 인자로 들어온 객체를 부모로 하는 자식 객체를 생성해서 반환하는 함수.
/*
Function F (var f = new F()) --> Object o --> Object.prototype
즉, var f는 인자로 받은 o 객체를 상속받는다.
*/