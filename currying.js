// use currying 
Function.prototype.bind = function() {
    var fn = this;
    var args = Array.prototype.slice.call(arguments);
    var context = args.shift();
    return function() {
        return fn.apply(context, args.concat(Array.prototype.slice.call(arguments)))
    }
}


const obj = {
    name: 'yqz',
};

const sayName = function() {
    return this.name;
}

var c = sayName.bind(obj);

c()
