
/*
객체 리터럴 방식, 생성자 함수로 객체를 만들었을 때의 차이점은?

- 프로토타입 객체에 차이가 있음
객체 리터럴 방식은 Object.prototype이 자신의 프로토타입 객체
생성자 함수 방식은 Person.prototype이 자신의 프로토타입 객체
*/

// 객체 리터럴 방식으로 foo 객체 생성
var foo = {
    name: 'foo',
    age: 35,
    gender: 'man'
};
console.dir(foo) ;


// 생성자 함수
function Persion(name, age, gender, position) {
    this.name = name ;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 33, 'woman');
console.dir(bar) ;

var baz = new Person('baz', 25, 'woman') ;
console.dir(baz) ;