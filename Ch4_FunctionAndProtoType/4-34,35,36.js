
/*
함수 리턴
- 자바스크립트는 항상 리턴값을 반환함. 특히 return 문을 사용하지 않았더라도 다음의 규칙을 통해 항상 리턴값을 전달함
*/

// 규칙1) 일반 함수나 메서드는 리턴값을 지정하지 않을 경우, undefined 값이 리턴됨.
// undefined 값이 리턴됨.
var noReturnFunc = function() {
    console.log('this function has no return statement.');
};

var result = noReturnFunc();
console.log(result) ;


//규칙2) 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴됨.
// 그렇기 때문에 보통 return 값을 지정하지 않는다. 몇 가지 예외 상황은 있다.
// 1. 생성자 함수에서 명시적으로 객체를 리턴했을 경우
function Person(name, age, gender) {
    this.name = name ;
    this.age = age;
    this.gender = gender;
    // 명시적으로 다른 객체 반환
    return {name:'bar', age:20, gender:'woman'};
}

var foo = new Person ('foo', 30, 'man');
console.dir(foo) ;

// 2. 생성자 함수에서 명시적으로 기본 타입으로 리턴했을 경우
// 출력 결과는 100이 아닌 객체의 각 프로퍼티들이 출력됨.
function Person(name, age, gender) {
    this.name = name ;
    this.age = age;
    this.gender = gender;

    return 100;
}

var foo = new Person ('foo', 30, 'man');
console.log(foo) ;