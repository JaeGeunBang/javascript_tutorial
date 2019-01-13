/*
배열의 표준 메서드와 length 프로퍼티
- 배열 메서드는 length 프로퍼티를 기반으로 동작한다. (즉, 배열은 length 프로퍼티의 상속을 받았다)
- push() 예제
*/

var arr = ['zero', 'one', 'two'];

arr.push('three') ;
document.writeln(arr, arr.length) ;
document.writeln("<br>") ;

arr.length = 5;
arr.push('four') ;
document.writeln(arr, arr.length) ;