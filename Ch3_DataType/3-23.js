
/*
splice(start, deleteCount, item) 배열 메서드
start - 배열의 시작 위치
deleteCount - 삭제할 요소의 수
item - 삭제할 위치에 추가할 요소
*/

var arr = ['zero','one','two','three']

// 배열의 2번째 요소에서 1개의 요소를 삭제할 것. ('two' 요소 삭제)
arr.splice(2,1)
console.log(arr) ;
console.log(arr.length) ;