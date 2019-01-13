
/*
배열의 동적 프로퍼티 생성
*/

var arr = ['zero','one','two']
console.log(arr.length) ;

// 객체 요소
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length) ;

// 배열 요소
arr[3] = 'red';
console.log(arr.length);
// length는 배열 요소에 값을 추가했을 때 증가함.
// 객체 요소는 arr 객체(어처피 배열도 객체 프로토타입의 상속을 받기 때문에, 객체)에 color, name 멤버 변수를 추가함
console.dir(arr) ;