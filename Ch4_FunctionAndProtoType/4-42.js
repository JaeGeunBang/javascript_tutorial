function Person(name) {
    this.name = name ;
}

Person.prototype.getName = function() {
    return this.name ;
};

var foo = new Person('foo') 

console.log(foo.getName()) ; //출력값 foo

Person.prototype.name = 'person'
console.log(Person.prototype.getName()) ; // 출력값 person