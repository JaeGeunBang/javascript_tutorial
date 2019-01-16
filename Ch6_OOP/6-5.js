
// 앞에 내용의 예제

var person = {
    name: "zzoon",
    getName: function() {
        return this.name ;
    },
    setName: function(arg) {
        this.name = arg;
    }
};

function create_object(o) {
    function F() {};
    F.prototype = o;
    return new F() ;
}

var student = create_object(person) ;
student.setName("me") ;
console.log(student.getName()) ; // 출력값 me

/*
자식 클래스는 추가로 자신의 메서드를 재정의 혹은 추가로 확장시킬수 있어야 한다.
가장 간단한 방법은
student.setAge = function(arg) {}
student.getAge = function() {}
지만, 이렇게 하면 코드가 지저분 해질 것이다.

extend()를 활용할 수 있다. 이건 6-6.js참고.
*/