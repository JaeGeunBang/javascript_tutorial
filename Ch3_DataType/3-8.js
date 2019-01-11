
/*
- for in 문을 통한 객체 프로퍼티 출력
*/

var foo={
    name: 'foo',
    age: 30,
    major: 'computer science'
};

var prop;
for (prop in foo){
    document.writeln(prop+ " : " + foo[prop] + "<br>")
}

/*
- 객체 프로퍼티 삭제
- delete는 프로퍼티는 삭제할 수 있지만, 객체 자체는 삭제할 수 없다.
*/

var foo2 = {
    name: 'foo2',
    nickname: 'babo'
};

document.writeln(foo2.nickname + "<br>");
delete foo2.nickname;
document.writeln(foo2.nickname + "<br>");

delete foo;
document.writeln(foo2.name + "<br>") ;