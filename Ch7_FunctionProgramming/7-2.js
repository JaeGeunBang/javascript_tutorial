function sum(arr) {
    var len = arr.length ;
    var i = 0, sum = 0 ;

    for(; i< len; i++)
        sum += arr[i];
    return sum;
}

var arr = [1,2,3,4];
console.log(sum(arr)) ;

function multiply(arr) {
    var len = arr.length ;
    var i = 0, sum = 0 ;

    for(; i< len; i++)
        sum *= arr[i];
    return sum;
}

// 위 sum, multiply 함수는 명령형 프로그래밍 방식으로 작성된 코드이다.
// 이를 배열의 각 원소를 또 다른 방식으로 산술하여 결과값을 얻으려면 새로운 함수 구현을 해야한다.

function reduce(func, arr, memo) {
    var len = arr.length,
        i = 0,
        accum = memo;

    // 루프를 돌면서 함수를 실행시킨다. 함수를 실행시킨 후 얻은 결과값은 변수 accum에 계속해서 저장함.
    for( ; i < len ; i++)
        accum = func(accum, arr[i])
    return accum;
}

var arr = [1,2,3,4];
var sum = function(x,y) {
    return x+y;
};
var multiply = function(x,y) {
    return x*y;
};

console.log(reduce(sum, arr, 0)) ;
console.log(reduce(multiply, arr, 1)) ;