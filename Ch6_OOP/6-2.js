
/*
prototype에 getName, setName을 선언함으로써, Person() 함수로 인스턴스한 객체들은 getName, setName을 각 가지고 있지 않는다.
*/

function Person(arg)
{
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name ;
}

Person.prototype.setName = function(name) {
    this.name = name ;
}