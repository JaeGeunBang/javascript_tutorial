
/* 
배열의 length 프로퍼티
*/
var arr = [];
document.writeln(arr.length) ;

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;

arr[100] = 100;
document.writeln(arr.length) ;

arr = [0,1,2];
document.writeln(arr.length) ;

// 3개 중에 나머지 2개는 undefined가 채워짐
arr.length = 5;
document.writeln(arr.length) ;

arr.length = 2;
document.writeln(arr.length) ;