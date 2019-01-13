
/*
배열 리터널 생성은 []를 통해 수행함
*/

var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
document.writeln(colorArr[0]);
document.writeln(colorArr[1]);
document.writeln(colorArr[2]);

/*
배열에 꼭 똑같은 타입의 값을 넣지 않아도 됨
*/

var emptyArr = [];
document.writeln(emptyArr[0]) ;

emptyArr[0] = 100;
emptyArr[1] = 'eight';
emptyArr[2] = true;

document.writeln(emptyArr[0]) ;
document.writeln(emptyArr[1]) ;
document.writeln(emptyArr[2]) ;
document.writeln(emptyArr.length) ;
