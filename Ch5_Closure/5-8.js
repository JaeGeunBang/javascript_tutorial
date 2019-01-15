
function outerFunc(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg) {
        console.log(arg1 + arg2) / (innerArg + local)
    }
    return innerFunc;
}

var exam1 = outerFunc(2, 4);
exam1(2) ;

/*
innerFunc의 [[scope]]는 0:전역 객체, 1:outerFunc 변수 객체, 2: innerFunc 변수 객체
필요한 arg1, arg2, innerArg, local은 각 스코프에서 찾아 계산에 사용함.
*/
