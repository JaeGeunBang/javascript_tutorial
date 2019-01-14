
/*
함수 호출과 this
- arguments 객체
argument 객체는 함수를 호출 할 때 넘긴 인자들이 배열 형태로 저장된 객체를 뜻함 (유사 배열 객체)

호출된 인자를 확인하고 이에 따라 동작을 다르게 함. (개수가 달라도 에러가 발생하지 않음)
이를 가능하게 하는것은 arguments 객체 때문임
즉, args1, args2를 넘기면 이는 argument 객체가 암묵적으로 내부로 전달됨
*/

function func(args1, args2) {
    console.log(args1, args2)
}

func() ; //undefined undefined
func(1) ; // 1 undefined
func(1,2) ; // 1 2
func(1,2,3); // 1 2