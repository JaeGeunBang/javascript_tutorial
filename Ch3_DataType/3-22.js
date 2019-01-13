
/*
배열 요소 삭제 방법
delete 를 통해 삭제할 수 있음 (앞서 설명했었지만, 객체는 삭제할 수 없음)
*/

var arr = ['zero','one','two','three']

delete arr[2];
console.log(arr) ;
console.log(arr.length) ;