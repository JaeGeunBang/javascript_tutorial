/*
배열과 객체의 차이점.
*/

// 배열
var colorsArray = ['orange', 'yellow', 'green']
document.writeln(colorsArray[0])
document.writeln(colorsArray[1])
document.writeln(colorsArray[2])

// 객체
var colorsObj = {
  '0': 'orange',
  '1': 'yellow',
  '2': 'green'
};
// 객체 []에 들어가는 값은 key값이 들어가야함.
document.writeln(colorsObj[0]) ;
document.writeln(colorsObj[1]) ;
document.writeln(colorsObj[2]) ;

document.writeln(typeof colorsArray)
document.writeln(typeof colorsObj) ;
// 위 내용까진 배열과 객체는 동일함. 아래부터는 다름.

// 객체와 배열은 자신의 부모인 프로토타입 객체가 다르기 때문에 length, push와 같은 메서드는 객체에는 없음.
document.writeln( colorsArray.length)
document.writeln( colorsObj.length) ;

colorsArray.push('red') ;
colorsObj.push('red') ;