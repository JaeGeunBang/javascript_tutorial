
/*
캡슐화
- 자바스크립트는 public, private 같은 정보 은닉을 위한 키워드를 제공하지 않는다.
- 아래 코드는 기본적인 정보 은닉 방법임.
*/

var Person = function(arg) {
    var name = arg ? arg : "zzoon"; // var로 선언된 변수는 외부에서 접근이 불가능 하다.

    this.getName = function() { // 함수로 선언된 얘들은 클로저 역할을 하면서, Person()에 선언된 name에 자유변수로 접근할 수 있다.
        return name ;
    }
    this.setName = function(arg) {
        this.name = arg;
    }
};

var me = new Person() ;
console.log(me.getName()) ;
me.setName("iamhjoo") ;
console.log(me.getName()) ;
console.log(me.name) ; // 출력 undefined