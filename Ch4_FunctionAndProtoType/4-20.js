
/*
함수를 리턴하는 함수
*/

var self = function() {
    console.log('a') 
    return function() {
        console.log('b')
    }
}

self = self() // a를 출력하고 return 값 (b)를 저장한다.
self() // b를 출력한다.