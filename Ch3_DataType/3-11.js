
/*
- num은 call by value
- obj는 call by reference
즉, 함수안에서 값을 변경하면, 
call by value는 함수가 끝나면 값이 변경되지 않았지만,
call by reference는 함수안에서 수정한 값이 그래도 저장되어 있음.
*/

var a = 100;
var objA = {value : 100};

function changeArg(num, obj) {
    num = 200;
    objA.value = 200;

    document.writeln(num);
    document.writeln(objA.value);
}

changeArg(a, objA) ;

document.writeln(a) ;
document.writeln(objA.value) ;