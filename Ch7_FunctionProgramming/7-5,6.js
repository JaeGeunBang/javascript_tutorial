
var cacher = function(cache, func) {
    var calculate = function(n) {
        if (typeof(cache[n]) === 'number') 
            result = cache[n] ;
        else   
            result = cache[n] = func(calculate, n) ;
        return result ;
    }
    return calculate;
}

var fact = cacher({'0':1}, function(func, n) {
    return n * func(n-1);
});

var fibo = cacher({'0':1, '1':1}, function(func, n) {
    return func(n-1) + func(n-2);
});

// cacher를 fact와 fibo둘다 사용할 경우 이런식으로 구현할 수 있음.

console.log(fact(10)) ;
console.log(fibo(10)) ;