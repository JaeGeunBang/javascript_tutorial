function saySomething (obj, methodName, name) {
    return (function(greeting) {
        return obj[methodName](greeting, name) ;
    });
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name) ;
}

newObj.prototype.who = function(greeting, name) {
    console.log(greeting + " " + (name || "everyone"))
}

var obj1 = new newObj(objHello, "zzoon") ;