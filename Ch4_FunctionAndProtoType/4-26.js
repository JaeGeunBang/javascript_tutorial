
/*
func1에 있는 value는 myObject에 있는 value를 증가시킨다.
func2, 3은 this(전역 객체)에 있는 value를 증가시킨다.
즉, 출력 값은 2,3,4가 아닌 2,101,102가 됨

이를 위해, 부모함수의 this를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법이 사용됨.
*/

var value = 100;

var myObject = {
    value: 1,
    func1: function() {
        this.value += 1;
        console.log('func1() called. this.value' + this.value) ;
        
        func2 = function() {
            this.value += 1;
            console.log('func2() called. this.value' + this.value);

            func3 = function() {
                this.value += 1;
                console.log('func3() called. this.value' + this.value);
            }

            func3() ;
        }
        func2(); 
    }
}

myObject.func1() ;