
var Person = function(arg) {
    var name = arg ? arg:"zzoon";

    var func = function() {}
    func.prototype = {
        getName : function() {
            return name;
        },
        setName : function(arg) {
            name = arg;
        }
    };

    return func;
}();

var me = new Person() ;
console.log(me.getName()) ;