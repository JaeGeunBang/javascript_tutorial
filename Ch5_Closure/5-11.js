/*
2. 함수의 캡슐화
*/

var buffAr = [
    'I am ',
    '',
    '. I live in' ,
    '',
    '. i\am ',
    '',
    ' years old.'
];

function getCompletedStr(name, city, age) {
    buffAr[1] = name ;
    buffAr[3] = city ;
    buffAr[5] = age ;
    return buffAr.join('') ;
}

var str = getCompletedStr('zzoon', 'seolu', 16) 
console.log(str) ;

/*
동작은 잘 하다만, 위 buffAr 배열은 전역 변수로서 외부에 노출되어 있음.
이를 클로저를 활용해 buffAr을 추가적인 스코프에 넣고 사용하면, 문제해결을 할 수 있음.
*/