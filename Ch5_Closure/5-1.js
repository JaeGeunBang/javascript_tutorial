
/*
실행 컨텍스트란?
- 실행 가능한 자바스크립트 코드 블록이 실행되는 환경
*/

console.log("This is global context") ;

function ExContext1() {
    console.log("This is ExContext1") ;
};

function ExContext2() {
    ExContext1()
    console.log("This is ExContext2") ;
};

ExContext2() 

// Stack이 아래와 같이 쌓인다.
// ExContext1()
// ExContext2()
// 전역 컨텍스트