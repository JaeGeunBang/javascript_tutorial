var value = "value1";

function printFunc() {
    var varlue = "value2";

    function printValue() {
        return value;
    }

    console.log(printValue())
}
printFunc();

/*
앞선 내용과 동일.
*/