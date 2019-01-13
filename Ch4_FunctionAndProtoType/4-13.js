/*
length 프로퍼티
- 모든 함수가 가져야하는 표준 프로퍼티로서, 함수가 정상적으로 실행될 때 기대되는 인자의 개수
*/

function func0() {

}

function func1(x) {
    return x;
}

function func2(x, y) {
    return x + y;
}

function func3(x, y, z) {
    return x + y + z;
}

// 차례 대로 length는 0,1,2,3이 출력됨 (인자의 개수이기 때문임.)
console.log(func0.length);
console.log(func1.length);
console.log(func2.length);
console.log(func3.length);