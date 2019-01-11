
/*
- 객체란 이름, 값 형태의 프로퍼티들을 저장하는 컨테이너로, 해시 라는 자료구조와 상당히 유사하다.
- 참조 타입인 객체는, 여러 개의 프로퍼티들을 포함할 수 있다.

객체 생성은 두 가지 방법이 있다.
1. Object를 이용
2. 객체 리터럴 방식 이용
3. 생성자 함수 이용 (이건 추후에..)
*/

// object 이용
var foo = new Object();

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

document.writeln(typeof foo);
document.writeln(foo.name, foo.age, foo.gender);

// 객체 리터럴 방식 이용
var foo2 = {
    name: 'foo',
    age: 30,
    gender: 'male'
};

document.writeln(typeof foo2) ;
document.writeln(foo2.name, foo2.age, foo2.gender) ;