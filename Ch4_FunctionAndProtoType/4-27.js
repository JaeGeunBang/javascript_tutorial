
/*
여기선 원했던 2,3,4값이 출력될것.

자바스크립트는 이와 같은 this 바인딩의 한계를 극복하기 위해, this 바인딩을 명시적으로 할 수 있도록 call, apply 메서드를 제공함. (이후 소개)
*/

var value = 100;

var myObject = {
    value: 1,
    func1: function() {
        var that = this;
        this.value += 1;
        console.log('func1() called. this.value' + this.value) ;
        
        func2 = function() {
            that.value += 1;
            console.log('func2() called. this.value' + that.value);

            func3 = function() {
                that.value += 1;
                console.log('func3() called. this.value' + that.value);
            }

            func3() ;
        }
        func2(); 
    }
}

myObject.func1() ;