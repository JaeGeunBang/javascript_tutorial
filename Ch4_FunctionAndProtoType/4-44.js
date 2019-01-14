function Person(name) {
    this.name = name ;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo')
var bar = new Person('bar') 
console.log(foo.country) 
console.log(bar.country)
foo.country = 'USA'

console.log(foo.country) ;
console.log(bar.country) ;

/*
프로토타입은 객체의 프로퍼티 읽기나 메서드를 실행할때만 동작한다.
즉 위 예제처럼, 처음 두개의 출력은 둘다 'Korea'가 출력된다. 왜냐하면, 둘다 country가 없기 때문에 Prototype이 가진 country를 읽을 것.
하지만, foo의 country는 'USA'로 중간에 변경을 하면, foo는 country 프로퍼티를 갖기 때문에 USA를 출력하고,
bar는 country 프로퍼티가 없기 때문에 앞과 똑같이 'Korea'를 출력한다.
*/