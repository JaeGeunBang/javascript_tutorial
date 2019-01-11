// 숫자
var intNUm = 10;
var floatNum = 0.1;

// 문자열 타입
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = "Double quote string";
var singleChar = 'a';

// 불린 타입
var boolVar = true;

// undefined 타입
var emptyVar;

// null 타입
var numVar = null;

document.write(typeof intNUm, typeof floatNum, typeof singleChar, typeof doubleQuoteStr, typeof singleChar, typeof boolVar, typeof emptyVar, typeof numVar) ;
/*
- 자바스크립트는 var라는 한가지 키워드로만 변수를 선언한다. 이렇게 선언된 변수에는 어떤 타입의 데이터라도 저장하는 것이 가능하다.
- 또한, 숫자, 문자열, 불린값, null, undefined 를 제외하고 모든 값은 객체이다.
*/