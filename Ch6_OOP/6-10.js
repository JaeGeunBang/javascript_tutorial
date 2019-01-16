
var Person = function(arg) {
    var name = arg ? arg : "zzoon"
    return {
        getName : function() {
            return name ;
        },
        setName : function(arg) {
            name = arg;
        }
    };
}

var me = Person() ; // or var me = new Person() ;
console.log(me.getName()) ;

/*
여기서 주의할 점은
private 멤버가 객체나 배열일 경우 얕은 복사로 참조만을 반환하므로 사용자가 이후 쉽게 변경할 수 있음.

*/