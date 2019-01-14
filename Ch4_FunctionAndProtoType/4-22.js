
// 함수 호출 시 a,b가 배열 형태로 넘어감 (arguments라는 객체에 a는 0번 인덱스, b는 1번 인덱스)
// 배열이 아니고 객체이기 때문에, 배열 메서드를 사용할 경우 (push 같은거) 에러가 발생할 것.
function add(a,b){
    console.dir(arguments) ;
    return a+b;
}

console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));

function sum()
{
    var result = 0
    for(var i = 0 ; i < arguments.length ; i++)
        result += arguments[i];
    return result;
}

// sum 함수가 아무런 인자를 받지 않도록 선언되어 있어도, 내부적으로 argument 객체가 넘어감.
console.log(sum(1,2,3)) //출력 값 6
console.log(sum(1,2,3,4,5,6,7,8,9)) //출력값 45