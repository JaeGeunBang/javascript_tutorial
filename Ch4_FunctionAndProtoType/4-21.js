
/*
함수 호출과 this
- arguments 객체
*/

function func(args1, args2) {
    console.log(arg1, args2)
}

func() ; //undefined undefined
func(1) ; // 1 undefined
func(1,2) ; // 1 2
func(1,2,3); // 1 2