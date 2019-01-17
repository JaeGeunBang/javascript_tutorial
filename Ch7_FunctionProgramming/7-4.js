
var fibo = function() {
    var cache = {'0': 0, '1': 1} ;
    var func = function(n) {
        if(typeof(cache[n]) === 'number') {
            result = cache[n];
        }
        else {
            result = cache[n] = func(n-1) + func(n-2) ;
        }

        return result ;
    }

    return func;
}();
// 마지막에 (); 가 없으면 함수를 반환한다.
// 하지만 ();가 있으면, 함수의 반환 값을 반환한다. (즉 fibo의 결과값)

console.log(fibo(10)) ;