
/*
배열의 프로포티 열거 방법

1. for(var prop in arr) - foreach 접근
배열의 모든 요소와 객체의 모든 요소를 모두 출력함.

2. for(var i = 0 ; ...) - index 접근
배열의 모든 요소만 출력함.
*/ 

var arr = ['zero','one','two']
arr[3] = 'red';
arr.color = 'blue';
arr.name = 'number_array';

for (var prop in arr)
    console.log(prop, arr[prop])

for (var i = 0 ; i < arr.length ; i++)
    console.log(i, arr[i]) ;