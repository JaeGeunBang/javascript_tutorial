
var getCompletedStr = (function() {
    var buffAr = [
        'I am ',
        '',
        '. I live in' ,
        '',
        '. i\am ',
        '',
        ' years old.'
    ];

    return (function(name, city, age) {
        buffAr[1] = name;
        buffAr[3] = city;
        buffAr[5] = age;
        return buffAr.join('')
    });
})();

var str = getCompletedStr('zzoon', 'seolu', 16) 
console.log(str) ;