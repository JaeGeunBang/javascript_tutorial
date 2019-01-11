
/*
- 객체 프로퍼티에 접근하는 방법은 두가지가 있음.
1. 대괄호 []
2. 마침표 .
*/

var foo = {
    name: 'foo',
    major: 'computer science'
};

// 객체 프로퍼티 읽기
document.writeln(foo.name);
document.writeln(foo['name']);
document.writeln(foo.nickname); // undefined

// 객체 프로퍼티 갱신
foo.major = 'electronics engineering';
document.writeln(foo.major) ;
document.writeln(foo['major']) ;

// 객체 프로퍼티 동적 생성
foo.age = 30;
document.writeln(foo.age) ;

// 대괄호 표기법만을 사용해야 하는 경우
// 프로퍼티의 이름에 예약어나, 표현식일 경우엔 [] 대괄호를 써야한다.
// 3번째 foo.full-name은 '-' 연산자로 착각해서 NaN (Not a Number) 이 나온 것.
foo['full-name'] = 'foo bar';
document.writeln(foo['full-name']) ;
document.writeln(foo.full-name) ; // NaN
document.writeln(foo.full) ; // undefined
document.writeln(foo.name) ; // undefined