
function Person(name, age, hobby) {
    this.name = name ;
    this.age = age;
    this.hobby = hobby;
}

var foo = new Person('foo', 30, 'tennis') ;
console.log(foo.hasOwnProperty('name')) 
console.dir(Person.prototype) ;
/*
foo.hasOwnProperty()가 실행되는 이유는.
1. 먼저 Person() 객체에서 찾는다. 하지만 없으므로,
2. Person()의 프로토타입인 Person.prototype 객체에서 찾는다. 하지만 역시 없으므로,
3. Person.prototype의 프로토타입인 최종 Object.prototype에서 찾는다.

즉, Object.prototype 이 프로토타입 체이닝의 종점이다. 
*/