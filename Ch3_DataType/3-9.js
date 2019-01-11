
/*
- 객체를 참조타입이라 부르며, 실제 값이 아닌 참조 값으로 처리되기 때문임.
*/

var objA = {
    val: 40
};

// objA랑 objB는 서로 같은 참조 값을 가르키고 있다.
// 그렇기 때문에 objB의 값을 변경하면, objA의 값 또한 변경된다.
var objB = objA;

document.writeln(objA.val + "<br>") ;
document.writeln(objB.val + "<br>") ;

objB.val = 30;

document.writeln(objA.val + "<br>") ;
document.writeln(objB.val + "<br>") ;