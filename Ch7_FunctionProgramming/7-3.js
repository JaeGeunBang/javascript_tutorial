
function fact(num) {
    var val = 1;
    for(var i = 2 ; i <= num ; i++)
        val = val * i;
    return val;
}

console.log(fact(100)) ;

function fact(num) {
    if (num == 0) return 1;
    else return num * fact(num-1) ;
}

// 위 방법을 메모이제이션을 이용하면 아래와 같다.
var fact = function() {
    var cache = {'0': 1};
    var func = function(n) {
        var result = 0 ;
        if (typeof(cache[n]) === 'number')
            result = cache[n];
        else
            result = cache[n] = n * func(n-1) ;
        return result ;
    }
    return func() ;
}();

console.log(fact(10)) ;
console.log(fact(20)) ;
