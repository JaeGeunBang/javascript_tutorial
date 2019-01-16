
/*
일반적인 클래스 생성 방법
- 하지만 해당 예제에 문제점이 있는데, 만약 여러 인스턴스를 만든다고 했을 때 getName, setName 함수를 인스턴스마다 따로 가지고 있어야 한다. (낭비)
*/

function Person(arg) {
    this.name = arg;

    this.getName = function() {
        return this.name ;
    }

    this.setName = function(value) {
        this.name = value ;
    }
}

var me = new Person("zzoon") ;
console.log(me.getName()) ;

me.setName("iamhjoo") ;
console.log(me.getName()) ;