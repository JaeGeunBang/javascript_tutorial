
/* 
Function() 생성자 함수를 통한 함수 생성
- Function()이라는 기본 내장 생성자로부터 생성한 객체.
- 이는 자주 사용하지 않음. 그냥 상식 수준에서 알아둘 것.
*/

var add = new Function('x','y', 'return x+y')
console.log(add(3,4)) 