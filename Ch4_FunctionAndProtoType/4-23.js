
/*
다시 정리.
- 자바스크립트에서 함수 호출 할 때, 인자 외에도 arguments 객체와 this 인자가 함수 내부로 암묵적으로 전달됨.

객체의 메서드 호출할 때 this 바인딩 예제
*/

var myObject = {
    name: 'foo',
    sayName: function() {
        console.log(this.name) ;
    }
};

var otherObject = {
    name: 'bar'
};

otherObject.sayName = myObject.sayName;

myObject.sayName() ; // 출력값 foo
otherObject.sayName() ; // 출력값 bar
// otherObject의 this는 자신을 호출한 객체에 바인딩 됨.
