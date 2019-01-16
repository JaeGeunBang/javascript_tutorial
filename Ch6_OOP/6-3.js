
// 앞에 내용 변형된 형태

// 함수 이름과, 함수 자체를 input으로 받아, 프토로타입의 새로운 함수로 생성할 수 있는 method라는 function을 프로토타입에 정의해둔다.
Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
}

function Person(arg) {
    this.name = arg;
}

// 미리 선언해둔 method라는 function을 사용해 새로운 프로퍼티를 생성한다.
Person.method("setName", function(value) {
    this.name = value ;
});

Person.method("getName", function() {
    return this.name ;
});

var me = new Person("me") ;
var you = new Person("you") ;
console.log(me.getName()) ;
console.log(you.getName()) ;