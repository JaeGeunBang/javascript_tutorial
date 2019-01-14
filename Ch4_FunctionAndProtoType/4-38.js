
var myObject = {
    name: 'foo',
    sayName: function() {
        console.log('My name is ' + this.name) ;
    }
};

myObject.sayName() ;
// MyObject는 hasOwnProperty라는 메서드가 없고, 이는 Object가 가지고 있음.
// Object가 가지고 있는 메서드임.
console.log(myObject.hasOwnProperty('name'))
console.log(myObject.hasOwnProperty('nickName')) ;
myObject.sayNickName() ;

/*
프로토타입 체이닝.
- 자바스크립트에서 특정 객체의 프로퍼티나 메서드에 접근하려고 할 때, 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면?
- [[Prototype]] 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것을 의미함.
*/