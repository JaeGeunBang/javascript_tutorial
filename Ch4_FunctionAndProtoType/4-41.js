function Person(name) {
    this.name = name ;
}

var foo = new Person('foo')

Person.prototype.sayHello = function() {
    console.log('Hello')
}

foo.sayHello() ;

/*
프로토타입 객체 역시 자바스크립트 객체이므로, 일반 객체 처럼 동적으로 프로퍼티를 추가/삭제할 수 있음.
*/