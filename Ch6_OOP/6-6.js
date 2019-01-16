
var person = {
    name: "zzoon",
    getName: function() {
        return this.name ;
    },
    setName: function(arg) {
        this.name = arg;
    }
};

function create_object(o) {
    function F() {} ;
    F.prototype = o;
    return new F() ;
}

function extend(obj, prop) {
    if (!prop) {prop = obj ; obj = this; }
    // prop 객체에 있는 method들을 obj의 프로퍼티로 만든다.
    for (var i in prop) obj[i] = prop[i];
    return obj;
};

var student = create_object(person) ;
// student에 추가할 method 들을 added 객체로 만들어 extend의 인자로 넘긴다.
var added = {
    setAge : function (age) {
        this.age = age;
    },
    getAge : function () {
        return this.age;
    }
};

extend(student, added)

student.setAge(25);
console.log(student.getAge()) ;