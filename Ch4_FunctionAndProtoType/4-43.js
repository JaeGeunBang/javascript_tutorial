
function Person(name) 
{
    this.name = name ;
}

console.log(Person.prototype.constructor) ;

var foo = new Person('foo') 
console.log(foo.country) ;

Person.prototype = {
    country: 'korea'
};
console.log(Person.prototype.constructor) ;

var bar = new Person('bar')
console.log(foo.country)
console.log(bar.country)
console.log(foo.constructor)
console.log(bar.constructor)

/* 출력값
Person(name)
undefined
Object()undefined
korea
Person(name)
Object()

중간에 bar의 prototype을 country: 'korea'로 바꿈으로써,
foo와 bar는 같은 함수로 만든 객체이지만 bar는 중간에 다른 객체로 변경이 되었음.
*/