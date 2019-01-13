
/*
Array() 생성자 함수
- 생성자 함수에 인자가 1개면, 배열의 크기를 잡아주는 것.
- 만약 함수가 2개 이상이면, 요소를 채워주며 인자수만큼 배열의 크기가 결정됨
*/

 var foo = new Array(3) ;
 console.log(foo) ;
 console.log(foo.length) ;

 var bar = new Array(1,2,3) ;
 console.log(bar) ;
 console.log(bar.length) ;