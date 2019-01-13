
/*
함수 인자로 전달
- foo라는 함수 변수를 생성하고, 이는 파라미터로 function을 받는다.
*/

var foo = function(func) {
    func();
};

foo(function() {
    console.log('Function can be used as the argument.')
});

