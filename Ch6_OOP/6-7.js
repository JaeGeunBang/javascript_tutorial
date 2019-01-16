
/*
클래스 기반의 상속\
- 하지만 이는 me 객체가 Person의 생성자를 호출하지 않는다.
- 즉, me객체는 빈 Student 객체이며, SetName()을 호출해야 name 프로퍼티가 생성된다.
- 이렇게 부모의 생성자 호출이 되지 않는다면, 인스턴스의 초기화과 제대로 이루어지지 않는 문제가 발생할 수 있다.
*/

function Person(arg) {
    this.name = arg;
}

Person.prototype.setName = function(value) {
    this.name = value ;
};

Person.prototype.getName = function() {
    return this.name ;
};

function Student(args) {

}

var you = new Person("iamhjoo") ;
Student.prototype = you;
var me = new Student("zzoon") ;
me.setName("zzoon") ;
console.log(me.getName()) ;