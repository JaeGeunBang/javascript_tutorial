
var ArrCreate = function(arg) {
    var arr = [1,2,3];

    return {
        getArr : function() {
            return arr;
        }
    };
}

var obj = ArrCreate() ;
var arr = obj.getArr() ;
arr.push(5) ;
console.log(obj.getArr()) // 1,2,3,5 (문제점 발생..)

// 객체를 반환할 때는 객체의 주요 정보를 새로운 객체에 담아서 반환하는 방법으로 해야한다.