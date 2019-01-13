
/*
자바스크립트는 함수도 객체라 할 수 있음.
함수 자체가 객체처럼 프로퍼티들을 가질 수 있다는 의미이다.
*/

function add(x,y) {
    return x + y;
}

add.result = add(3,2) ;
add.status = 'OK'

/*
즉, add()는 Code 내부 프로퍼티에 자동으로 저장됨.
add.result, status와 function add()를 갖는 객체 형태를 갖는다.
*/